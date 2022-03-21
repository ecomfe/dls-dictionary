<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th :class="{ hover: col === 0 }">默认</th>
        <th :class="{ hover: col === 1 }">悬浮</th>
        <th :class="{ hover: col === 2 }">点击</th>
        <th :class="{ hover: col === 3 }">禁用</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td
          v-for="(style, i) in styles"
          :key="i"
          @mouseenter="enterCol(i)"
          @mouseleave="leaveCol"
        >
          <v-piece v-bind="filledStyles[i]" />
        </td>
      </tr>
      <tr v-for="(p, i) in properties" :key="i">
        <th>{{ p.label }}</th>
        <td
          v-for="(style, i) in styles"
          :key="i"
          @mouseenter="enterCol(i)"
          @mouseleave="leaveCol"
        >
          <v-copy-button :value="getStyleProp(style, p.prop)" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import VPiece from './Piece'
import VCopyButton from './CopyButton'

export default {
  name: 'v-piece-table',
  inject: ['options'],
  components: {
    VPiece,
    VCopyButton,
  },
  props: {
    styles: Array,
    properties: Array,
  },
  data() {
    return {
      col: null,
    }
  },
  computed: {
    filledStyles() {
      return this.styles.map((style, i) => {
        let merged = Object.keys(style).reduce((acc, prop) => {
          acc[prop] = style[prop] ?? this.styles[0][prop]
          return acc
        }, {})
        return {
          ...merged,
          ...(this.options.focus && this.styles[0].focusRing
            ? {
                border:
                  i === 3
                    ? null
                    : this.styles[0].focusRing === 'error'
                    ? '@dls-border-color-error-focus'
                    : '@dls-border-color-focus',
                shadow:
                  i === 3
                    ? null
                    : this.styles[0].focusRing === 'error'
                    ? '@dls-shadow-error-focus'
                    : '@dls-shadow-focus',
              }
            : {}),
        }
      })
    },
  },
  methods: {
    enterCol(i) {
      this.col = i
    },
    leaveCol() {
      this.col = null
    },
    getStyleProp(style, p) {
      if (Array.isArray(p)) {
        for (let i = 0; i < p.length; i++) {
          if (style[p[i]] != null) {
            return style[p[i]]
          }
        }

        return null
      }

      return style[p]
    },
  },
}
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
}

thead th,
td {
  text-align: center;
}

tbody th {
  text-align: right;
}

th {
  color: #848b99;
  transition: color 0.2s;
}

th,
td {
  padding: 12px 16px;
}

tbody tr:hover th,
th.hover {
  color: #282c33;
}

x-layer {
  margin: auto;
}
</style>
