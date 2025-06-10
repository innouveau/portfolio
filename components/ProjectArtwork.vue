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

        <div v-if="artwork.type === 'youtube'" class="ProjectArtwork__youtube">
            <iframe
                allowfullscreen=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" title="Screencast FDomes" width="640" height="390"
                    :src="'https://www.youtube.com/embed/' + artwork.src + '?autoplay=0&amp;controls=1&amp;showinfo=0&amp;modestbranding=1&amp;rel=0&amp;loop=1&amp;start=0&amp;enablejsapi=1&amp;'"/>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.ProjectArtwork {
    aspect-ratio: 16/9;
    position: relative;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    //background: #eee;

    &__gif {
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        height: 100%;
    }

    &__youtube {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;

        iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
}
</style>
