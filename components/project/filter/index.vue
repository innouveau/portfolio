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
    <intro>
        <p>
            Innouveau is een innovatief bureau
            voor webdevelopment.
        </p>
        <p>
            We schrijven code, maar houden van design.
        </p>

        <p>
        Wij maken <ProjectFilterButton :filter="filter" type="app" @click="toggle('app')">Online applicaties</ProjectFilterButton>,
        <ProjectFilterButton :filter="filter" type="info" @click="toggle('info')">Interactieve infographics</ProjectFilterButton> en
        <ProjectFilterButton :filter="filter" type="3d" @click="toggle('3d')">3d configuratoren</ProjectFilterButton>.
        </p>
    </intro>
</template>
