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
    <div class="h-screen flex flex-col justify-between mb-[5rem]">
      <div class="grow-1">
        <HeadingOne>Obelisk: Nocturna</HeadingOne>
      </div>
      <Header />
    </div>
    <nuxt-page />
    <Footer />
  </div>
</template>