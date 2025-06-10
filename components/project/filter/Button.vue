<script setup lang="ts">
const props = defineProps({
    filter: {
        type: Array,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
})

const isActive = computed(() => {
    return props.filter.includes(props.type);
});
</script>

<template>
    <button class="Button" :aria-pressed="isActive" >
        <slot />
    </button>
</template>


<style lang="scss" scoped>
.Button {
    cursor: pointer;
    background: #fff;
    border: 1px solid #FFD400;
    font-size: inherit;

    &:hover {
        border: 1px solid #000;
    }

    &:focus-visible {
        border: 1px solid #000;
    }

    &[aria-pressed="true"] {
        background: #FFD400;
        color: #fff;
    }
}
</style>
