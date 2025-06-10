<script setup lang="ts">
import {getProject} from "~/utils";

const title = useRoute().params.title as string

useHead({
    title: 'Innouveau - ' + title,
})


const project = getProject(title)

</script>

<template>
    <div v-if="project" class="Project">
        <h1>
            {{ project.title}}
        </h1>
        <div v-html="project.description" />
    </div>

    <div v-else>
        <h1>Project not found</h1>
    </div>
</template>


<style lang="scss" scoped>
.Project
{

}
</style>
