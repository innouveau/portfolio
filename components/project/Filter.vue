<script setup lang="ts">
defineProps({
    filter: {
        type: Array,
        required: true,
    }
})

const emit = defineEmits(['filter']);

const toggle = (type: string) => {
    emit('filter', type)
};
</script>

<template>
    <div class="Filter">
        <p>
            Innouveau is een innovatief bureau
            voor webdevelopment.
        </p>
        <p>
            We schrijven code, maar houden van design.
        </p>

        <p>
        Wij maken <project-filter-button :filter="filter" type="app" @click="toggle('app')">Online applicaties</project-filter-button>,
        <project-filter-button :filter="filter" type="info" @click="toggle('info')">Interactieve infographics</project-filter-button> en
        <project-filter-button :filter="filter" type="3d" @click="toggle('3d')">3d configuratoren</project-filter-button>.
        </p>
    </div>
</template>


<style lang="scss" scoped>
.Filter {
    font-size: 22px;
    width: 460px;
    max-width: 100%;
    margin: 0 auto 60px auto;
    line-height: 1.8;
    font-weight: 700;
}
</style>
