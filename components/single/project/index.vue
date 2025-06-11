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
    <div class="Project">
        <SingleProjectBack />
        <SingleProjectHead :project="project" />
        <SingleProjectIntro :project="project" />
        <SingleProjectLink v-if="project.link?.length > 0" :project="project" />
        <SingleProjectBody :project="project" />
        <SingleProjectBack />
    </div>
</template>