<script setup lang="ts">
useHead({
    title: 'Innouveau',
})


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
            <nuxt-link to="/projects" class="home-button">👉 Bekijk portfolio</nuxt-link>
        </p>
    </intro>
</template>

<style lang="scss" scoped>
.home-button {
    display: flex;
    gap: 8px;
    align-items: center;
    height: 56px;
    padding: 8px 12px;
    border: 1px solid #FFD400;
    background: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin: 0 auto 40px auto;
    width: 600px;
    max-width: 100%;
    color: inherit;
    text-decoration: none;

    &:hover {
        background: #FFD400;
        color: #000;
    }
}
</style>
