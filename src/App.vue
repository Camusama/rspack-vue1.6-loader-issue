<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <h1>{{ title }}</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
</template>
<script lang="tsx">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const title = ref('title')
    return {
      title,
    }
  },
})
</script>
<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
