// eslint-disable-next-line
import React from 'react';
import {experienceItem} from 'customTypes';
import ruumzyImg from './images/ruumzy-experience-img.png';
import myWebsiteImg from './images/my-website-experience-img.png';
import blueportImg from './images/blueport-experience-img.png';
import ssgaImg from './images/ssga-experience-img.png';
import smartsheetImg from './images/smartsheet-experience-img.png';
import scrutinyImg from './images/scrutiny-experience-img.png';

const experienceItems: experienceItem[] = [
    {
        identifier: 'ruumzy',
        title: 'Ruumzy',
        subtitle: 'Apartment Sublet Solution',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: ruumzyImg,
    },
    {
        identifier: 'website',
        title: 'This Website',
        subtitle: 'Fun Personal Project',
        description: '',
        image: myWebsiteImg,
    },
    {
        identifier: 'blueport',
        title: 'Blueport',
        subtitle: 'Frontend Dev Co-op',
        description: '',
        image: blueportImg,
    },
    {
        identifier: 'stateStreet',
        title: 'SSGA',
        subtitle: 'Project Manager Co-op',
        description: '',
        image: ssgaImg,
    },
    {
        identifier: 'smartsheet',
        title: 'Smartsheet',
        subtitle: 'Frontend Dev Internship',
        description: '',
        image: smartsheetImg,
    },
    {
        identifier: 'scrutiny',
        title: 'ScrutinyFB',
        subtitle: 'Fantasy Football Help App',
        description: '',
        image: scrutinyImg,
    },
];

export default experienceItems;
