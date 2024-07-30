<template>
    <main class="container mx-auto pb-[5rem]">
        <div class="bg-white p-1 mx-4">
            <div class="border-4 border-midnight h-[500px] flex flex-col justify-between">
                <div class="Corners-top"></div>
                <div class="p-6 grow-1">
                    <slot />
                </div>
                <div class="Corners-bottom"></div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
$corner-size: 150px;
$corner-offset: -3px;

.Corners {
    &-top {
        position: relative;
        width: 100%;

        &:before {
            content: '';
            position: absolute;
            top: $corner-offset;
            left: $corner-offset;
            background: url('/floral-corner.png') no-repeat;
            height: $corner-size;
            width: $corner-size;
            background-size: 100% 100%;
        }

        &:after {
            content: '';
            position: absolute;
            top: $corner-offset;
            right: $corner-offset;
            background: url('/floral-corner.png') no-repeat;
            height: $corner-size;
            width: $corner-size;
            background-size: 100% 100%;
            transform: rotate(90deg);
        }
    }

    &-bottom {
        position: relative;
        width: 100%;

        &:before {
            content: '';
            position: absolute;
            bottom: $corner-offset;
            left: $corner-offset;
            background: url('/floral-corner.png') no-repeat;
            height: $corner-size;
            width: $corner-size;
            background-size: 100% 100%;
            transform: rotate(-90deg);
        }

        &:after {
            content: '';
            position: absolute;
            bottom: $corner-offset;
            right: $corner-offset;
            background: url('/floral-corner.png') no-repeat;
            height: $corner-size;
            width: $corner-size;
            background-size: 100% 100%;
            transform: rotate(180deg);
        }
    }
}
</style>