<template>
  <el-config-provider :locale="zhCn">
    <layout></layout>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<style lang="scss">
@import url('@/styles/app.scss');
</style>
