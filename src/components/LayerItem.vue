<template>
  <div class="layer-item">
    <v-desc :code="code" :label="label" />
    <div class="detail">
      <v-layer :styles="styles" />
      <div v-if="expanded" class="pieces">
        <v-piece-table :properties="layerProps" :styles="styles" />
      </div>
    </div>
  </div>
</template>

<script>
import VDesc from './Desc'
import VLayer from './Layer'
import VPieceTable from './PieceTable'

export default {
  name: 'v-layer-item',
  components: {
    VDesc,
    VLayer,
    VPieceTable,
  },
  props: {
    code: String,
    label: String,
    styles: Array,
    expanded: Boolean,
  },
  data() {
    return {
      layerProps: [
        { prop: 'background', label: '背景' },
        { prop: 'border', label: '边框' },
      ],
    }
  },
}
</script>

<style scoped>
.layer-item,
.pieces {
  display: flex;
  align-items: center;
}

.detail {
  display: flex;
  align-items: center;
}

.detail x-layer {
  margin-right: 32px;
  flex-shrink: 0;
}

.pieces {
  width: 400px;
}
</style>
