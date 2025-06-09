<script setup lang="ts">

import {getProjects} from "~/utils";
</script>

<template>
    <div class="Projects">
        <project v-for="(project, index) in getProjects()" :key="index" :project="project" />
    </div>
</template>


<style lang="scss" scoped>
.Projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}
</style>
