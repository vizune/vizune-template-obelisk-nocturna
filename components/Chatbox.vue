<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Cbox details (from the cbox embed code)
const box = {
    server: 'www7',
    id: '548557',
    tag: 'kb26kf',
}
const base = `https://${box.server}.cbox.ws/box/?boxid=${box.id}&boxtag=${box.tag}`

const open = ref(false)
// The cbox iframes are only created the first time the drawer is opened,
// then kept alive (this component lives in app.vue, so it survives page changes).
const loaded = ref(false)

function toggle(force) {
    open.value = typeof force === 'boolean' ? force : !open.value
    if (open.value) loaded.value = true
}

function onKey(e) {
    if (e.key === 'Escape' && open.value) toggle(false)
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
    <div class="Chat" :class="{ 'is-open': open }">
        <div class="Chat-backdrop" aria-hidden="true" @click="toggle(false)" />

        <div class="Chat-dock">
            <button
                class="Chat-tab"
                type="button"
                :aria-expanded="open ? 'true' : 'false'"
                aria-controls="chat-panel"
                @click="toggle()"
            >
                <OrnamentMoon class="Chat-tab-moon" />
                <span>Chat</span>
            </button>

            <section id="chat-panel" class="Chat-panel" aria-label="Chatbox" :inert="!open">
                <header class="Chat-head">
                    <p class="Chat-title">
                        <OrnamentSparkle class="Chat-star" /> Chatbox
                    </p>
                    <button class="Chat-close" type="button" aria-label="Close chat" @click="toggle(false)">
                        <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                            <path d="M2 2l8 8M10 2l-8 8" />
                        </svg>
                    </button>
                </header>

                <div class="Chat-body">
                    <div v-if="loaded" id="cboxdiv" class="Chat-cbox">
                        <div class="Chat-log">
                            <iframe
                                :src="`${base}&sec=main`"
                                title="Cbox chat log"
                                frameborder="0"
                                width="100%"
                                height="100%"
                                scrolling="auto"
                                allowtransparency="yes"
                                :name="`cboxmain7-${box.id}`"
                                :id="`cboxmain7-${box.id}`"
                            ></iframe>
                        </div>
                        <div class="Chat-form">
                            <iframe
                                :src="`${base}&sec=form`"
                                title="Cbox chat form"
                                allow="autoplay"
                                frameborder="0"
                                width="100%"
                                height="100%"
                                scrolling="no"
                                allowtransparency="yes"
                                :name="`cboxform7-${box.id}`"
                                :id="`cboxform7-${box.id}`"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.Chat {
    --panel-w: 340px;
}

/* Dock = tab + panel, slid off-screen by the panel's width when closed */
.Chat-dock {
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    transform: translate(var(--panel-w), -50%);
    transition: transform .45s cubic-bezier(.2, .8, .2, 1);
}

.Chat.is-open .Chat-dock {
    transform: translate(0, -50%);
}

.Chat-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .6rem;
    padding: 1rem .55rem;
    font-family: var(--font-display);
    font-size: 1rem;
    letter-spacing: .25em;
    text-transform: uppercase;
    color: #fff;
    background: linear-gradient(180deg, rgba(29, 22, 70, .96), rgba(9, 7, 26, .98));
    border: 1px solid rgba(201, 184, 255, .45);
    border-right: 0;
    box-shadow: -4px 0 24px rgba(123, 92, 255, .3);
    transition: box-shadow .25s ease;
}

.Chat-tab span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
}

.Chat-tab:hover {
    box-shadow: -4px 0 30px rgba(167, 139, 255, .6);
}

.Chat-tab-moon {
    font-size: 1.15rem;
    color: var(--lavender);
    filter: drop-shadow(0 0 5px var(--lavender));
}

.Chat-panel {
    width: var(--panel-w);
    height: min(640px, 82vh);
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(22, 16, 54, .97), rgba(8, 6, 24, .98));
    border: 1px solid rgba(201, 184, 255, .45);
    border-right: 0;
    box-shadow:
        inset 0 0 0 4px rgba(8, 6, 24, .9),
        inset 0 0 0 5px rgba(201, 184, 255, .15),
        -10px 0 40px rgba(0, 0, 0, .6);
}

.Chat-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .9rem 1rem .7rem 1.25rem;
    border-bottom: 1px solid rgba(201, 184, 255, .2);
}

.Chat-title {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-family: var(--font-display);
    font-size: 1.15rem;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: #fff;
}

.Chat-star {
    font-size: .75rem;
    color: var(--lavender);
}

.Chat-close {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    padding: 0;
    color: var(--lavender);
    border: 1px solid rgba(201, 184, 255, .3);
    border-radius: 50%;
    transition: color .2s ease, border-color .2s ease;
}

.Chat-close svg {
    width: .7rem;
    height: .7rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
    stroke-linecap: round;
}

.Chat-close:hover {
    color: #fff;
    border-color: var(--lavender);
}

.Chat-body {
    flex: 1;
    min-height: 0;
    padding: .75rem;
}

/* Layout from the cbox embed, minus the inline styles */
.Chat-cbox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0;
    line-height: 0;
}

.Chat-log {
    position: relative;
    flex: 1;
    min-height: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

.Chat-form {
    position: relative;
    height: 92px;
    overflow: hidden;
    border-top: 1px solid rgba(201, 184, 255, .15);
}

.Chat-backdrop {
    display: none;
}

/* Phones: full-screen chat, tab tucked into the bottom-right corner */
@media (max-width: 640px) {
    .Chat {
        --panel-w: 100vw;
    }

    .Chat-dock {
        top: auto;
        bottom: 0;
        transform: translateX(var(--panel-w));
        align-items: flex-end;
    }

    .Chat.is-open .Chat-dock {
        transform: none;
    }

    .Chat-tab {
        position: absolute;
        right: calc(100% + 1rem);
        bottom: 1rem;
        flex-direction: row;
        padding: .7rem 1rem;
        border: 1px solid rgba(201, 184, 255, .45);
        border-radius: 999px;
        transition: opacity .2s ease;
    }

    .Chat-tab span {
        writing-mode: horizontal-tb;
        transform: none;
    }

    .Chat.is-open .Chat-tab {
        opacity: 0;
        pointer-events: none;
    }

    .Chat-panel {
        height: 100vh;
        height: 100dvh;
        border: 0;
    }
}

@media (min-width: 641px) {
    .Chat.is-open .Chat-backdrop {
        display: block;
        position: fixed;
        inset: 0;
        z-index: 49;
    }
}
</style>
