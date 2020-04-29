<template>
  <div class="font-item">
    <v-desc :code="code" :label="label" />
    <div class="value">
      <v-piece v-bind="fontStyles" />
      <v-copy-button :value="value" />
    </div>
  </div>
</template>

<script>
import VDesc from "./Desc";
import VPiece from "./Piece";
import VCopyButton from "./CopyButton";

export default {
  name: "v-font-item",
  components: {
    VDesc,
    VPiece,
    VCopyButton
  },
  props: {
    code: String,
    label: String,
    styles: Object
  },
  computed: {
    fontStyles() {
      return {
        ...this.styles,
        color: "@dls-foreground-color-neutral"
      };
    },
    value() {
      return this.styles.fontSize ?? this.styles.fontWeight;
    }
  }
};
</script>

<style scoped>
.font-item {
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

x-layer {
  margin-right: 24px;
}
</style>