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
        <single-project-back />
        <single-project-head :project="project" />
        <single-project-intro :project="project" />
        <single-project-link v-if="project.link?.length > 0" :project="project" />
        <single-project-body :project="project" />
        <single-project-back />

    </div>
</template>


<style lang="scss" scoped>
.Project {

}
</style>
