<script setup>
import { ref } from 'vue'

const nav = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Templates', url: '/templates' },
    { name: 'PSDs', url: '/psd' },
    { name: 'Avatars', url: '/avatars' },
    { name: 'Renders', url: '/renders' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Request', url: '/request', highlight: true },
]

const open = ref(false)
</script>

<template>
    <nav class="Nav" aria-label="Main">
        <div class="Nav-bar">
            <span class="Nav-end Nav-end--left" aria-hidden="true">
                <OrnamentMoon class="Nav-moon" />
            </span>

            <button
                class="Nav-toggle"
                type="button"
                :aria-expanded="open ? 'true' : 'false'"
                aria-controls="main-menu"
                @click="open = !open"
            >
                <OrnamentSparkle class="Nav-toggle-star" />
                Menu
            </button>

            <ul id="main-menu" class="Nav-list" :class="{ 'is-open': open }">
                <li v-for="link in nav" :key="link.url" :class="{ 'Nav-item--cta': link.highlight }">
                    <NuxtLink :to="link.url" :class="['Nav-link', { 'Nav-link--cta': link.highlight }]" @click="open = false">
                        <OrnamentSparkle class="Nav-link-star" />
                        <span>{{ link.name }}</span>
                    </NuxtLink>
                </li>
            </ul>

            <span class="Nav-end Nav-end--right" aria-hidden="true">
                <OrnamentMoon class="Nav-moon Nav-moon--flip" />
            </span>
        </div>
    </nav>
</template>

<style scoped>
.Nav {
    position: relative;
    z-index: 2;
    padding: 0 1rem;
    margin-top: -1.5rem;
}

.Nav-bar {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: .35rem 1.25rem;
    background: linear-gradient(180deg, rgba(22, 16, 54, .92), rgba(9, 7, 26, .96));
    border: 1px solid rgba(201, 184, 255, .35);
    box-shadow:
        inset 0 0 0 3px rgba(9, 7, 26, .9),
        inset 0 0 0 4px rgba(201, 184, 255, .18),
        0 10px 40px rgba(0, 0, 0, .6),
        0 0 30px rgba(123, 92, 255, .18);
}

/* Moon ornaments + hanging chains at each end */
.Nav-end {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--lavender);
    filter: drop-shadow(0 0 6px rgba(201, 184, 255, .8));
}

.Nav-moon {
    font-size: 1.35rem;
}

.Nav-moon--flip {
    transform: scaleX(-1);
}

.Nav-end::after {
    content: '';
    position: absolute;
    top: calc(100% + .9rem);
    left: 50%;
    width: 1px;
    height: 3.25rem;
    background: repeating-linear-gradient(180deg, rgba(201, 184, 255, .7) 0 2px, transparent 2px 5px);
}

.Nav-end::before {
    content: '';
    position: absolute;
    top: calc(100% + 4.15rem);
    left: calc(50% - 4px);
    width: 9px;
    height: 13px;
    background: linear-gradient(160deg, #fff, var(--lavender) 40%, var(--violet));
    clip-path: polygon(50% 0, 100% 40%, 50% 100%, 0 40%);
    filter: drop-shadow(0 0 4px rgba(201, 184, 255, .9));
}

.Nav-list {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}

.Nav-link {
    position: relative;
    display: flex;
    align-items: center;
    gap: .45rem;
    padding: 1rem clamp(.5rem, 1.1vw, 1.1rem);
    font-family: var(--font-display);
    font-size: 1.1rem;
    letter-spacing: .12em;
    white-space: nowrap;
    text-transform: uppercase;
    color: #cfc6f5;
    transition: color .25s ease, text-shadow .25s ease;
}

.Nav-link-star {
    font-size: .7rem;
    color: #fff;
    opacity: 0;
    transform: scale(.4) rotate(-45deg);
    transition: opacity .3s ease, transform .4s cubic-bezier(.2, .9, .3, 1.4);
    margin-left: -1.15rem;
    filter: drop-shadow(0 0 5px var(--lavender));
}

.Nav-link::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: .55rem;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--lavender), transparent);
    transform: translateX(-50%);
    transition: width .35s ease;
}

