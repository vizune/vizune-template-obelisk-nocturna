<template>
  <div class="flex items-center justify-center grow">
    <div class="h-[375px]">
      <span class="font-logo uppercase text-4xl block text-center tracking-wider leading-[0] text-white">
        <img
          src="/arch.svg"
          width="300"
          height="214"
          role="presentation"
          class="mx-auto relative left-[3.5px]"
        />
        <slot />
        <img
          src="/arch.svg"
          width="300"
          height="214"
          role="presentation"
          class="mx-auto rotate-180 origin-center -translate-x-[3.5px]"
        />
      </span>
    </div>
  </div>
</template>

<style scoped>
/* The arch artwork sits 3.5px left of centre inside arch.svg, so both halves
   are nudged to line up with the page centre and the banner's mirror line. */
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