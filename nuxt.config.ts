export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    modules: ['@nuxt/eslint', '@nuxt/image'],
    app: {
        head: {
            title: 'Innouveau',
            htmlAttrs: {
                lang: 'nl',
            },
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;500;600;700;800&display=swap'},
                // <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700" rel="stylesheet">
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap'},
            ]
        }
    }
})