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
    <NuxtLink :to="'/projects/' + project.key" class="Project">
        <h3 class="Project__title">
            {{ project.title }}
        </h3>

        <project-artwork :artwork="project.artwork" />

        <div class="Project__main">
            <div class="Project__about">
                <div class="Project__description" v-html="project.description"/>

                <div class="Project__read-more">
                    👉
                    <span>
                        Lees meer over dit project: {{ project.title }}
                    </span>
                </div>
            </div>

            <div class="Project__client">
                <div
class="Project__client-avatar"
                     :style="{'background-image': 'url(' + project.client.logo + ')'}" />
                <div class="Project__client-description">
                    <div class="Project__client-name">
                        {{ project.client.name }}
                    </div>
                    <div class="Project__client-position">
                        {{ project.client.position }}
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>


<style lang="scss" scoped>
.Project {
    background: #fff;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
    text-align: left;
    max-width: 100%;
    color: inherit;
    text-decoration: none;

    &:hover {
        box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.5);
    }

    &__title {
        font-family: 'Tinos', serif;
        font-size: 24px;
        line-height: 1;
        padding: 12px 24px;
        display: block;
        margin: 0;
    }

    &__about {
        padding: 24px;
        border-bottom: 1px solid #ddd;
        display: block;
    }

    &__description {
        height: 77px;
        overflow: hidden;
        position: relative;

        &::after {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 30px;
            content: '';
            z-index: 1;
            background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
        }
    }

    &__read-more {
        height: 80px;
        padding-top: 20px;

        span {
            border-bottom: 1px solid #000;
            padding-bottom: 1px;
        }
    }

    &__client {
        font-family: 'Roboto Condensed', serif;
        font-size: 13px;
        padding: 12px 24px;
        display: flex;
        align-items: center;

        &-avatar {
            width: 64px;
            height: 64px;
            background-size: contain;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            margin-right: 12px;
        }

        &-description {
            flex-grow: 1;
        }

        &-name {
            font-weight: 700;
            font-size: 18px;
            line-height: 1.2;
        }
    }
}
</style>
