<template>
  <div
    id="app"
    @click.self="focus"
    @click="waitToFocus"
    @mousemove="waitToFocus"
    @keydown="waitToFocus"
  >
    <input
      id="search"
      type="text"
      ref="search"
      placeholder="编号…"
      v-model="query"
      :name="random"
      @mouseenter="focus"
    />
    <div id="options">
      <!-- <label id="focus">
        <input type="checkbox" v-model="options.focus" />焦点
      </label>-->
    </div>
    <div id="results">
      <div v-if="exp" key="exp" class="result">
        <v-exp-item :key="`e:${exp}`" :exp="exp" />
      </div>
      <div v-if="layer" key="layer" class="result">
        <v-layer-item
          expanded
          :code="layer.code"
          :key="`l:${layer.code}`"
          :label="layer.label"
          :styles="layer.styles"
        />
      </div>
      <div v-if="color" key="color" class="result">
        <v-color-item
          expanded
          :code="color.code"
          :key="`c:${color.code}`"
          :label="color.label"
          :styles="color.styles"
        />
      </div>
      <div v-if="font" key="font" class="result">
        <v-font-item
          :code="font.code"
          :key="`f:${font.code}`"
          :label="font.label"
          :styles="font.styles"
        />
      </div>
      <div v-if="radius" key="radius" class="result">
        <v-radius-item
          :code="radius.code"
          :key="`r:${radius.code}`"
          :label="radius.label"
          :radius="radius.value"
        />
      </div>
      <div v-if="lineHeight" key="lineHeight" class="result">
        <v-line-height-item
          :code="lineHeight.code"
          :key="`h:${lineHeight.code}`"
          :label="lineHeight.label"
          :line-height="lineHeight.value"
        />
      </div>
      <div v-if="shadow" key="shadow" class="result">
        <v-shadow-item
          :code="shadow.code"
          :key="`h:${shadow.code}`"
          :label="shadow.label"
          :shadow="shadow.value"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VLayerItem from "./components/LayerItem";
import VColorItem from "./components/ColorItem";
import VFontItem from "./components/FontItem";
import VRadiusItem from "./components/RadiusItem";
import VLineHeightItem from "./components/LineHeightItem";
import VShadowItem from "./components/ShadowItem";
import VExpItem from "./components/ExpItem";
import semantics from "./data/semantics.json";

const EXP_MAP = {
  H: "@dls-height-unit",
  P: "@dls-padding-unit"
};

export default {
  name: "App",
  components: {
    VLayerItem,
    VColorItem,
    VFontItem,
    VRadiusItem,
    VLineHeightItem,
    VShadowItem,
    VExpItem
  },
  provide() {
    return {
      options: this.options
    };
  },
  data() {
    return {
      query: "",
      random: `i${Math.floor(Math.random() * 1000)}`,
      options: {
        focus: false
      }
    };
  },
  computed: {
    layer() {
      return pickLayer(this.query);
    },
    color() {
      return pickColor(this.query);
    },
    exp() {
      let [matched, count, type] = this.query.match(/^(\d+)([HP])$/i) || [];
      if (matched) {
        return {
          unit: EXP_MAP[type.toUpperCase()],
          count: Number(count)
        };
      }
      return null;
    },
    font() {
      return pickFont(this.query);
    },
    radius() {
      return pickRadius(this.query);
    },
    lineHeight() {
      return pickLineHeight(this.query);
    },
    shadow() {
      return pickShadow(this.query);
    }
  },
  // watch: {
  //   exp(val) {
  //     if (val) {
  //       this.$nextTick(() => {
  //         this.$el.querySelector(`[data-code="${val}"]`).click()
  //         this.focus()
  //       })
  //     }
  //   }
  // },
  mounted() {
    this.focus();

    window.addEventListener("focus", () => {
      this.focus();
    });

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.focus();
      }
    });
  },
  methods: {
    focus() {
      this.$refs.search.select();
    },
    waitToFocus() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.focus();
      }, 3000);
    }
  }
};

function pickLayer(code) {
  if (!code) {
    return null;
  }

  for (let i = 0; i < semantics.layers.length; i++) {
    let group = semantics.layers[i];
    if (!group.children) {
      continue;
    }
    for (let j = 0; j < group.children.length; j++) {
      let layer = group.children[j];
      if (code.toLowerCase() === layer.code.toLowerCase()) {
        return {
          code: layer.code,
          label: layer.label,
          styles: transformStyles(mergeStyles(group.styles, layer.styles)),
          group
        };
      }
    }
  }

  return null;
}

