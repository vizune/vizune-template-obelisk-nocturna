<template>
    <span class="font-forum uppercase text-4xl block text-center tracking-wider leading-[0] text-white">
        <img src="/arch.svg" class="mx-auto" width="300" />
        <slot />
        <img src="/arch.svg" class="mx-auto rotate-180 origin-center -translate-x-[6px]" width="300" />
    </span>
</template>

<style scoped>
span {
    opacity: 0;
    -webkit-animation: fade 2s ease-in-out 1s forwards;
    animation: fade 2s ease-in-out 1s forwards;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>