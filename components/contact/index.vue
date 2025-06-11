<template>
    <footer>
        <contact-col title="Contact">
            <b>Bezoekadres</b><br>
            Innouveau<br>
            Weg en Bos 9D<br>
            2661 DG Bergschenhoek
            <br><br>
            <b>Postadres</b><br>
            Innouveau<br>
            Prins Hendrikstraat 13D<br>
            3071 LG Rotterdam
        </contact-col>

        <contact-col title="Informatie">
            <dl>
                <dt>KvK</dt>
                <dd>61118389</dd>

                <dt>Bank</dt>
                <dd>NL30TRIO0338767924</dd>

                <dt>BIC</dt>
                <dd>TRIONL2U</dd>

                <dt>BTW</dt>
                <dd>NL854214902B01</dd>
            </dl>
        </contact-col>

        <contact-col title="Meer weten?">
            <a href="mailto:info@innouveau.nl">info@innouveau.nl</a>
        </contact-col>
    </footer>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    font-family: 'roboto condensed', sans-serif;
    font-size: 15px;
    line-height: 1.4;
}

dl {
    display: flex;
    flex-wrap: wrap;

    dt {
        margin: 0;
        width: 50px;
    }

    dd {
        margin: 0;

        width: calc(100% - 50px);
    }


}
</style>