function pickColor(code) {
  if (!code) {
    return null;
  }

  let color = semantics.colors.find(
    c => code.toLowerCase() === c.code.toLowerCase()
  );
  if (color) {
    return {
      code: color.code,
      label: color.label,
      styles: transformStyles(color.styles)
    };
  }

  return null;
}

function transformStyles(styles) {
  return Array.from({ length: 4 }).map((_, i) => {
    let foregroundProp = styles.line ? "border" : "color";
    let item = {
      background: styles.background ? styles.background[i] : null,
      border: styles.border ? styles.border[i] : null,
      [foregroundProp]: styles.color ? styles.color[i] : null,
      borderWidth: styles.line ? "4px" : null,
      focusRing: styles.focusRing
    };
    return item;
  });
}

function mergeStyles(parent, child) {
  return Object.keys(parent).reduce(
    (acc, prop) => {
      if (prop in child) {
        if (Array.isArray(child[prop])) {
          acc[prop] = mergeStates(acc[prop], child[prop]);
        } else {
          acc[prop] = child[prop];
        }
      }
      return acc;
    },
    { ...parent }
  );
}

function mergeStates(parent = [], child = []) {
  return child.reduce(
    (acc, cur, i) => {
      if (cur !== false) {
        acc[i] = cur;
      }
      return acc;
    },
    [...parent]
  );
}

function pickFont(code) {
  if (!code) {
    return null;
  }

  let font = semantics.fonts.find(
    f => code.toLowerCase() === f.code.toLowerCase()
  );
  if (font) {
    return {
      ...font
    };
  }

  return null;
}

function pickRadius(code) {
  if (!code) {
    return null;
  }

  let radius = semantics.radii.find(
    r => code.toLowerCase() === r.code.toLowerCase()
  );
  if (radius) {
    return {
      code: radius.code,
      label: radius.label,
      value: radius.styles.radius
    };
  }

  return null;
}

function pickLineHeight(code) {
  if (!code) {
    return null;
  }

  let lh = semantics.lineHeights.find(
    h => code.toLowerCase() === h.code.toLowerCase()
  );
  if (lh) {
    return {
      code: lh.code,
      label: lh.label,
      value: lh.styles.lineHeight
    };
  }

  return null;
}

function pickShadow(code) {
  if (!code) {
    return null;
  }

  let shadow = semantics.shadows.find(
    s => code.toLowerCase() === s.code.toLowerCase()
  );
  if (shadow) {
    return {
      code: shadow.code,
      label: shadow.label,
      value: shadow.styles.shadow
    };
  }

  return null;
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
    sans-serif;
  color: #333;
}

#app {
  min-height: 100vh;
}

body {
  margin: 0;
  overflow-y: scroll;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

#app {
  display: flex;
  flex-flow: column;
  align-items: center;
}

#search {
  margin-top: 72px;
  width: 192px;
  height: 64px;
  text-align: center;
  font-size: 28px;
  text-transform: uppercase;
  border: 2px solid #d3d9e6;
  outline: none;
  border-radius: 6px;
  transition-property: border-color, box-shadow;
  transition-duration: 0.2s;
  ime-mode: disabled;
}

#search:hover {
  border-color: #a8b0bf;
}

#search:focus {
  border-color: #0052cc;
  box-shadow: 0 0 0 4px #0052cc33;
}

#options {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 36px;
}

#focus {
  display: flex;
  align-items: center;
  font-size: 18px;
  white-space: nowrap;
}

#focus input {
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  margin-right: 8px;
  width: 16px;
  height: 16px;
  border: 1px solid #d3d9e6;
  background-color: #fff;
  border-radius: 2px;
  color: #fff;
  font-size: 14px;
  outline: none;
  transition-property: border-color, background-color, color;
  transition-duration: 0.2s;
}

#focus input:hover {
  border-color: #a8b0bf;
  background-color: #f6f7fa;
}

#focus input:active {
  background-color: #e2e6f0;
}

#focus input:checked {
  background-color: #0052cc;
  border-color: transparent !important;
}

#focus input:checked::after {
  content: "✓";
  font-weight: 700;
}

#results {
  margin-bottom: 48px;
}

.result {
  display: flex;
  width: 720px;
  padding: 24px 0;
  align-items: center;
}

.result {
  border-top: 2px dotted #d3d9e6;
}

.layer-item,
.color-item {
  flex-grow: 1;
}

x-layer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition-property: background-color, box-shadow, border-color, color;
  transition-duration: 0.2s;
}

x-layer::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 24px);
  height: calc(100% + 24px);
  border: 2px dotted #d3d9e6;
  border-radius: 50%;
}
</style>
