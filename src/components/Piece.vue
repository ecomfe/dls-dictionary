<template>
  <x-layer :style="style">{{ this.color ? this.text : '' }}</x-layer>
</template>

<script>
import { evaluate } from "../utils";

export default {
  name: "v-piece",
  inheritAttrs: false,
  props: {
    background: String,
    border: String,
    borderWidth: String,
    color: String,
    shadow: String,
    text: {
      type: String,
      default: '文'
    },
    fontSize: String,
    fontWeight: String
  },
  computed: {
    style() {
      return evaluate({
        backgroundColor: this.background,
        border: `1px solid ${this.border ?? 'transparent'}`,
        borderWidth: this.borderWidth || 'invalid',
        color: this.color,
        boxShadow: this.shadow,
        fontSize: this.fontSize,
        fontWeight: this.fontWeight
      });
    }
  }
};
</script>

<style scoped>
x-layer {
  font-size: 20px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>