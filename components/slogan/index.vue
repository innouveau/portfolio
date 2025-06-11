<script setup lang="ts">


const chunks = [
    '{{', 'code', '}}', 'that loves', '((', 'design', '))'
];
const values = ref(chunks.map(() => ''));
const chars = chunks.join('');
const n = chars.length;

const findFirstIncompleteWord = (p: number) => {
    for (const word of values.value) {
        const index = values.value.indexOf(word);
        const shouldBe = chunks[index];
        if (word.length < shouldBe.length) {
            return index;
        }
    }
    return -1;
}

const addChar = (i: number) => {
    const char = chars[i];
    const wordIndex = findFirstIncompleteWord(i);
    if (wordIndex > -1) {
        values.value[wordIndex] += char;
    }
}

let interval: ReturnType<typeof setInterval>;

const start = () => {
    const delay = 100;
    let i = 0;
    values.value = chunks.map(() => '');

    interval = setInterval(() => {
        const t = Math.random() * delay * 0.8;
        setTimeout(() => {
            addChar(i);
            i++
            if (i >= n) {
                reset();
            }
        }, t)

    }, delay);
}

const reset = () => {
    clearInterval(interval);
    setTimeout(() => {
        start();
    }, 3000);
}

onMounted(() => {

    start();
});
</script>

<template>
    <div class="Slogan">
        <b>Innouveau</b><br>

        <span class="Slogan__chunk Slogan__chunk-1 Slogan__code">
            {{ values[0] }}
        </span>

        <span class="Slogan__chunk Slogan__chunk-2 Slogan__chunk--code">
            {{ values[1] }}
        </span>

        <span class="Slogan__chunk Slogan__chunk-3 Slogan__code ">
            {{ values[2] }}
        </span><br>

        <span class="Slogan__chunk Slogan__chunk-4 Slogan__chunk--thatLoves">
            {{ values[3] }}
        </span><br>

        <span class="Slogan__chunk Slogan__chunk-5 Slogan__code">
            {{ values[4] }}
        </span>

        <span class="Slogan__chunk Slogan__chunk-6 Slogan__chunk--design">
            {{ values[5] }}
        </span>

        <span class="Slogan__chunk Slogan__chunk-7 Slogan__code">
            {{ values[6] }}
        </span>
    </div>
</template>


<style lang="scss" scoped>
.Slogan {
    font-size: 48px;
    line-height: 1;
    text-align: center;
    height: 195px;
    font-weight: 400;
    margin-bottom: 40px;

    &__code {
        font-family: 'Roboto condensed', sans-serif;
        font-weight: 300;
    }
}
</style>
