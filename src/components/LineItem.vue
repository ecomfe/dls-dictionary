<template>
  <div class="line-item">
    <v-desc :code="code" :label="label" />
    <div class="value">
      <div class="viewport">
        <div class="line" :style="styles"></div>
      </div>
      <v-copy-button :value="color" />
    </div>
  </div>
</template>

<script>
import VDesc from './Desc'
import VCopyButton from './CopyButton'
import { evaluate } from '../utils'

export default {
  name: 'v-line-item',
  components: {
    VDesc,
    VCopyButton,
  },
  props: {
    code: String,
    label: String,
    color: String,
  },
  computed: {
    styles() {
      return {
        backgroundColor: evaluate(this.color),
      }
    },
  },
}
</script>

<style scoped>
.line-item {
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 36px;
  overflow: hidden;
  margin-right: 32px;
}

.line {
  width: 100%;
  height: 2px;
}
</style>
