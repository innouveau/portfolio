import type {Projects} from "~/types";

// <div class="case case--size-2">
// <a href="https://innouveau.com/gassgrill-shop/" class="case__title">
//     Gassgrill Shop
// </a>
// <div class="case__artwork"><div style="background-image: url()" class="case__image"></div>
//     <a href="https://innouveau.com/gassgrill-shop/" class="case__artwork-link"></a>
//     </div>
//     <a href="https://innouveau.com/gassgrill-shop/" class="case__main">
// <div class="case__about">
// <div class="case__about-preview">
//     Gasgrill shop is één van de grootste leveranciers in high end barbecues op de Duitse markt. Maar vooral: eindeloze mogelijkheden om de voor jou perfecte barbecue samen te stellen. Zes verschillende maten, met elk opties om op te delen in een deel rooster, een deel met pannen en een deel gril, onderstel al dan niet met wieltjes of niet, spies, deksel en allerlei andere upgrades een aankledingen.
// </div>
// <div class="case__read-more">👉 <span>Lees meer over dit project: Gassgrill Shop
// </span>
// </div>
// </div>
//
// <div class="case__client">
// <div style="background-image: url(https://innouveau.com/wp-content/uploads/2020/11/gasgrill-logo-3.png)" class="case__avator">
//     </div>
//     <div class="case__client-description">
// <div class="case__client-name">
//     Gassgrill Shop
// </div>
// <div class="case__client-position">
//     Duitse marktleider in luxe barbecues
// </div>
// </div>
// </div>
// </a>
// </div>
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
    },
    'cleaner-air-for-all': {
        title: 'Cleaner Air For All',
        key: 'cleanear-air-for-all',
        description: 'Voor de Europese Commissie maakten we in opdracht van Schwandt een serie interactieve infographics. Deze zijn gemaakt om de impact van de Europese Green Deal te visualiseren en de betrokkenheid van burgers te vergroten.',
        artwork: {
            src: 'WKTQO4IPNv0',
            type: 'youtube'
        },
        client: {
            name: 'European Commission',
            position: 'EU institution responsible for proposing legislation and implementing decisions',
            logo: '/clients/european-commision.gif'
        }
    },
    'the-cycle-of-paper-recycling': {
        title: 'The Paper Cycle',
        key: 'the-cycle-of-paper-recycling',
        description: 'CEPI is de organisatie die de Europese industrie van papierverwerking vertegenwoordigt. In opdracht van Schwandt Information Design creëerden we een scrollytelling die enerzijds het proces van ruw papiermateriaal (de opbrengst van o.a. de oud-papier inleverstromen) tot aan een waardevol eindproduct illustreert; en anderzijds inzichtelijk maakt wat er met de side streams gebeurt en hoe daar nog waarde uitgehaald wordt.',
        artwork: {
            src: 'bP7p2yJ_B-s',
            type: 'youtube'
        },
        client: {
            name: 'CEPI',
            position: 'Cepi represents the European Paper industry at EU level',
            logo: '/clients/cepi.jpg'
        }
    },
    'gassgrill-shop': {
        title: 'Gassgrill Shop',
        key: 'gassgrill-shop',
        description: 'Gassgrill shop is één van de grootste leveranciers in high end barbecues op de Duitse markt. Maar vooral: eindeloze mogelijkheden om de voor jou perfecte barbecue samen te stellen. Zes verschillende maten, met elk opties om op te delen in een deel rooster, een deel met pannen en een deel gril, onderstel al dan niet met wieltjes of niet, spies, deksel en allerlei andere upgrades een aankledingen.',
        artwork: {
            src: '/projects/gasgrill-2.gif',
            type: 'gif'
        },
        client: {
            name: 'Gassgrill Shop',
            position: 'Duitse marktleider in luxe barbecues',
            logo: '/clients/gassgrill-logo-3.png'
        }
    }
}

export const getProject = (title: string) => {
    return projects[title] || null;
}

export const getProjects = () => {
    return Object.values(projects);
}