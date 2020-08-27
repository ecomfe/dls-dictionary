<template>
  <div class="desc">
    <span class="code">{{ code }}</span>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "v-desc",
  props: {
    code: String,
    label: String
  }
};
</script>

<style scoped>
.desc {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
}

.code {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 2px solid #d3d9e6;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
}

.label {
  display: flex;
  align-items: center;
  margin-left: 12px;
  font-size: 14px;
}
</style>