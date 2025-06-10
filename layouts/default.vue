<script setup lang="ts">

</script>

<template>
    <navigation />

    <div class="wrapper">
        <div class="content">
            <main>
                <slot />
            </main>

            <contact />
        </div>
    </div>
</template>


<style lang="scss" scoped>
nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
}
.wrapper {
    background: #F4EFE4;
    height: 100%;
    overflow: auto;

    .content {
        width: 1200px;
        max-width: 100%;
        padding: 90px 24px;
        margin: 0 auto;
    }

    main {
        margin-bottom: 80px;
    }
}
</style>
