<script setup lang="ts">
import {getProjects} from "~/utils";

useHead({
    title: 'Innouveau - Projects',
    script: [
        { src: 'https://www.youtube.com/iframe_api' }
    ]
})

const filter = ref([
    'app',
    'info',
    '3d'
]);

const atFilter = (type: string) => {
    if (filter.value.includes(type)) {
        const index = filter.value.indexOf(type);
        if (index > -1) {
            filter.value.splice(index, 1);
        }
    } else {
        filter.value.push(type);
    }
};

const projects = computed(() => {
    return getProjects(filter.value);
});

</script>

<template>
    <project-filter :filter="filter" @filter="atFilter" />
    <div class="Projects">
        <project v-for="(project, index) in projects" :key="project.key" :project="project" />
    </div>
</template>


<style lang="scss" scoped>
.Projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}

</style>
