<script setup lang="ts">
const social = [
    {
        url: "https://github.com/vizune",
        icon: "github",
        name: "Github"
    },
    {
        url: "https://www.deviantart.com/vizune",
        icon: "deviantart",
        name: "Deviant Art"
    },
    {
        url: "https://www.instagram.com/vizune_/",
        icon: "instagram",
        name: "Instagram"
    },
    {
        url: "https://www.linkedin.com/in/sasha-r-547a2b57",
        icon: "linkedin",
        name: "LinkedIn"
    },
    {
        url: "https://codepen.io/SRichardson",
        icon: "codepen",
        name: "CodePen"
    },
    {
        url: "https://www.pinterest.co.uk/vizune/",
        icon: "pinterest",
        name: "Pinterest"
    },
    {
        url: "https://open.spotify.com/user/1149827575",
        icon: "spotify",
        name: "Spotify"
    },
    {
        url: "https://steamcommunity.com/id/vizune",
        icon: "steam",
        name: "Steam"
    }
]
</script>

<template>
    <div class="Social">
        <div class="Social-ornament" aria-hidden="true">
            <span class="Social-line" />
            <OrnamentSparkle class="Social-star" />
            <span class="Social-moon"><OrnamentMoon /></span>
            <OrnamentSparkle class="Social-star" />
            <span class="Social-line Social-line--right" />
        </div>

        <div class="Social-orbit">
            <img src="/social-ornament.webp" alt="" class="Social-compass" width="300" height="300" />
            <ul class="Social-icons">
                <li
                    v-for="(item, i) in social"
                    :key="item.icon"
                    :style="{ '--angle': `${(360 / social.length) * i - 90}deg` }"
                >
                    <a :href="item.url" target="_blank" rel="noopener" :title="item.name" :aria-label="item.name">
                        <svg aria-hidden="true">
                            <use :xlink:href="`#${item.icon}`"></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>

        <ul class="Social-links">
            <li><NuxtLink to="/links">Link exchange</NuxtLink></li>
            <li><NuxtLink to="/credits">Credits &amp; resources</NuxtLink></li>
            <li><a href="https://vizune.net/" target="_blank">Network</a></li>
        </ul>

        <p class="Social-copy">&copy; Vizune &middot; Obelisk: Nocturna</p>
    </div>
</template>

<style scoped>
.Social {
    position: relative;
    margin-top: 6rem;
    padding: 0 1rem 2.5rem;
    text-align: center;
    background: linear-gradient(180deg, var(--night) 0%, rgba(5, 4, 15, .7) 55%, rgba(5, 4, 15, .55) 100%);
}

.Social-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    max-width: 1180px;
    margin: 0 auto;
    transform: translateY(-50%);
}

.Social-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201, 184, 255, .6));
}

.Social-line--right {
    background: linear-gradient(90deg, rgba(201, 184, 255, .6), transparent);
}

.Social-star {
    font-size: .7rem;
    color: var(--lavender);
}

.Social-moon {
    display: grid;
    place-items: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    font-size: 1.6rem;
    color: #fff;
    background: radial-gradient(circle, rgba(123, 92, 255, .35), var(--night) 70%);
    border: 1px solid rgba(201, 184, 255, .55);
    box-shadow: 0 0 0 5px var(--night), 0 0 0 6px rgba(201, 184, 255, .2), 0 0 30px rgba(167, 139, 255, .6);
    filter: drop-shadow(0 0 6px rgba(201, 184, 255, .6));
}

.Social-orbit {
    --size: 360px;
    --radius: 175px;
    position: relative;
    width: var(--size);
    height: var(--size);
    margin: 3rem auto;
}

.Social-compass {
    position: absolute;
    top: 50%;
    left: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 0 14px rgba(167, 139, 255, .45));
}

.Social-icons li {
    position: absolute;
    top: 50%;
    left: 50%;
    /* Place each icon on the circle, then undo the rotation so it stays upright */
    transform: rotate(var(--angle)) translate(var(--radius)) rotate(calc(var(--angle) * -1));
}

.Social-icons a {
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    margin: -1.375rem 0 0 -1.375rem;
    border-radius: 50%;
    color: #ddd6f7;
    border: 1px solid rgba(201, 184, 255, .35);
    background: rgba(8, 6, 24, .85);
    transition: color .25s ease, border-color .25s ease, box-shadow .25s ease, transform .25s ease;
}

.Social-icons svg {
    width: 1.15rem;
    height: 1.15rem;
}

.Social-icons a:hover,
.Social-icons a:focus-visible {
    color: #fff;
    transform: translateY(-2px);
    border-color: #ff4da6;
    box-shadow: 0 0 18px rgba(255, 77, 166, .5);
}

.Social-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .5rem 2rem;
    margin-top: 1.75rem;
}

.Social-links a {
    font-size: .7rem;
    letter-spacing: .25em;
    text-transform: uppercase;
    color: var(--lavender);
}

.Social-links a::after {
    content: ' ›';
}

.Social-links a:hover {
    color: #fff;
    text-shadow: 0 0 10px var(--lavender);
}

.Social-copy {
    margin-top: 1.25rem;
    font-size: .7rem;
    letter-spacing: .15em;
    color: var(--lavender-dim);
}

/* Leave room for the floating chat button on phones */
@media (max-width: 640px) {
    .Social {
        padding-bottom: 5.5rem;
    }

    .Social-orbit {
        --size: 300px;
        --radius: 170px;
        margin: 3rem auto;
    }

    .Social-links {
        flex-direction: column;
        margin-top: 4rem;
    }
}
</style>
