import type {Projects} from "~/types";

//
// <div class="cases">
//
// <div class="case case--size-2">
// <a href="https://innouveau.com/corona-map/" class="case__title">
//     Corona Map
// </a>
// <div class="case__artwork"><div style="background-image: url(https://innouveau.com/wp-content/uploads/2020/11/europe-1.gif)" class="case__image"></div>
//     <a href="https://innouveau.com/corona-map/" class="case__artwork-link"></a>
//     </div>
//     <a href="https://innouveau.com/corona-map/" class="case__main">
// <div class="case__about">
// <div class="case__about-preview">
//     De uit de hand gelopen hobby van het publiceren van regionale data over de corona uitbraken in 2020 genereerde veel (internationale) aandacht. Van de Nederlandse Zondag met Lubach tot internationaal bekendste corona-duider Tomas Pueyo (bekend van Hammer and Dance) maakten gebruik van onze applicatie en beelden.
// </div>
// <div class="case__read-more">👉 <span>Lees meer over dit project: Corona Map
// </span>
// </div>
// </div>
//
// <div class="case__client">
// <div style="background-image: url(https://innouveau.com/wp-content/uploads/2020/11/logo-innouveau-small.jpg)" class="case__avator">
//     </div>
//     <div class="case__client-description">
// <div class="case__client-name">
//     Innouveau
//     </div>
//     <div class="case__client-position">
//     Eigen project
// </div>
// </div>
// </div>
// </a>
// </div>
// <div class="case case--size-2">
// <a href="https://innouveau.com/print-my-glasses/" class="case__title">
//     Print My Glasses
// </a>
// <div class="case__artwork"><div class="case__video">
// <div class="video" data-video-id="M2o36P4Bo-w">
// <iframe id="video-M2o36P4Bo-w" class="video__container" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Print My Glasses screencast" width="640" height="390" src="https://www.youtube.com/embed/M2o36P4Bo-w?autoplay=0&amp;controls=1&amp;showinfo=0&amp;modestbranding=1&amp;rel=0&amp;loop=1&amp;start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Finnouveau.com&amp;widgetid=1&amp;forigin=https%3A%2F%2Finnouveau.com%2Fcases%2F&amp;aoriginsup=1&amp;gporigin=https%3A%2F%2Finnouveau.com%2Fcases%2F&amp;vf=1"></iframe>
// </div></div>
// <a href="https://innouveau.com/print-my-glasses/" class="case__artwork-link"></a>
//     </div>
//     <a href="https://innouveau.com/print-my-glasses/" class="case__main">
// <div class="case__about">
// <div class="case__about-preview">
//     Je hoofd in 3d laten scannen bij de opticien en dan thuis op de bank een oneindige collectie (design)brillen passen en in alle mogelijke kleuren en motieven bekijken? Marc Notenboom - optometrist van origine - had deze droom en samen met een team van Klaas Nienhuis en Frodo Schering, maakten wij dit werkelijkheid. Scannen, bladeren, passen en aanpassen... en met een druk op de knop wordt je bril volledig in 3d geprint!
// </div>
// <div class="case__read-more">👉 <span>Lees meer over dit project: Print My Glasses
// </span>
// </div>
// </div>
//
// <div class="case__client">
// <div style="background-image: url()" class="case__avator">
//     </div>
//     <div class="case__client-description">
// <div class="case__client-name">
//     Print My Glasses
// </div>
// <div class="case__client-position">
//     Innovative startup for 3d printed glasses
// </div>
// </div>
// </div>
// </a>
// </div>
// <div class="case case--size-2">
// <a href="https://innouveau.com/f-domes/" class="case__title">
//     F. Domes
//     </a>
//     <div class="case__artwork"><div class="case__video">
// <div class="video" data-video-id="rlYcyBVPF2o">
// <iframe id="video-rlYcyBVPF2o" class="video__container" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Screencast FDomes" width="640" height="390" src="https://www.youtube.com/embed/rlYcyBVPF2o?autoplay=0&amp;controls=1&amp;showinfo=0&amp;modestbranding=1&amp;rel=0&amp;loop=1&amp;start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Finnouveau.com&amp;widgetid=2&amp;forigin=https%3A%2F%2Finnouveau.com%2Fcases%2F&amp;aoriginsup=1&amp;gporigin=https%3A%2F%2Finnouveau.com%2Fcases%2F&amp;vf=6"></iframe>
// </div></div>
// <a href="https://innouveau.com/f-domes/" class="case__artwork-link"></a>
//     </div>
//     <a href="https://innouveau.com/f-domes/" class="case__main">
// <div class="case__about">
// <div class="case__about-preview">
//     F.Domes is een snel groeiend bedrijf dat hoogwaardige domes (grote tenten) voor verschillende doeleinden produceert: showrooms, popup stores, glamping, festivals, etc. Hun vraag was om het aantal en de kwaliteit van hun leads te verhogen. Daarnaast was er de behoefte vanuit het sales team om de tijdsinvestering in een lead te verlagen.
// </div>
// <div class="case__read-more">👉 <span>Lees meer over dit project: F. Domes
// </span>
// </div>
// </div>
//
// <div class="case__client">
// <div style="background-image: url(https://innouveau.com/wp-content/uploads/2020/05/fdomes-logo.png)" class="case__avator">
//     </div>
//     <div class="case__client-description">
// <div class="case__client-name">
//     F.Domes
//     </div>
//     <div class="case__client-position">
//     Polish manufacturer of Geodesic Domes
// </div>
// </div>
// </div>
// </a>
// </div>
// <div class="case case--size-2">
// <a href="https://innouveau.com/apm/" class="case__title">
//     APM / DAPS
//     </a>
//     <div class="case__artwork"><div class="case__video">
// <div class="video" data-video-id="QFHVxXAaMpM">
// <iframe id="video-QFHVxXAaMpM" class="video__container" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Portfolio Screencast: APM" width="640" height="390" src="https://www.youtube.com/embed/QFHVxXAaMpM?autoplay=0&amp;controls=1&amp;showinfo=0&amp;modestbranding=1&amp;rel=0&amp;loop=1&amp;start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Finnouveau.com&amp;widgetid=3&amp;forigin=https%3A%2F%2Finnouveau.com%2Fcases%2F&amp;aoriginsup=1&amp;gporigin=https%3A%2F%2Finnouveau.com%2Fcases%2F&amp;vf=6"></iframe>
// </div></div>
// <a href="https://innouveau.com/apm/" class="case__artwork-link"></a>
//     </div>
//     <a href="https://innouveau.com/apm/" class="case__main">
// <div class="case__about">
// <div class="case__about-preview">
//     APM is een platform met verschillende applicaties, die samen het beheer en management van de personeelsbezetting real-time regelt en stuurt. Door middel van beschikbare mankracht te combineren met verwachtte duur van een reparatie, helpt APM voor een optimale bezetting te zorgen.
// </div>
// <div class="case__read-more">👉 <span>Lees meer over dit project: APM / DAPS
// </span>
// </div>
// </div>
//
// <div class="case__client">
// <div style="background-image: url(https://innouveau.com/wp-content/uploads/2020/05/Screen-Shot-2020-05-28-at-14.25.06.png)" class="case__avator">
//     </div>
//     <div class="case__client-description">
// <div class="case__client-name">
//     CRS-i GmbH, Duitsland
// </div>
// <div class="case__client-position">
//     Innovatieve marktleider in autoschadeherstel consultancy
// </div>
// </div>
// </div>
// </a>
// </div>
// <div class="case case--size-2">
// <a href="https://innouveau.com/zodiac-pro/" class="case__title">
//     Zodiac Pro
// </a>
// <div class="case__artwork"><div class="case__video">
// <div class="video" data-video-id="rV9nHkuqd3g">
// <iframe id="video-rV9nHkuqd3g" class="video__container" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Portfolio Screencast: Zodiac Pro" width="640" height="390" src="https://www.youtube.com/embed/rV9nHkuqd3g?autoplay=0&amp;controls=1&amp;showinfo=0&amp;modestbranding=1&amp;rel=0&amp;loop=1&amp;start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Finnouveau.com&amp;widgetid=4&amp;forigin=https%3A%2F%2Finnouveau.com%2Fcases%2F&amp;aoriginsup=1&amp;gporigin=https%3A%2F%2Finnouveau.com%2Fcases%2F&amp;vf=1"></iframe>
// </div></div>
// <a href="https://innouveau.com/zodiac-pro/" class="case__artwork-link"></a>
//     </div>
//     <a href="https://innouveau.com/zodiac-pro/" class="case__main">
// <div class="case__about">
// <div class="case__about-preview">
//     Het speels samenstellen van je droomboot in de online configurator, waarbij je direct het resultaat in 3d ziet, is een fantastische marketingtool voor Zodiac Nautic. Hun omzet voor de modellen in de configurator steeg met liefst 50%. De configurator laat je uit verschillende maten boten kiezen, die je aan de hand van een grid helemaal kunt samenstellen met het type motor, stuurhut en onderdelen als een overkoepeling, duikplank, etc.
// </div>
// <div class="case__read-more">👉 <span>Lees meer over dit project: Zodiac Pro
// </span>
// </div>
// </div>
//
// <div class="case__client">
// <div style="background-image: url(https://innouveau.com/wp-content/uploads/2020/05/zodiac-nautic-logo-1.png)" class="case__avator">
//     </div>
//     <div class="case__client-description">
// <div class="case__client-name">
//     Zodiac Nautic
// </div>
// <div class="case__client-position">
//     Paris based inflatable boat producer
// </div>
// </div>
// </div>
// </a>
// </div>         </div>
//
const projects :Projects = {
    'f-domes': {
        title: 'F-Domes',
        key: 'f-domes',
        description: 'F.Domes is een snel groeiend bedrijf dat hoogwaardige domes (grote tenten) voor verschillende doeleinden produceert: showrooms, popup stores, glamping, festivals, etc. Hun vraag was om het aantal en de kwaliteit van hun leads te verhogen. Daarnaast was er de behoefte vanuit het sales team om de tijdsinvestering in een lead te verlagen.',
        artwork: {
            src: 'rlYcyBVPF2o',
            type: 'youtube'
        },
        client: {
            name: 'F-Domes',
            position: 'https://f-domes.com',
            logo: '/clients/fdomes.png'
        }
    },
    'corona-map': {
        title: 'Corona Map',
        key: 'corona-map',
        description: 'De uit de hand gelopen hobby van het publiceren van regionale data over de corona uitbraken in 2020 genereerde veel (internationale) aandacht. Van de Nederlandse Zondag met Lubach tot internationaal bekendste corona-duider Tomas Pueyo (bekend van Hammer and Dance) maakten gebruik van onze applicatie en beelden.',
        artwork: {
            src: '/projects/europe-1.gif',
            type: 'gif'
        },
        client: {
            name: 'Innouveau',
            position: 'Eigen project',
            logo: '/clients/innouveau.jpg'
        }
    },
    'print-my-glasses': {
        title: 'Print My Glasses',
        key: 'print-my-glasses',
        description: 'Je hoofd in 3d laten scannen bij de opticien en dan thuis op de bank een oneindige collectie (design)brillen passen en in alle mogelijke kleuren en motieven bekijken? Marc Notenboom - optometrist van origine - had deze droom en samen met een team van Klaas Nienhuis en Frodo Schering, maakten wij dit werkelijkheid. Scannen, bladeren, passen en aanpassen... en met een druk op de knop wordt je bril volledig in 3d geprint!',
        artwork: {
            src: 'M2o36P4Bo-w',
            type: 'youtube'
        },
        client: {
            name: 'Print My Glasses',
            position: 'Innovative startup for 3d printed glasses',
            logo: '/clients/printmyglasses.png'
        }
    },
    'apm': {
        title: 'APM / DAPS',
        key: 'apm',
        description: 'APM is een platform met verschillende applicaties, die samen het beheer en management van de personeelsbezetting real-time regelt en stuurt. Door middelvan beschikbare mankracht te combineren met verwachtte duur van een reparatie, helpt APM voor een optimale bezetting te zorgen.',
        artwork: {
            src: 'QFHVxXAaMpM',
            type: 'youtube'
        },
        client: {
            name: 'CRS-i GmbH, Duitsland',
            position: 'Innovatieve marktleider in autoschadeherstel consultancy',
            logo: '/clients/crsi.png'
        }
    },
    'zodiac-pro': {
        title: 'Zodiac Pro',
        key: 'zodiac-pro',
        description: 'Het speels samenstellen van je droomboot in de online configurator, waarbij je direct het resultaat in 3d ziet, is een fantastische marketingtool voor Zodiac Nautic. Hun omzet voor de modellen in de configurator steeg met liefst 50%. De configurator laat je uit verschillende maten boten kiezen, die je aan de hand van een grid helemaal kunt samenstellen met het type motor, stuurhut en onderdelen als een overkoepeling, duikplank, etc.',
        artwork: {
            src: 'rV9nHkuqd3g',
            type: 'youtube'
        },
        client: {
            name: 'Zodiac Nautic',
            position: 'Paris based inflatable boat producer',
            logo: '/clients/zodiac.png'
        }
    }
}

export const getProject = (title: string) => {
    return projects[title] || null;
}

export const getProjects = () => {
    return Object.values(projects);
}