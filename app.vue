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
    <div class="h-screen flex flex-col justify-between">
      <div class="grow-1">
        <HeadingIntro>Obelisk: Nocturna</HeadingIntro>
      </div>
      <Header />
    </div>
    <Navigation />
    <nuxt-page />
    <Footer />
  </div>
</template>