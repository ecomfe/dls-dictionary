<template>
  <div class="color-item">
    <v-desc :code="code" :label="label" />
    <div class="value">
      <div class="demo" :style="styles"></div>
      <v-copy-button :value="color" />
    </div>
  </div>
</template>

<script>
import VDesc from "./Desc";
import VCopyButton from "./CopyButton";
import { evaluate } from "../utils";

export default {
  name: "v-color-item",
  components: {
    VDesc,
    VCopyButton
  },
  props: {
    code: String,
    label: String,
    color: String
  },
  computed: {
    styles() {
      return {
        backgroundColor: evaluate(this.color)
      };
    }
  }
};
</script>

<style scoped>
.color-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 24px 0;
}

.value {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
}

.demo {
  position: relative;
  width: 32px;
  height: 32px;
  margin-right: 28px;
  border-radius: 4px;
}

.demo::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  border: 2px dotted #d3d9e6;
  border-radius: 6px;
}
</style>