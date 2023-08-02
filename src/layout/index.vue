<template>
  <div>layout</div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { startQinakun } from '@/micro'

onMounted(() => {
  startQinakun()
})
</script>

<style scoped lang="scss"></style>
