<template>
  <div class="Intro">
    <div class="Intro-frame">
      <span class="Intro-logo">
        <img
          src="/arch.svg"
          width="300"
          height="214"
          role="presentation"
          class="Intro-arch"
        />
        <slot />
        <img
          src="/arch.svg"
          width="300"
          height="214"
          role="presentation"
          class="Intro-arch Intro-arch--bottom"
        />
      </span>
    </div>
  </div>
</template>

<style scoped>
.Intro {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}

.Intro-frame {
  height: 375px;
}

.Intro-logo {
  display: block;
  font-family: var(--font-logo);
  font-size: 2.25rem;
  line-height: 0;
  letter-spacing: .05em;
  text-align: center;
  text-transform: uppercase;
  color: #f2f2f2;
  opacity: 0;
  -webkit-animation: fade 2s ease-in-out 1s forwards;
  animation: fade 2s ease-in-out 1s forwards;
}

/* The arch artwork sits 3.5px left of centre inside arch.svg, so both halves
   are nudged to line up with the page centre and the banner's mirror line. */
.Intro-arch {
  position: relative;
  left: 3.5px;
  margin: 0 auto;
}

.Intro-arch--bottom {
  left: 0;
  transform: translateX(-3.5px) rotate(180deg);
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
