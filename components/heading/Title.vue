<script setup>
const props = defineProps({
    small: String,
    large: String
})
</script>
<template>
    <h1 class="tracking-wider mb-5">
        <span class="font-monsterrat text-md font-bold mt-[-4rem]">{{ small }}</span>
        <span class="font-forum text-4xl text-purple uppercase">{{ large }}</span>
    </h1>
</template>

<style scoped>
h1 {
    background: url('/title.png') center top no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 415px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}
</style>