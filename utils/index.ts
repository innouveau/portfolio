import type {Projects} from "~/types";
import fdomes from './bodies/fdomes';
import gasgrill from './bodies/gasgrill';
import corona from './bodies/corona';
import glass from './bodies/glass';
import apm from './bodies/apm';
import zodiac from './bodies/zodiac';
import air from './bodies/air';

const projects: Projects = {
    'f-domes': {
        title: 'F-Domes',
        tags: ['3d'],
        subtitle: 'Hoe onze speelse 3d configurator ervoor zorgde dat de omzet met 50% steeg',
        headImage: '/projects/fdomes-head.jpg',
        link: 'https://3d.fdomes.com/',
        key: 'f-domes',
        description: 'F.Domes is een snel groeiend bedrijf dat hoogwaardige domes (grote tenten) voor verschillende doeleinden produceert: showrooms, popup stores, glamping, festivals, etc. Hun vraag was om het aantal en de kwaliteit van hun leads te verhogen. Daarnaast was er de behoefte vanuit het sales team om de tijdsinvestering in een lead te verlagen.',
        intro: 'Het speels samenstellen van je droomboot in de online configurator, waarbij je direct het resultaat in 3d ziet, is een fantastische marketingtool voor Zodiac Nautic. Hun omzet voor de modellen in de configurator steeg met liefst 50%. De configurator laat je uit verschillende maten boten kiezen, die je aan de hand van een grid helemaal kunt samenstellen met het type motor, stuurhut en onderdelen als een overkoepeling, duikplank, etc.',
        body: fdomes,
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
        tags: ['info'],
        subtitle: 'Applicatie met regionale up-to-date informatie over besmettingsgraad',
        key: 'corona-map',
        headImage: '/projects/zondag-met-lubach.png',
        link: '',
        intro: 'De uit de hand gelopen hobby van het publiceren van regionale data over de corona uitbraken in 2020 genereerde veel (internationale) aandacht. Van de Nederlandse Zondag met Lubach tot internationaal bekendste corona-duider Tomas Pueyo (bekend van Hammer and Dance) maakten gebruik van onze applicatie en beelden.',
        description: 'De uit de hand gelopen hobby van het publiceren van regionale data over de corona uitbraken in 2020 genereerde veel (internationale) aandacht. Van de Nederlandse Zondag met Lubach tot internationaal bekendste corona-duider Tomas Pueyo (bekend van Hammer and Dance) maakten gebruik van onze applicatie en beelden.',
        body: corona,
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
        tags: ['app', '3d'],
        title: 'Print My Glasses',
        subtitle: 'Online je bril 3d configureren en op maat maken',
        key: 'print-my-glasses',
        headImage: '/projects/print-my-glasses-5.jpeg',
        description: 'Je hoofd in 3d laten scannen bij de opticien en dan thuis op de bank een oneindige collectie (design)brillen passen en in alle mogelijke kleuren en motieven bekijken? Marc Notenboom - optometrist van origine - had deze droom en samen met een team van Klaas Nienhuis en Frodo Schering, maakten wij dit werkelijkheid. Scannen, bladeren, passen en aanpassen... en met een druk op de knop wordt je bril volledig in 3d geprint!',
        intro: 'Je hoofd in 3d laten scannen bij de opticien en dan thuis op de bank een oneindige collectie (design)brillen passen en in alle mogelijke kleuren en motieven bekijken? Marc Notenboom - optometrist van origine - had deze droom en samen met een team van Klaas Nienhuis en Frodo Schering, maakten wij dit werkelijkheid. Scannen, bladeren, passen en aanpassen... en met een druk op de knop wordt je bril volledig in 3d geprint!',
        link: '',
        body: glass,
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
        tags: ['app'],
        title: 'APM / DAPS',
        subtitle: 'Optimalisatie d.m.v. techniek die de menselijke maat in het oog houdt',
        headImage: '/projects/workplace.jpg',
        intro: 'APM is een platform met verschillende applicaties, die samen het beheer en management van de personeelsbezetting real-time regelt en stuurt. Door middel van beschikbare mankracht te combineren met verwachtte duur van een reparatie, helpt APM voor een optimale bezetting te zorgen.',
        key: 'apm',
        body: apm,
        link: '',
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
        tags: ['3d'],
        title: 'Zodiac Pro',
        subtitle: 'Hoe onze speelse 3d configurator ervoor zorgde dat de omzet met 50% steeg',
        headImage: '/projects/zodiac-pro.jpg',
        link: '',
        body: zodiac,
        intro: 'Het speels samenstellen van je droomboot in de online configurator, waarbij je direct het resultaat in 3d ziet, is een fantastische marketingtool voor Zodiac Nautic. Hun omzet voor de modellen in de configurator steeg met liefst 50%. De configurator laat je uit verschillende maten boten kiezen, die je aan de hand van een grid helemaal kunt samenstellen met het type motor, stuurhut en onderdelen als een overkoepeling, duikplank, etc.',
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
        tags: ['info'],
        title: 'Cleaner Air For All',
        subtitle: 'Interactieve infographic-serie over luchtkwaliteit in Europa',
        headImage: '/projects/cl3.gif',
        intro: 'Voor de Europese Commissie maakten we in opdracht van Schwandt een serie interactieve infographics.',
        key: 'cleaner-air-for-all',
        description: 'Voor de Europese Commissie maakten we in opdracht van Schwandt een serie interactieve infographics. Deze zijn gemaakt om de impact van de Europese Green Deal te visualiseren en de betrokkenheid van burgers te vergroten.',
        body: air,
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
        tags: ['info'],
        title: 'The Paper Cycle',
        key: 'the-cycle-of-paper-recycling',
        subtitle: 'Scrollytelling over de papierverwerkingsindustrie',
        headImage: '/projects/cepi.gif',
        intro: 'CEPI is de organisatie die de Europese industrie van papierverwerking vertegenwoordigt. In opdracht van Schwandt Information Design creëerden we een scrollytelling die enerzijds het proces van ruw papiermateriaal (de opbrengst van o.a. de oud-papier inleverstromen) tot aan een waardevol eindproduct illustreert; en anderzijds inzichtelijk maakt wat er met de side streams gebeurt en hoe daar nog waarde uitgehaald wordt.',
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
        tags: ['3d'],
        title: 'Gassgrill Shop',
        subtitle: 'Luxe 3d product configurator voor barbecues',
        headImage: '/projects/gasgrill-1.gif',
        link: 'https://www.gasgrill-shop.com/3d-konfigurator/index.html#/',
        key: 'gassgrill-shop',
        description: 'Gassgrill shop is één van de grootste leveranciers in high end barbecues op de Duitse markt. Maar vooral: eindeloze mogelijkheden om de voor jou perfecte barbecue samen te stellen. Zes verschillende maten, met elk opties om op te delen in een deel rooster, een deel met pannen en een deel gril, onderstel al dan niet met wieltjes of niet, spies, deksel en allerlei andere upgrades een aankledingen.',
        intro: 'Gasgrill shop is één van de grootste leveranciers in high end barbecues op de Duitse markt. Maar vooral: eindeloze mogelijkheden om de voor jou perfecte barbecue samen te stellen. Zes verschillende maten, met elk opties om op te delen in een deel rooster, een deel met pannen en een deel gril, onderstel al dan niet met wieltjes of niet, spies, deksel en allerlei andere upgrades een aankledingen.',
        body: gasgrill,
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

export const getProjects = (filter: string[]) => {
    const ps = Object.values(projects);
    return ps.filter((p) => {
        return filter.some((f) => p.tags.includes(f));
    })
}