// eslint-disable-next-line
import React from 'react';
import aboutImg from './previewImgs/aboutPreviewImg.png';
import skillsImg from './previewImgs/skillsPreviewImg.png';
import experienceImg from './previewImgs/experiencePreviewImg.png';
import ruumzyImg from './previewImgs/ruumzyPreviewImg.png';
import contactImg from './previewImgs/contactPreviewImg.png';

import {previewItem} from 'customTypes';

const previewItems: previewItem[] = [
    {
        identifier: 'about',
        description: "I'm a frontend software developer currently interning at Smartsheet",
        link: 'about',
        image: aboutImg
    },
    {
        identifier: 'skills',
        description: "Fluency within computer science and design is important to me",
        link: 'skills',
        image: skillsImg,
    },
    {
        identifier: 'experience',
        description: "Professional experience and personal projects have shaped my practices",
        link: 'experience',
        image: experienceImg,
    },
    {
        identifier: 'ruumzy',
        description: "The future of subletting apartments is here",
        link: 'experience',
        image: ruumzyImg,
    },
    {
        identifier: 'contact',
        description: "I'm always looking for new projects, feel free to reach out!",
        link: 'contact',
        image: contactImg,
    },
];

export default previewItems;
