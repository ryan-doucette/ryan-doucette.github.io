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
    export type techItem = {
        identifier: string,
        image: string,
        innerLabelMobile: string,
        innerLabelDesktop: string,
        outerLeftLabelMobile: string,
        outerRightLabelMobile: string,
        outerLeftLabelDesktop: string,
        outerRightLabelDesktop: string,
    }
    export type aboutItem = {
        identifier: string,
        carouselImage: string,
        portalImage: string,
        iLoveLabel: string,
    }
}