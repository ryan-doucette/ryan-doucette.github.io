// eslint-disable-next-line
import React from 'react';
import {aboutItem} from 'customTypes';

import guitarCarouselImage from './images/about-guitar-carousel-image.png';
import skateCarouselImage from './images/about-skate-carousel-image.png';
import travelCarouselImage from './images/about-travel-carousel-image.png';
import arsenalCarouselImage from './images/about-arsenal-carousel-image.png';
import pingPongCarouselImage from './images/about-ping-pong-carousel-image.png'
import bostonCarouselImage from './images/about-boston-carousel-image.png';
import bladeRunnerCarouselImage from './images/about-blade-runner-carousel-image.png';
import programmingCarouselImage from './images/about-programming-carousel-image.png';
import liftingCarouselImage from './images/about-lifting-carousel-image.png';
import ssbCarouselImage from './images/about-ssb-carousel-image.png';
import beachCarouselImage from './images/about-beach-carousel-image.png';
import animationsCarouselImage from './images/about-animations-carousel-image.png';
import musicCarouselImage from './images/about-music-carousel-image.png';
import uiUxCarouselImage from './images/about-ui-ux-design-carousel-image.png';

const aboutItems: aboutItem[] = [
    {
        identifier: 'guitar',
        carouselImage: guitarCarouselImage,
        portalImage: '',
        iLoveLabel: 'GUITAR' 
    },
    {
        identifier: 'surf-skate-snow',
        carouselImage: skateCarouselImage,
        portalImage: '',
        iLoveLabel: 'SURF_SKATE_SNOW' 
    },
    {
        identifier: 'travel',
        carouselImage: travelCarouselImage,
        portalImage: '',
        iLoveLabel: 'TRAVELING' 
    },
    {
        identifier: 'arsenal',
        carouselImage: arsenalCarouselImage,
        portalImage: '',
        iLoveLabel: 'ARSENAL_FC' 
    },
    {
        identifier: 'boston',
        carouselImage: bostonCarouselImage,
        portalImage: '',
        iLoveLabel: 'BOSTON' 
    },
    {
        identifier: 'blade-runner',
        carouselImage: bladeRunnerCarouselImage,
        portalImage: '',
        iLoveLabel: 'BLADE_RUNNER' 
    },
    {
        identifier: 'programming',
        carouselImage: programmingCarouselImage,
        portalImage: '',
        iLoveLabel: 'PROGRAMMING' 
    },
    {
        identifier: 'lifting',
        carouselImage: liftingCarouselImage,
        portalImage: '',
        iLoveLabel: 'LIFTING' 
    },
    {
        identifier: 'super-smash-bros',
        carouselImage: ssbCarouselImage,
        portalImage: '',
        iLoveLabel: 'SUPER_SMASH_BROS' 
    },
    {
        identifier: 'animations',
        carouselImage: animationsCarouselImage,
        portalImage: '',
        iLoveLabel: 'ANIMATIONS' 
    },
    {
        identifier: 'ui-ux-design',
        carouselImage: uiUxCarouselImage,
        portalImage: '',
        iLoveLabel: 'UI_UX_DESIGN' 
    },
    {
        identifier: 'eighties-music',
        carouselImage: musicCarouselImage,
        portalImage: '',
        iLoveLabel: "EIGHTIES_MUSIC" 
    },
    {
        identifier: 'beach',
        carouselImage: beachCarouselImage,
        portalImage: '',
        iLoveLabel: 'THE_BEACH' 
    },
    {
        identifier: 'ping-pong',
        carouselImage: pingPongCarouselImage,
        portalImage: '',
        iLoveLabel: 'PING_PONG' 
    },
];

export default aboutItems;
