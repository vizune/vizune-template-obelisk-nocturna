<template>
  <div class="flex flex-wrap justify-center relative mx-auto h-[500px] w-full overflow-hidden" ref="header">
    <div class="flex justify-center relative w-full">
      <picture>
        <source media="(max-width: 640px)" srcset="/header-xs.webp" />
        <source media="(max-width: 1024px)" srcset="/header-md.webp" />
        <source media="(max-width: 1280px)" srcset="/header-lg.webp" />
        <img 
          src="/header-long.webp"
          role="presentation"
          class="Header-img h-[500px] object-cover object-[10%] xl:object-center"
          width="1920"
          height="500"
        />
      </picture>
      <HeadingIntro class="Header-logo absolute lg:top-[1rem] left-1/2 -translate-x-2/4">
        <p class="text-[5rem] xl:text-[4rem]">
          Vizune
        </p>
      </HeadingIntro>
      <div class="Header-tagline">Graphics. Resources. Creativity.</div>
    </div>
  </div>
</template>

<style scoped>
.Header-tagline {
  position: absolute;
  left: 50%;
  bottom: 3.6rem;
  transform: translateX(-50%);
  white-space: nowrap;
  font-family: var(--font-body);
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .35em;
  padding-left: .35em;
  text-transform: uppercase;
  color: #e6dcff;
  text-shadow: 0 0 8px rgba(5, 4, 15, .9), 0 0 16px rgba(123, 92, 255, .6);
  opacity: 0;
  animation: tagline-in 1.5s ease-out 1.8s forwards;
}

@keyframes tagline-in {
  to { opacity: 1; }
}

@media (max-width: 640px) {
  p {
    letter-spacing: .06em;
    padding-left: .06em;
  }

  .Header-tagline {
    font-size: .62rem;
    letter-spacing: .25em;
    padding-left: .25em;
  }
}

/* Fade the bottom of the banner into the page, and on wide screens
   (where the banner is narrower than the window) fade its sides too */
.Header-img {
  -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent 100%);
  mask-image: linear-gradient(180deg, #000 60%, transparent 100%);
}

/* The banner art's mirror line is 3.5px right of the image centre;
   shift it so it lines up with the logo arches */
@media (min-width: 1281px) {
  .Header-img {
    object-position: calc(50% - 3.5px) 50%;
  }
}

/* 1025–1280px: the 1280px banner crop is cut from the left of the full artwork,
   so its centre (mirror line) sits 316.5px in from the image's right edge.
   Anchor the banner to the right and centre the logo + tagline on that line. */
@media (min-width: 1025px) and (max-width: 1280px) {
  .Header-img {
    object-position: 100% 50%;
  }

  .Header-logo,
  .Header-tagline {
    left: calc(100% - 316.5px);
  }
}

@media (min-width: 1800px) {
  .Header-img {
    -webkit-mask-image:
      linear-gradient(180deg, #000 60%, transparent 100%),
      linear-gradient(90deg, transparent 0, #000 260px, #000 calc(100% - 260px), transparent 100%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(180deg, #000 60%, transparent 100%),
      linear-gradient(90deg, transparent 0, #000 260px, #000 calc(100% - 260px), transparent 100%);
    mask-composite: intersect;
  }
}


svg {
  left: calc(50% + 4px);
  transform: translate(-50%,-50%);
  height: 150px;
  transition: transform .25s ease-in-out;
  transform-origin: center;
}
svg:hover {
transform: scale(1.1) translate(-45%,-40%);
}
p {
  margin: .25rem 0 0;
  /* Extra letter-spacing for the logo lettering; the matching left padding keeps it centred
     (letter-spacing also adds space after the last letter) */
  letter-spacing: .12em;
  padding-left: .12em;
  -webkit-animation: glow 1.5s ease-in-out infinite alternate 1s;
  animation: glow 1.5s ease-in-out infinite alternate 1s;
}

@keyframes glow {
from {
  text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 70px #e60073;
}
to {
  text-shadow: 0 0 20px #fff, 0 0 20px #ff4da6, 0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 30px #ff4da6, 0 0 20px #ff4da6, 0 0 20px #ff4da6;
}
}
</style>