<script setup lang="ts">
import {getProjects} from "~/utils";

useHead({
    title: 'Innouveau - Projects',
    script: [
        { src: 'https://www.youtube.com/iframe_api' }
    ]
})

// onBeforeMount(() => {
//     window.onYouTubeIframeAPIReady = () => {
//         console.log("klaar");
//     }
// });
//
//
// onMounted(() => {
//     // window.onYouTubeIframeAPIReady = () => {
//     //     console.log("klaar");
//     // }
// })


</script>

<template>
    <div class="Projects">
        <project v-for="(project, index) in getProjects()" :key="index" :project="project" />
    </div>
</template>


<style lang="scss" scoped>
.Projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}

</style>
