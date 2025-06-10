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
        Wij maken <project-filter-button :filter="filter" type="app" @click="toggle('app')">Online applicaties</project-filter-button>,
        <project-filter-button :filter="filter" type="info" @click="toggle('info')">Interactieve infographics</project-filter-button> en
        <project-filter-button :filter="filter" type="3d" @click="toggle('3d')">3d configuratoren</project-filter-button>.
    </div>
</template>


<style lang="scss" scoped>
.Filter {
    font-size: 22px;
    width: 300px;
    max-width: 100%;
    margin: 0 auto 60px auto;
    font-weight: 700;
    line-height: 1.8;
}
</style>
