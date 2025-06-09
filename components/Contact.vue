<template>
    <footer>
        <div class="footer__row">
            <div class="footer__col">
                <h3>Contact</h3>
                <b>Bezoekadres</b><br>
                Innouveau<br>
                Weg en Bos 9D<br>
                2661 DG Bergschenhoek
                <br><br>
                <b>Postadres</b><br>
                Innouveau<br>
                Prins Hendrikstraat 13D<br>
                3071 LG Rotterdam
            </div>

            <div class="footer__col">
                <h3>Informatie</h3>
                <table class="contact-info-table" cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                    <tr>
                        <td>KvK</td>
                        <td>61118389</td>
                    </tr>
                    <tr>
                        <td>Bank</td>
                        <td>NL30TRIO0338767924</td>
                    </tr>
                    <tr>
                        <td>BIC</td>
                        <td>TRIONL2U</td>
                    </tr>
                    <tr>
                        <td>BTW</td>
                        <td>NL854214902B01</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="footer__col">
                <h3>Meer weten?</h3>
                <a href="mailto:info@innouveau.nl">info@innouveau.nl</a>
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
footer {
    font-family: 'Roboto condensed', sans-serif;
    font-size: 13px;

    .footer__row {
        display: flex;
        justify-content: space-between;
    }

    .footer__col {
        width: calc(25% - 20px);
    }

    h3 {
        border-bottom: 1px solid #000;
        font-size: 16px;
        padding: 10px 0;
    }

    a {
        color: #555;
    }
}
</style>
