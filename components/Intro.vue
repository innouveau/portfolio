<script setup lang="ts">

</script>

<template>
    <div class="Intro">
        <slot />
    </div>
</template>


<style lang="scss" scoped>
.Intro {
    font-size: 22px;
    width: 460px;
    max-width: 100%;
    margin: 0 auto 60px auto;
    line-height: 1.8;
    font-weight: 700;

    :deep(p) {
        padding-left: 20px;
        border-left: 2px solid #FFD400;
    }
}
</style>
