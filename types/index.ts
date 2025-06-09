export type Artwork = {
    src: string;
    type: 'gif' | 'youtube';
}

export type Project = {
    title: string;
    key: string;
    description: string;
    artwork: Artwork;
    client: {
        name: string;
        position: string;
        logo: string;
    };
}

export type Projects = {
    [key: string]: Project;
}