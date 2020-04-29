<template>
  <div class="radius-item">
    <v-desc :code="code" :label="label" />
    <div class="value">
      <div class="viewport">
        <div class="box" :style="styles"></div>
      </div>
      <v-copy-button :value="radius" />
    </div>
  </div>
</template>

<script>
import VDesc from "./Desc";
import VCopyButton from "./CopyButton";
import { evaluate } from "../utils";

export default {
  name: "v-radius-item",
  components: {
    VDesc,
    VCopyButton
  },
  props: {
    code: String,
    label: String,
    radius: String
  },
  computed: {
    styles() {
      return {
        borderRadius: evaluate(this.radius)
      };
    }
  }
};
</script>

<style scoped>
.radius-item {
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

.viewport {
  position: relative;
  top: -6px;
  width: 36px;
  height: 36px;
  overflow: hidden;
  margin-right: 24px;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 36px;
  height: 36px;
  border: 2px solid #545b66;
}
</style>