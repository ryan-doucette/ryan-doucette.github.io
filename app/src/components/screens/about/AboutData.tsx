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
import arsenalPortalImage from './images/portal/about-arsenal-portal-image.png';
import travelPortalImage from './images/portal/about-travel-portal-image.png';
import beachPortalImage from './images/portal/about-beach-portal-image.png';
import pingPongPortalImage from './images/portal/about-ping-pong-portal-image.png';
import liftingPortalImage from './images/portal/about-lifting-portal-image.png';
import bladeRunnerPortalImage from './images/portal/about-blade-runner-portal-image.png';
import skatePortalImage from './images/portal/about-skate-portal-image.png';
import bostonPortalImage from './images/portal/about-boston-portal-image.png';
import ssbPortalImage from './images/portal/about-ssb-portal-image.png';
import musicPortalImage from './images/portal/about-music-portal-image.png';
import animationsPortalImage from './images/portal/about-animations-portal-image.png';
import uiUxPortalImage from './images/portal/about-ui-ux-portal-image.png';
import programmingPortalImage from './images/portal/about-programming-portal-image.png';

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
        portalImage: skatePortalImage, 
        iLoveLabel: 'SURF_SKATE_SNOW' 
    },
    {
        identifier: 'travel',
        carouselImage: travelCarouselImage,
        portalImage: travelPortalImage, 
        iLoveLabel: 'TRAVELING' 
    },
    {
        identifier: 'arsenal',
        carouselImage: arsenalCarouselImage,
        portalImage: arsenalPortalImage, 
        iLoveLabel: 'ARSENAL_FC' 
    },
    {
        identifier: 'boston',
        carouselImage: bostonCarouselImage,
        portalImage: bostonPortalImage, 
        iLoveLabel: 'BOSTON' 
    },
    {
        identifier: 'blade-runner',
        carouselImage: bladeRunnerCarouselImage,
        portalImage: bladeRunnerPortalImage, 
        iLoveLabel: 'BLADE_RUNNER' 
    },
    {
        identifier: 'programming',
        carouselImage: programmingCarouselImage,
        portalImage: programmingPortalImage, 
        iLoveLabel: 'PROGRAMMING' 
    },
    {
        identifier: 'lifting',
        carouselImage: liftingCarouselImage,
        portalImage: liftingPortalImage, 
        iLoveLabel: 'LIFTING' 
    },
    {
        identifier: 'super-smash-bros',
        carouselImage: ssbCarouselImage,
        portalImage: ssbPortalImage, 
        iLoveLabel: 'SUPER_SMASH_BROS' 
    },
    {
        identifier: 'animations',
        carouselImage: animationsCarouselImage,
        portalImage: animationsPortalImage, 
        iLoveLabel: 'ANIMATIONS' 
    },
    {
        identifier: 'ui-ux-design',
        carouselImage: uiUxCarouselImage,
        portalImage: uiUxPortalImage, 
        iLoveLabel: 'UI_UX_DESIGN' 
    },
    {
        identifier: 'eighties-music',
        carouselImage: musicCarouselImage,
        portalImage: musicPortalImage, 
        iLoveLabel: "EIGHTIES_MUSIC" 
    },
    {
        identifier: 'beach',
        carouselImage: beachCarouselImage,
        portalImage: beachPortalImage, 
        iLoveLabel: 'THE_BEACH' 
    },
    {
        identifier: 'ping-pong',
        carouselImage: pingPongCarouselImage,
        portalImage: pingPongPortalImage, 
        iLoveLabel: 'PING_PONG' 
    },
];

export default aboutItems;
