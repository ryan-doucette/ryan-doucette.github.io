// eslint-disable-next-line
import React from 'react';
import {experienceItem} from 'customTypes';
import testImg from './images/test-01.png';

const experienceItems: experienceItem[] = [
    {
        identifier: 'ruumzy',
        title: 'Ruumzy',
        subtitle: 'Apartment Sublet Solution',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: testImg,
    },
    {
        identifier: 'website',
        title: 'This Website',
        subtitle: 'Fun Personal Project',
        description: '',
        image: '',
    },
    {
        identifier: 'blueport',
        title: 'Blueport',
        subtitle: 'Frontend Dev Co-op',
        description: '',
        image: '',
    },
    {
        identifier: 'stateStreet',
        title: 'SSGA',
        subtitle: 'Project Manager Co-op',
        description: '',
        image: '',
    },
    {
        identifier: 'smartsheet',
        title: 'Smartsheet',
        subtitle: 'Frontend Dev Internship',
        description: '',
        image: '',
    },
    {
        identifier: 'scrutiny',
        title: 'ScrutinyFB',
        subtitle: 'Fantasy Football Assistant',
        description: '',
        image: '',
    },
];

export default experienceItems;
