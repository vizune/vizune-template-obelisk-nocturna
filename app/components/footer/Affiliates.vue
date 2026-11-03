<script setup lang="ts">
const affiliates = [
    {
        name: 'A Glimpsed Horizon',
        url: 'https://akiba.flirt-wind.net/',
        button: '/buttons/a-glimpsed-horizon.png'
    },
    {
        name: 'Aurora Veil',
        url: 'https://auroraveil.org/',
        button: '/buttons/aurora-veil.png'
    },
    {
        name: 'Design Freaks',
        url: 'https://designfreaks.net/',
        button: '/buttons/design-freaks.png'
    },
    {
        name: 'Fey Radio',
        url: 'https://feyradio.moe/',
        button: '/buttons/fey-radio.png'
    },
    {
        name: 'Hakanai',
        url: 'http://hakanai.net/',
        button: '/buttons/hakanai.jpg'
    },
    {
        name: 'Kinku',
        url: 'https://kuroi-inku.aniyu.net/',
        button: '/buttons/kinku.gif'
    },
    {
        name: 'Kishou',
        url: 'https://kishou.net/',
        button: null
    },
    {
        name: 'Love is Zero',
        url: 'https://loveiszero.net/',
        button: '/buttons/love-is-zero.png'
    },
    {
        name: 'Prideful Moon',
        url: 'https://pridefulmoon.com/',
        button: '/buttons/prideful-moon.jpg'
    },
    {
        name: 'A Random Website',
        url: 'https://a-random-website.net/',
        button: '/buttons/random.png'
    },
    {
        name: 'Snow Drops',
        url: 'https://snow-drops.org/',
        button: '/buttons/snow-drops.jpg'
    },
    {
        name: 'Untamed Rebel',
        url: 'https://untamed-rebel.blogspot.com/',
        button: '/buttons/untamed-rebel.png'
    }
]

</script>

<template>
    <div class="Affiliates">
        <a
            v-for="link in affiliates"
            :key="link.url"
            :href="link.url"
            :title="link.name"
            target="_blank"
            rel="noopener"
            class="Affiliates-link"
        >
            <NuxtImg
                v-if="link.button"
                format="webp"
                :alt="link.name"
                :src="link.button"
                loading="lazy"
                width="88"
                height="31"
            />
            <!-- No button yet: show the site name in an 88x31 text badge instead -->
            <span v-else class="Affiliates-text">{{ link.name }}</span>
        </a>
    </div>
</template>

<style scoped>
.Affiliates {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .75rem;
    max-width: 52rem;
    margin: 0 auto;
}

.Affiliates-link {
    display: block;
    padding: 3px;
    border: 1px solid rgba(201, 184, 255, .3);
    background: rgba(8, 6, 24, .7);
    transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
}

.Affiliates-link img {
    display: block;
    width: 88px;
    height: 31px;
    filter: saturate(.85);
    transition: filter .25s ease;
}

.Affiliates-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    width: 88px;
    height: 31px;
    padding: 0 .3rem;
    text-align: center;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: .72rem;
    line-height: 1.05;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: #efe9ff;
    text-shadow: 0 0 8px rgba(167, 139, 255, .7);
    background:
        radial-gradient(ellipse at 50% 0%, rgba(201, 184, 255, .25), transparent 70%),
        linear-gradient(135deg, #2b2066, #120d33);
    box-shadow: inset 0 0 0 1px rgba(201, 184, 255, .3);
    overflow: hidden;
}

/* Small sparkles either side of the name */
.Affiliates-text::before,
.Affiliates-text::after {
    content: '\2726';
    flex-shrink: 0;
    font-size: .45rem;
    letter-spacing: 0;
    color: var(--lavender);
}

.Affiliates-link:hover,
.Affiliates-link:focus-visible {
    transform: translateY(-3px);
    border-color: var(--lavender);
    box-shadow: 0 0 16px rgba(167, 139, 255, .6);
}

.Affiliates-link:hover img {
    filter: none;
}
</style>
