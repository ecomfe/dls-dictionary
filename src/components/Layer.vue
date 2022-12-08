<template>
  <x-layer
    :id="id"
    :class="{ focus, disabled }"
    :style="{ '--context': context }"
    v-html="content"
  />
</template>

<script>
import { evaluate } from '../utils'

let count = 0

export default {
  name: 'v-layer',
  props: {
    styles: Array,
    disabled: Boolean,
    focus: Boolean,
    text: {
      type: String,
      default: '文',
    },
  },
  data() {
    return {
      hover: false,
      active: false,
      id: `layer${++count}`,
    }
  },
  computed: {
    content() {
      let [normal, hover, active, disabled] = this.styles
      hover = hover || normal
      active = active || hover
      disabled = disabled || normal
      let evaled = evaluate([normal, hover, active, disabled])

      return [
        '<style>',
        ...['', ':hover', ':active', '.disabled'].map((selector, i) => {
          let style = evaled[i]
          let merged = Object.keys(style).reduce((acc, prop) => {
            acc[prop] = style[prop] ?? evaled[0][prop]
            return acc
          }, {})
          return [
            `#${this.id + selector} {`,
            merged.background ? `background-color: ${merged.background};` : '',
            `border: 1px solid ${merged.border ?? 'transparent'};`,
            merged.borderWidth ? `border-width: ${merged.borderWidth};` : '',
            merged.color ? `color: ${merged.color};` : '',
            merged.shadow ? `box-shadow: ${merged.shadow};` : '',
            '}',
          ].join('')
        }),
        '</style>',
        normal.color ? this.text : '',
      ].join('')
    },
    context() {
      return evaluate(this.styles[0].context) || ''
    },
  },
}
</script>

<style scoped>
x-layer {
  font-size: 32px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
