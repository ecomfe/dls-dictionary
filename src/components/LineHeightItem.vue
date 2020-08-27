<template>
  <div class="line-height-item">
    <v-desc :code="code" :label="label" />
    <div class="value">
      <div class="demo" :style="styles">百度将在 2020 年，在全线产品上线新的设计语言。</div>
      <v-copy-button :value="lineHeight" />
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
    lineHeight: String
  },
  computed: {
    styles() {
      return {
        lineHeight: evaluate(this.lineHeight)
      };
    }
  }
};
</script>

<style scoped>
.line-height-item {
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
  border-top: 1px dotted #d3d9e6;
  border-bottom: 1px dotted #d3d9e6;
  margin-right: 24px;
  font-size: 14px;
  color: #282c33;
}
</style>