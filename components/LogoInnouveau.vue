<script setup lang="ts">

</script>

<template>
    <div class="LogoInnouveau">
        <div class="LogoInnouveau__icon">
            <div class="yellow-square"></div>
            <div class="red-circle"></div>
        </div>
        <div class="LogoInnouveau__text">
            <h3>Innouveau</h3>
            <h4>online applications</h4>
            <h4>&amp; infographics</h4>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.LogoInnouveau {
    position: relative;
    font-size: 18px;
    line-height: 1.4;

    &__icon {
        display: flex;
    }

    &__text {
        position: absolute;
        left: 0;
        top: 32px;
        display: none;
    }

    h3, h4 {
        margin: 0;
    }

    h3 {
        margin: 0 0 3px 0;
        color: #000;
        text-align: left;
        font-size: 18px;
        line-height: 8px;
        padding-left: 4px;
    }

    h4 {
        margin: 0;
        color: #000;
        text-align: left;
        font-size: 18px;
        line-height: 18px;
        font-weight: 100;
        padding-left: 4px;
    }
}

.yellow-square {
    width: 25px;
    height: 25px;
    vertical-align: top;
    margin: 1px 5px 4px 14px;
    background: #FFD400;
    display: inline-block;
}

.red-circle {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background: #DE7070;
    display: inline-block;
}
</style>