.Nav-link:hover,
.Nav-link:focus-visible {
    color: #fff;
    text-shadow: 0 0 12px rgba(201, 184, 255, .8);
}

.Nav-link:hover::after,
.Nav-link:focus-visible::after {
    width: 60%;
}

.Nav-link[aria-current="page"] {
    color: #fff;
    text-shadow: 0 0 10px #fff, 0 0 22px var(--glow), 0 0 40px var(--glow);
}

.Nav-link[aria-current="page"] .Nav-link-star {
    opacity: 1;
    transform: none;
    margin-left: 0;
}

.Nav-link[aria-current="page"]::after {
    width: 70%;
}

.Nav-toggle {
    display: none;
}

/* "Request" call-to-action: rose-pink outlined pill so it stands apart from the page links */
.Nav-item--cta {
    display: flex;
    align-items: center;
    margin-left: .5rem;
}

.Nav-link--cta {
    --rose: #ff6fb5;
    padding: .45rem 1.1rem;
    color: #ffd9ec;
    border: 1px solid rgba(255, 111, 181, .6);
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(255, 77, 166, .16), rgba(255, 77, 166, .04));
    box-shadow: 0 0 14px rgba(255, 77, 166, .25), inset 0 0 10px rgba(255, 77, 166, .12);
    transition: color .25s ease, box-shadow .25s ease, background .25s ease, transform .25s ease;
}

.Nav-link--cta .Nav-link-star {
    opacity: 1;
    transform: none;
    margin-left: 0;
    color: var(--rose);
    filter: drop-shadow(0 0 5px var(--rose));
}

.Nav-link--cta::after {
    display: none;
}

.Nav-link--cta:hover,
.Nav-link--cta:focus-visible,
.Nav-link--cta[aria-current="page"] {
    color: #fff;
    transform: translateY(-1px);
    background: linear-gradient(180deg, rgba(255, 77, 166, .3), rgba(255, 77, 166, .1));
    box-shadow: 0 0 24px rgba(255, 77, 166, .55), inset 0 0 12px rgba(255, 77, 166, .2);
    text-shadow: 0 0 10px rgba(255, 150, 200, .8);
}

/* Small screens: collapsible menu */
/* Mid-size screens: tighten so all nine links fit on one line */
@media (max-width: 1320px) {
    .Nav-link {
        font-size: .98rem;
        letter-spacing: .08em;
        padding-left: clamp(.4rem, .8vw, .8rem);
        padding-right: clamp(.4rem, .8vw, .8rem);
    }

    .Nav-link--cta {
        padding: .4rem .85rem;
    }
}

@media (max-width: 1080px) {
    .Nav {
        margin-top: -1.75rem;
    }

    .Nav-bar {
        flex-wrap: wrap;
        padding: .25rem 1rem;
    }

    .Nav-end::before,
    .Nav-end::after {
        display: none;
    }

    .Nav-toggle {
        display: flex;
        align-items: center;
        gap: .6rem;
        padding: .85rem .5rem;
        font-family: var(--font-display);
        font-size: 1.15rem;
        letter-spacing: .2em;
        text-transform: uppercase;
        color: #fff;
    }

    .Nav-toggle-star {
        font-size: .75rem;
        color: var(--lavender);
        transition: transform .3s ease;
    }

    .Nav-toggle[aria-expanded="true"] .Nav-toggle-star {
        transform: rotate(45deg);
    }

    .Nav-list {
        order: 3;
        flex-basis: 100%;
        display: none;
        grid-template-columns: 1fr 1fr;
        border-top: 1px solid rgba(201, 184, 255, .2);
        padding: .5rem 0 .75rem;
    }

    .Nav-list.is-open {
        display: grid;
    }

    .Nav-link {
        padding: .7rem .5rem .7rem 1.4rem;
    }

    .Nav-link::after {
        display: none;
    }

    .Nav-item--cta {
        grid-column: 1 / -1;
        justify-content: center;
        margin: .5rem 0 0;
    }

    .Nav-link--cta {
        padding: .6rem 1.5rem;
    }
}
</style>
