<script setup lang="ts">
  useHead({
    title: 'Vizune.com',
    meta: [
      { name: 'description', content: 'Vizune.com' }
    ]
  })
</script>
<template>
  <div>
    <IconSprite />
    <Header />
    <Content>
      <nuxt-page />
    </Content>
    <Footer />
  </div>
</template>