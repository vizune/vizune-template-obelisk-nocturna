<template>
    <main class="Content">
        <div class="Content-panel">
            <NuxtImg
                v-for="pos in ['tl', 'tr', 'bl', 'br']"
                :key="pos"
                format="webp"
                width="149"
                height="150"
                src="/floral-corner.png"
                role="presentation"
                alt=""
                :class="['Content-corner', `Content-corner--${pos}`]"
            />
            <div class="Content-frame">
                <div class="Content-body">
                    <slot />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.Content {
    padding: 4rem 1rem 0;
}

.Content-panel {
    position: relative;
    max-width: 1040px;
    margin: 0 auto;
    padding: 5px;
    background: #fbfaff;
    box-shadow:
        0 0 0 1px rgba(201, 184, 255, .6),
        0 0 40px rgba(123, 92, 255, .35),
        0 30px 80px rgba(0, 0, 0, .55);
}

.Content-frame {
    border: 3px solid var(--midnight);
    background:
        radial-gradient(ellipse at 50% 0%, rgba(201, 184, 255, .28), transparent 55%),
        radial-gradient(ellipse at 50% 100%, rgba(201, 184, 255, .22), transparent 55%),
        #f4f2fa;
}

.Content-body {
    padding: 3.5rem 1.5rem 5rem;
}

/* Keep text at a comfortable reading width (~70 characters) */
.Content-body > :deep(*) {
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
}

.Content-corner {
    position: absolute;
    width: clamp(70px, 11vw, 149px);
    height: auto;
    aspect-ratio: 149 / 150;
    pointer-events: none;
}

.Content-corner--tl { top: 6px; left: 6px; }
.Content-corner--tr { top: 6px; right: 6px; transform: rotate(90deg); }
.Content-corner--bl { bottom: 6px; left: 6px; transform: rotate(-90deg); }
.Content-corner--br { bottom: 6px; right: 6px; transform: rotate(180deg); }

@media (min-width: 768px) {
    .Content-body {
        padding: 4rem 4rem 6rem;
    }
}
</style>
