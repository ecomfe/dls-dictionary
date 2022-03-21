<template>
  <button :data-code="value" :disabled="!value" v-clipboard:copy="value">
    <v-icon v-if="value" name="regular/copy" label="copy" />
    <v-icon v-else name="ban" />
  </button>
</template>

<script>
import VIcon from 'vue-awesome'
import 'vue-awesome/icons/regular/copy'
import 'vue-awesome/icons/ban'

export default {
  name: 'v-copy-button',
  props: {
    value: String,
  },
  components: {
    VIcon,
  },
}
</script>

<style scoped>
button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 16px;
  color: #282c33;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition-property: background-color, color;
  transition-duration: 0.2s;
  outline: none;
  cursor: pointer;
}

button:hover {
  background-color: #ebedf5;
  color: #545b66;
}

button:active {
  background-color: #e2e6f0;
  color: #000;
}

button::after {
  content: attr(data-code);
  position: absolute;
  transform: translate(-50%, 8px);
  bottom: 100%;
  left: 50%;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-family: Menlo, consolas, monospace;
  white-space: nowrap;
  color: #fff;
  opacity: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.6);
  transition-property: opacity, transform;
  transition-duration: 0.2s;
}

button:hover::after {
  transform: translate(-50%, -8px);
  opacity: 1;
}

button:disabled {
  pointer-events: none;
  color: #848b99;
  opacity: 0.4;
}
</style>
