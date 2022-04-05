declare module 'customTypes' {
    export type previewItem = {
        identifier: string,
        description: string,
        link: string,
        image: string,
    }
    export type experienceItem = {
        identifier: string,
        title: string,
        subtitle: string,
        description: string,
        image: string,
        buttonLabel?: string,
        buttonLink?: string,
    }
}