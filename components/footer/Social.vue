<template>
    <div class="text-white py-4 px-8 border-t-4 border-white bg-header bg-top flex justify-center">
        <div class="grid grid-rows-1 grid-flow-col gap-2 max-w-lg w-full">
            <div v-for="item in social" class="flex justify-center">
                <a :href="item.url" target="_blank" :title="item.name" class="text-ice hover:text-white">
                    <svg class="h-8 w-8">
                        <use :xlink:href="`#${item.icon}`"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>