<script setup lang="ts">
import {getProject} from "~/utils";

const title = useRoute().params.title as string

useHead({
    title: 'Innouveau - ' + title,
})

definePageMeta({
    layout: 'small'
})


const project = getProject(title)

</script>

<template>
    <SingleProject v-if="project" :project="project" />

    <div v-else>
        <h1>Project not found</h1>
    </div>
</template>


<style lang="scss" scoped>
</style>
