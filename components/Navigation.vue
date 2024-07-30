<script setup>
const nav = [
    {
        name: 'Home',
        url: ''
    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Web Templates',
        url: '/templates'
    },
    {
        name: 'Avatars',
        url: '/avatars'
    },
    {
        name: 'Renders',
        url: '/renders'
    },
    {
        name: 'PSD Downloads',
        url: '/psd'
    },
    {
        name: 'Tutorials',
        url: '/tutorials'
    }
]
</script>

<template>
    <div class="container mx-auto px-4 py-[3.5rem]">
        <ul class="flex flex-wrap flex-col lg:flex-row justify-around text-center">
            <li v-for="link in nav" class="flex items-center">
                <NuxtLink 
                    :to="link.url" 
                    class="NavLink font-forum text-white text-2xl uppercase tracking-wider">
                    {{ link.name }}
                </NuxtLink>
            </li>
        </ul>  
    </div>
</template>

<style lang="scss" scoped>
.NavLink {
    position: relative;

    &:not([href]) {
        text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 70px #e60073;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 100px;
        background-color: white;
    }

    &:last-child {
        &:after {
            display: none;
        }
    }
}
</style>