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
    <div class="Head">
        <div class="Head__text">
            <h1>
                {{ project.title}}
            </h1>
            <h2>
                {{project.subtitle}}
            </h2>
        </div>

        <div class="Head__image" :style="{'background-image': 'url(' + project.headImage + ')'}" />
    </div>
</template>


<style lang="scss" scoped>
.Head {
    margin: 0 -80px 40px -80px;
    width: calc(100% + 160px);
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    &__text {
        padding: 12px 48px 24px 48px;
        text-align: center;
        width: 600px;
        max-width: 100%;
        margin: 0 auto;

        h1 {
            font-weight: 400;
            font-size: 40px;
            line-height: 1;
            margin: 0 0 10px 0;
            font-family: 'Tinos', serif;
        }

        h2 {
            font-family: 'Tinos', serif;
            font-weight: 700;
            font-size: 18px;
            line-height: 1.1;
            margin: 0;
            color: #DE7070;
        }
    }

    &__image {
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        height: 400px;
        background-color: #000;
        position: relative;
        border-top: 1px solid #aaa;
        border-bottom: 1px solid #aaa;
    }
}

@media (max-width: 1024px)  {
    .Head {
        margin: 0 0 40px 0;
        width: 100%;

        &__image {
            height: auto;
            aspect-ratio: 1.5;
        }
    }
}
</style>
