// eslint-disable-next-line
import React from 'react';
import {aboutItem} from 'customTypes';

import guitarCarouselImage from './images/carousel/about-guitar-carousel-image.png';
import skateCarouselImage from './images/carousel/about-skate-carousel-image.png';
import travelCarouselImage from './images/carousel/about-travel-carousel-image.png';
import arsenalCarouselImage from './images/carousel/about-arsenal-carousel-image.png';
import pingPongCarouselImage from './images/carousel/about-ping-pong-carousel-image.png'
import bostonCarouselImage from './images/carousel/about-boston-carousel-image.png';
import bladeRunnerCarouselImage from './images/carousel/about-blade-runner-carousel-image.png';
import programmingCarouselImage from './images/carousel/about-programming-carousel-image.png';
import liftingCarouselImage from './images/carousel/about-lifting-carousel-image.png';
import ssbCarouselImage from './images/carousel/about-ssb-carousel-image.png';
import beachCarouselImage from './images/carousel/about-beach-carousel-image.png';
import animationsCarouselImage from './images/carousel/about-animations-carousel-image.png';
import musicCarouselImage from './images/carousel/about-music-carousel-image.png';
import uiUxCarouselImage from './images/carousel/about-ui-ux-design-carousel-image.png';

import guitarPortalImage from './images/portal/about-guitar-portal-image.png';
import guitarTest1 from './images/portal/guitarTest1.png';
import guitarTest2 from './images/portal/guitarTest2.png';

const aboutItems: aboutItem[] = [
    {
        identifier: 'guitar',
        carouselImage: guitarCarouselImage,
        portalImage: guitarPortalImage, 
        iLoveLabel: 'GUITAR' 
    },
    {
        identifier: 'surf-skate-snow',
        carouselImage: skateCarouselImage,
        portalImage: guitarTest2, 
        // portalImage: 'me on a skateboard',
        iLoveLabel: 'SURF_SKATE_SNOW' 
    },
    {
        identifier: 'travel',
        carouselImage: travelCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: 'me with luggage',
        iLoveLabel: 'TRAVELING' 
    },
    {
        identifier: 'arsenal',
        carouselImage: arsenalCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: 'me in arsenal kit',
        iLoveLabel: 'ARSENAL_FC' 
    },
    {
        identifier: 'boston',
        carouselImage: bostonCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: 'me in celtics uniform?',
        iLoveLabel: 'BOSTON' 
    },
    {
        identifier: 'blade-runner',
        carouselImage: bladeRunnerCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: 'me in bladerunner outfit',
        iLoveLabel: 'BLADE_RUNNER' 
    },
    {
        identifier: 'programming',
        carouselImage: programmingCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: 'me behind a laptop screen',
        iLoveLabel: 'PROGRAMMING' 
    },
    {
        identifier: 'lifting',
        carouselImage: liftingCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: 'me lifting',
        iLoveLabel: 'LIFTING' 
    },
    {
        identifier: 'super-smash-bros',
        carouselImage: ssbCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: 'me as captain falcon',
        iLoveLabel: 'SUPER_SMASH_BROS' 
    },
    {
        identifier: 'animations',
        carouselImage: animationsCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: 'me as keyframes (one before and after that are like greyed out)',
        iLoveLabel: 'ANIMATIONS' 
    },
    {
        identifier: 'ui-ux-design',
        carouselImage: uiUxCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: '',
        iLoveLabel: 'UI_UX_DESIGN' 
    },
    {
        identifier: 'eighties-music',
        carouselImage: musicCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: 'me in eighties outfit',
        iLoveLabel: "EIGHTIES_MUSIC" 
    },
    {
        identifier: 'beach',
        carouselImage: beachCarouselImage,
        portalImage: guitarPortalImage, 
        // portalImage: 'me in beach attire',
        iLoveLabel: 'THE_BEACH' 
    },
    {
        identifier: 'ping-pong',
        carouselImage: pingPongCarouselImage,
        portalImage: guitarTest1, 
        // portalImage: 'me with a ping pong paddle',
        iLoveLabel: 'PING_PONG' 
    },
];

export default aboutItems;
