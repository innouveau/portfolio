<script setup lang="ts">

const props = defineProps({
    src: {
        type: String,
        required: true
    }
})

// const el = ref<HTMLDivElement | null>(null);

const loadVideo = () => {
    const onPlayerReady = (event) => {
        event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
        // ended
        if (event.data === 0) {
            // loop
            event.target.playVideo();
        }
    };
    const player = new window.YT.Player('yt-' + props.src, {
        videoId: props.src,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'modestbranding': 1,
            'rel': 0,
            'loop': 1,
            'start': 1
        }
    });
    player.addEventListener('onReady', () => {
        player.playVideo();
    });
}

const tryYT = () => {
    if (window.YT) {
        loadVideo();
    } else {
        setTimeout(tryYT, 100);
    }
}

onMounted(() => {
    tryYT();

})
</script>

<template>
    <div :id="'yt-' + src" class="ProjectYoutube" />
</template>


<style lang="scss">
iframe.ProjectYoutube {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: none;
}
</style>
