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
        <span class="Button__check" />
        <span class="Button__label" >
            <slot />
        </span>

    </button>
</template>


<style lang="scss" scoped>
.Button {
    cursor: pointer;
    background: #fff;
    border: 1px solid #FFD400;
    font-size: inherit;
    font-family: 'Dosis', sans-serif;
    display: inline-flex;
    align-items: center;
    padding-right: 6px;
    margin-right: 2px;

    &__check {
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 50%;
        margin-right: 4px;
        transition: background 0.3s ease-in-out;
        border: 1px solid #c9a800;
        padding: 2px;

        &:after {
            content: '';
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 50%;
            display: block;
        }
    }

    &__label {
        margin-bottom: 2px;
    }

    &:hover {
        border: 1px solid #000;
    }

    &:focus-visible {
        border: 1px solid #000;
    }

    &[aria-pressed="true"] {
        background: #FFD400;
        color: #fff;

        .Button__check {

            &:after {
                background: #c9a800;
            }
        }
    }
}
</style>
