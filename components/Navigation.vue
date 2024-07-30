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
        name: 'Web<br />Templates',
        url: '/templates'
    },
    {
        name: 'PSD<br />Downloads',
        url: '/psd'
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
        name: 'Tutorials',
        url: '/tutorials'
    }
]
</script>

<template>
    <div class="container mx-auto px-4 py-[3.5rem]">
        <ul class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 xl:gap-0">
            <li v-for="link in nav" class="flex items-center text-center">
                <NuxtLink 
                    :to="link.url" 
                    class="NavLink w-full h-full flex items-center justify-center font-forum text-ice text-xl lg:text-2xl uppercase tracking-wider border border-ocean xl:border-none py-4 xl:py-0">
                    <span v-html="link.name" />
                </NuxtLink>
            </li>
        </ul>  
    </div>
</template>

<style lang="scss" scoped>
$link-glow: #90c2f5;

.NavLink {
    position: relative;

    &:not([href]) {
        color: white;
        text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px $link-glow, 0 0 20px $link-glow, 0 0 20px $link-glow, 0 0 20px $link-glow, 0 0 70px $link-glow;
    }

    @media (min-width: 1280px) {
        &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 100%;
            background-color: #90c2f5;
        }
    }
}

li:last-child .NavLink:after {
    display: none;
}
</style>