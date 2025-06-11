<script setup lang="ts">
import type {Artwork} from "~/types";

defineProps({
    artwork: {
        type: Object as PropType<Artwork>,
        required: true
    }
})
</script>

<template>
    <div class="ProjectArtwork">
        <div
v-if="artwork.type === 'gif'" class="ProjectArtwork__gif"
             :style="{'background-image': 'url(' + artwork.src + ')'}"/>

        <ProjectYoutube v-if="artwork.type === 'youtube'" :src="artwork.src" />
    </div>
</template>


<style lang="scss" scoped>
.ProjectArtwork {
    aspect-ratio: 16/9;
    position: relative;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background: #eee;

    &__gif {
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        height: 100%;
    }
}
</style>
