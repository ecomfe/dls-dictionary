<template>
  <div class="exp-item">
    <div class="demo">
      <div class="line" :style="`width: ${length}`"></div>
    </div>
    <div class="value">
      <code>{{ label }}</code>
      <v-copy-button :value="label" />
    </div>
  </div>
</template>

<script>
import VCopyButton from "./CopyButton";
import { evaluate, multiplyLength } from "../utils";

export default {
  name: "v-exp-item",
  components: {
    VCopyButton
  },
  props: {
    exp: Object
  },
  computed: {
    label() {
      return `${this.exp.unit} * ${this.exp.count}`;
    },
    length() {
      return multiplyLength(evaluate(this.exp.unit), this.exp.count);
    }
  }
};
</script>

<style scoped>
.exp-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  padding: 24px 0;
}

.demo {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 20px;
  margin-bottom: 32px;
}

.demo::before,
.demo::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 2px;
  height: 3px;
  background-color: #282c33;
}

.demo::before {
  left: 0;
}
.demo::after {
  right: 0;
}

.line {
  height: 2px;
  background-color: #282c33;
}

.value {
  display: flex;
  align-items: center;
  justify-content: center;
}

code {
  margin-right: 24px;
  font-size: 20px;
}
</style>