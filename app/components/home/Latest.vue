<script setup>
// Swap the images for your own renders/previews: 16:9, at least 800px wide.
// `focus` picks which part of the image shows if it's cropped (CSS object-position).
const items = [
    {
        category: 'Templates',
        title: 'Celestial Dreams',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis nec orci et aliquet.',
        url: '/templates',
        image: '/header-lg.webp',
        focus: '8% 30%'
    },
    {
        category: 'PSDs',
        title: 'Midnight Sanctuary',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis nec orci et aliquet.',
        url: '/psd',
        image: '/header-lg.webp',
        focus: '50% 40%'
    },
    {
        category: 'Tutorials',
        title: "Luna's Colour Theory",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis nec orci et aliquet.',
        url: '/tutorials',
        image: '/header-lg.webp',
        focus: '95% 85%'
    },
]
</script>

<template>
    <div class="Latest">
        <article v-for="item in items" :key="item.title" class="Card">
            <NuxtLink :to="item.url" class="Card-link">
                <div class="Card-media">
                    <NuxtImg
                        :src="item.image"
                        :style="{ objectPosition: item.focus }"
                        format="webp"
                        width="1280"
                        densities="x1"
                        loading="lazy"
                        alt=""
                    />
                </div>
                <div class="Card-body">
                    <p class="Card-kicker">
                        <OrnamentSparkle class="Card-star" />
                        {{ item.category }}
                    </p>
                    <h3 class="Card-title">{{ item.title }}</h3>
                    <p class="Card-text">{{ item.text }}</p>
                    <span class="Card-more">View more <span aria-hidden="true">›</span></span>
                </div>
            </NuxtLink>
        </article>
    </div>
</template>

<style scoped>
.Latest {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
}

.Card {
    position: relative;
    background: linear-gradient(180deg, rgba(24, 18, 58, .85), rgba(8, 6, 24, .92));
    border: 1px solid rgba(201, 184, 255, .3);
    transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}

/* Ornamental inner frame: four corner brackets */
.Card::before {
    content: '';
    position: absolute;
    inset: 6px;
    pointer-events: none;
    z-index: 1;
    --c: rgba(201, 184, 255, .75);
    background:
        linear-gradient(var(--c), var(--c)) top left / 18px 1px,
        linear-gradient(var(--c), var(--c)) top left / 1px 18px,
        linear-gradient(var(--c), var(--c)) top right / 18px 1px,
        linear-gradient(var(--c), var(--c)) top right / 1px 18px,
        linear-gradient(var(--c), var(--c)) bottom left / 18px 1px,
        linear-gradient(var(--c), var(--c)) bottom left / 1px 18px,
        linear-gradient(var(--c), var(--c)) bottom right / 18px 1px,
        linear-gradient(var(--c), var(--c)) bottom right / 1px 18px;
    background-repeat: no-repeat;
}

.Card:hover,
.Card:focus-within {
    transform: translateY(-4px);
    border-color: rgba(201, 184, 255, .7);
    box-shadow: 0 0 0 1px rgba(201, 184, 255, .25), 0 0 34px rgba(167, 139, 255, .45), 0 0 80px rgba(123, 92, 255, .2);
}

.Card-link {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 12px;
}

.Card-media {
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border: 1px solid rgba(201, 184, 255, .25);
}

.Card-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
    transition: transform .6s ease;
}

.Card:hover .Card-media img {
    transform: scale(1.05);
}

.Card-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.35rem 1rem .85rem;
}

.Card-kicker {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: .68rem;
    font-weight: 700;
    letter-spacing: .26em;
    text-transform: uppercase;
    color: #f2a7d0;
}

.Card-star {
    color: #fff;
    font-size: .8rem;
    filter: drop-shadow(0 0 4px var(--lavender));
}

.Card-title {
    font-family: var(--font-display);
    font-weight: 600;
    margin-top: .45rem;
    font-size: 1.75rem;
    line-height: 1.15;
    color: #efe8ff;
}

.Card-text {
    margin-top: .65rem;
    font-size: .9rem;
    line-height: 1.65;
    color: #b3abd3;
    flex: 1;
}

.Card-more {
    margin-top: 1rem;
    align-self: center;
    font-size: .7rem;
    letter-spacing: .25em;
    text-transform: uppercase;
    color: #fff;
}

.Card:hover .Card-more {
    text-shadow: 0 0 10px var(--lavender);
}
</style>
