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
    <a class="Link" :href="project.link" target="_blank">
        👉
        <span>
            Bezoek de site
        </span>
    </a>
</template>


<style lang="scss" scoped>
.Link {
    display: flex;
    gap: 8px;
    align-items: center;
    height: 56px;
    padding: 8px 12px;
    border: 1px solid #FFD400;
    background: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin: 0 auto 40px auto;
    width: 600px;
    max-width: 100%;
    color: inherit;
    text-decoration: none;

    span {
        font-size:18px;
        padding-bottom: 2px;
        border-bottom: 1px solid transparent;
        margin-top: 5px;
    }

    &:hover {
        span {
            border-bottom: 1px solid #000;
        }
    }
}
</style>
