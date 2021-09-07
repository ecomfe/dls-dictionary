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
      <label><input type="checkbox" v-model="options.colors" />颜色</label>
      <label><input type="checkbox" v-model="options.fonts" />字号</label>
      <label><input type="checkbox" v-model="options.lines" />线条色</label>
      <label><input type="checkbox" v-model="options.radii" />圆角</label>
      <label><input type="checkbox" v-model="options.lineHeights" />行高</label>
      <label><input type="checkbox" v-model="options.shadows" />阴影</label>
      <label>
        <input type="checkbox" v-model="options.layers" />语义化图层
      </label>
      <label>
        <input type="checkbox" v-model="options.fgColors" />语义化前景
      </label>
    </div>
    <div id="results">
      <div v-if="exp" key="exp" class="result">
        <v-exp-item :key="`e:${exp}`" :exp="exp" />
      </div>
      <template v-if="options.layers">
        <div v-for="(layer, i) in layers" :key="`layer-${i}`" class="result">
          <v-layer-item
            expanded
            :code="layer.code"
            :key="`l:${layer.code}`"
            :label="layer.label"
            :styles="layer.styles"
          />
        </div>
      </template>
      <template v-if="options.fgColors">
        <div
          v-for="(color, i) in fgColors"
          :key="`fg-color-${i}`"
          class="result"
        >
          <v-fg-color-item
            expanded
            :code="color.code"
            :key="`fgc:${color.code}`"
            :label="color.label"
            :styles="color.styles"
          />
        </div>
      </template>
      <template v-if="options.colors">
        <div v-for="(color, i) in colors" :key="`color-${i}`" class="result">
          <v-color-item
            :code="color.code"
            :key="`c:${color.code}`"
            :label="color.label"
            :color="color.value"
          />
        </div>
      </template>
      <template v-if="options.fonts">
        <div v-for="(font, i) in fonts" :key="`font-${i}`" class="result">
          <v-font-item
            :code="font.code"
            :key="`f:${font.code}`"
            :label="font.label"
            :styles="font.styles"
          />
        </div>
      </template>
      <template v-if="options.lines">
        <div v-for="(line, i) in lines" :key="`line-${i}`" class="result">
          <v-line-item
            :code="line.code"
            :key="`l:${line.code}`"
            :label="line.label"
            :color="line.value"
          />
        </div>
      </template>
      <template v-if="options.radii">
        <div v-for="(radius, i) in radii" :key="`radius-${i}`" class="result">
          <v-radius-item
            :code="radius.code"
            :key="`r:${radius.code}`"
            :label="radius.label"
            :radius="radius.value"
          />
        </div>
      </template>
      <template v-if="options.lineHeights">
        <div
          v-for="(lineHeight, i) in lineHeights"
          :key="`lineHeight-${i}`"
          class="result"
        >
          <v-line-height-item
            :code="lineHeight.code"
            :key="`lh:${lineHeight.code}`"
            :label="lineHeight.label"
            :line-height="lineHeight.value"
          />
        </div>
      </template>
      <template v-if="options.shadows">
        <div v-for="(shadow, i) in shadows" :key="`shadow-${i}`" class="result">
          <v-shadow-item
            :code="shadow.code"
            :key="`h:${shadow.code}`"
            :label="shadow.label"
            :shadow="shadow.value"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import VLayerItem from "./components/LayerItem";
import VFgColorItem from "./components/FgColorItem";
import VColorItem from "./components/ColorItem";
import VFontItem from "./components/FontItem";
import VLineItem from "./components/LineItem";
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
    VFgColorItem,
    VColorItem,
    VFontItem,
    VLineItem,
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
        layers: false,
        fgColors: false,
        colors: true,
        fonts: true,
        lines: true,
        radii: true,
        lineHeights: true,
        shadows: true
      }
    };
  },
  computed: {
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
    layers() {
      return pickLayers(this.query);
    },
    fgColors() {
      return pickFgColors(this.query);
    },
    colors() {
      return pickColors(this.query);
    },
    fonts() {
      return pickFonts(this.query);
    },
    lines() {
      return pickLines(this.query);
    },
    radii() {
      return pickRadii(this.query);
    },
    lineHeights() {
      return pickLineHeights(this.query);
    },
    shadows() {
      return pickShadows(this.query);
    }
  },
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

function pickLayers(code) {
  let layers = [];
  for (let i = 0; i < semantics.layers.length; i++) {
    let group = semantics.layers[i];

    if (!group.children) {
      continue;
    }
    for (let j = 0; j < group.children.length; j++) {
      let layer = group.children[j];
      if (match(code, group.code) || match(code, layer.code) || !code) {
        layers.push({
          code: layer.code,
          label: layer.label,
          styles: transformStyles(mergeStyles(group.styles, layer.styles)),
          group
        });
      }
    }
  }

  return layers;
}

function pickFgColors(code) {
  return semantics.fgColors
    .filter(c => match(code, c.code))
    .map(color => ({
      code: color.code,
      label: color.label,
      styles: transformStyles(color.styles)
    }));
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

function match(query, code) {
  return code.toLowerCase().indexOf(query.toLowerCase()) !== -1;
}

function pickColors(code) {
  return semantics.colors
    .filter(c => match(code, c.code))
    .map(color => ({
      code: color.code,
      label: color.label,
      value: color.styles.color
    }));
}

function pickFonts(code) {
  return semantics.fonts.filter(f => match(code, f.code));
}

function pickLines(code) {
  return semantics.lines
    .filter(l => match(code, l.code))
    .map(line => ({
      code: line.code,
      label: line.label,
      value: line.styles.color
    }));
}

function pickRadii(code) {
  return semantics.radii
    .filter(r => match(code, r.code))
    .map(radius => ({
      code: radius.code,
      label: radius.label,
      value: radius.styles.radius
    }));
}

function pickLineHeights(code) {
  return semantics.lineHeights
    .filter(h => match(code, h.code))
    .map(lh => ({
      code: lh.code,
      label: lh.label,
      value: lh.styles.lineHeight
    }));
}

function pickShadows(code) {
  return semantics.shadows
    .filter(s => match(code, s.code))
    .map(shadow => ({
      code: shadow.code,
      label: shadow.label,
      value: shadow.styles.shadow
    }));
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

#options label {
  display: flex;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
  margin-right: 20px;
}

#options label:last-child {
  margin-right: 0;
}

#options input {
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

#options input:hover {
  border-color: #a8b0bf;
  background-color: #f6f7fa;
}

#options input:active {
  background-color: #e2e6f0;
}

#options input:checked {
  background-color: #0052cc;
  border-color: transparent !important;
}

#options input:checked::after {
  content: "✓";
  display: block;
  text-align: center;
  font-size: 12px;
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
