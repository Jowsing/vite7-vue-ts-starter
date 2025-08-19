<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main class="root">
    <ElConfigProvider>
      <HelloWorld />
    </ElConfigProvider>
  </main>
</template>

<style scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
