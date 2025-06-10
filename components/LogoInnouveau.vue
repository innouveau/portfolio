<script setup lang="ts">

</script>

<template>
    <div class="LogoInnouveau">
        <div class="LogoInnouveau__icon">
            <div class="yellow-square"/>
            <div class="red-circle"/>
        </div>
        <div class="LogoInnouveau__text">
            <h3>Innouveau</h3>
            <h4>online applications &amp; infographics</h4>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.LogoInnouveau {
    position: relative;
    font-size: 18px;
    line-height: 1.4;
    display: flex;
    align-items: center;
    gap: 11px;

    &__icon {
        display: flex;
    }

    &__text {
        margin-top: -1px;
    }

    h3, h4 {
        margin: 0;
        font-size: 16px;
        line-height: 0.8;
    }

    h3 {
        margin: 0 0 3px 0;
        color: #000;
        text-align: left;

    }

    h4 {
        margin: 0;
        color: #000;
        text-align: left;
        font-weight: 100;
    }
}

.yellow-square {
    width: 30px;
    height: 30px;
    vertical-align: top;
    margin: 1px 6px 4px 14px;
    background: #FFD400;
    display: inline-block;
}

.red-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #DE7070;
    display: inline-block;
}
</style>
