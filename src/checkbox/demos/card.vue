<template>
  <t-checkbox-group class="theme-card" :default-value="['1', '2']">
    <t-checkbox value="1" label="多选" />
    <t-checkbox value="2" label="多选" />
    <t-checkbox value="3" label="多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行多选标题" />
  </t-checkbox-group>
</template>
<style lang="less" scoped>
.theme-card {
  border-radius: 12px;
  margin: 0 16px;
  overflow: hidden;
}
</style>
