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
    <div class="Intro">
        {{  project.intro }}
    </div>
</template>


<style lang="scss" scoped>
.Intro {
    font-family: 'Tinos', serif;
    font-size: 24px;
    margin: 0 auto 80px auto;
    width: 600px;
    max-width: 100%;
}
</style>
