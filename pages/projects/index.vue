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
        <transition-group name="list">
            <div v-for="(project, index) in projects" :key="project.key" class="wrapper">
                <project :project="project" />
            </div>
        </transition-group>
    </div>
</template>


<style lang="scss" scoped>
.Projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}

</style>

<style>

.list-enter-active,
.list-leave-active {
    transition: all .4s ease;
    transform: scale(1);
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: scale(0);
}
</style>
