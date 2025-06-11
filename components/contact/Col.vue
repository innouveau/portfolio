<script setup lang="ts">
defineProps({
    title: {
        type: String,
        reguired: true,
    }
})
</script>

<template>
    <div class="Col">
        <h3>
            {{ title }}
        </h3>
        <slot />
    </div>
</template>


<style lang="scss" scoped>
.Col {


    h3 {
        border-bottom: 1px solid #000;
        font-size: 16px;
        padding: 10px 0;
        text-transform: uppercase;
        font-weight: 400;
    }

    :deep(a) {
        color: inherit;
    }
}

</style>
