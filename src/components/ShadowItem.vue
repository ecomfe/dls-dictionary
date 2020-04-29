<template>
  <div class="shadow-item">
    <v-desc :code="code" :label="label" />
    <div class="value">
      <div class="demo" :style="styles"></div>
      <v-copy-button :value="shadow" />
    </div>
  </div>
</template>

<script>
import VDesc from "./Desc";
import VCopyButton from "./CopyButton";
import { evaluate } from "../utils";

export default {
  name: "v-shadow-item",
  components: {
    VDesc,
    VCopyButton
  },
  props: {
    code: String,
    label: String,
    shadow: String
  },
  computed: {
    styles() {
      return {
        boxShadow: evaluate(this.shadow)
      };
    }
  }
};
</script>

<style scoped>
.shadow-item {
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
  width: 180px;
  height: 64px;
  margin-right: 48px;
  border-radius: 4px;
}
</style>