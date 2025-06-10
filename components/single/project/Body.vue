<script setup lang="ts">
import type {Project} from "~/types";

defineProps({
    project: {
        type: Object as PropType<Project>,
        required: true
    }
})
</script>

<template>
    <div class="Body" v-html="project.body"/>
</template>


<style lang="scss" scoped>
.Body {
    :deep(p) {
        font-size: 20px;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        width: 600px;
    }

    :deep(figure) {
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        width: 600px;
    }

    :deep(h3) {
        font-family: 'Tinos', serif;
        font-weight: 700;
        text-align: center;
        font-size: 25px;
        width: 440px;
        max-width: 100%;
        margin: 40px auto 20px auto;
        line-height: 1.2;
    }

    :deep(img) {
        max-width: 100%;
    }

    :deep(a) {
        color: inherit;
    }
}
</style>

<style lang="scss">
.testimonial {
    width: 100%;

    &__main {
        background: #fff;
        padding: 24px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        margin-bottom: 20px;
        border-left: 2px solid #DE7070;
    }

    &__quote {
        font-size: 20px;
        line-height: 1.2;
        font-weight: 500;
        margin-bottom: 30px;
        font-family: 'Tinos', serif;
    }

    &__client {
        font-family: 'Roboto Condensed', serif;
        font-size: 13px;
        margin-right: 32px;
        display: flex;
        align-items: center;
    }

    &__avator {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        margin-right: 12px;
    }

    &__client-description {
        color: #DE7070;
        width: calc(100% - 120px);
    }

    &.testimonial .testimonial__main .testimonial__client .testimonial__client-description .testimonial__client-name {
        font-weight: 700;
        font-size: 18px;
        line-height: 1.2;
    }

    p {
        margin: 0;
        width: 100%!important;
        font-size: inherit!important;
    }
}
</style>