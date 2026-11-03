<script setup>
defineProps({
    small: String,
    large: String
})
</script>
<template>
    <h1 class="Title">
        <span class="Title-small">{{ small }}</span>
        <span class="Title-large">{{ large }}</span>
    </h1>
</template>

<style scoped>
.Title {
    background: url('/title.webp') center top no-repeat;
    background-size: contain;
    aspect-ratio: 1104 / 1141;
    width: min(380px, 90%);
    max-width: 380px !important;
    margin: 0 auto 2rem !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10%;
    gap: .15rem;
    text-align: center;
    line-height: 1.1;
}

.Title-small {
    font-family: var(--font-body);
    font-size: .6rem;
    font-weight: 700;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: var(--midnight);
    max-width: 200px;
    line-height: 1rem;
    margin-top: 1rem;
}

.Title-large {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.5rem, 6vw, 1.9rem);
    letter-spacing: .06em;
    text-transform: uppercase;
    background: linear-gradient(180deg, #3a2d8a, var(--purple) 50%, #6e58d0);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>
