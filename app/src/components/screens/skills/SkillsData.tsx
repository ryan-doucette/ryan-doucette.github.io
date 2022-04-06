// eslint-disable-next-line
import React from 'react';
import reactImg from './skillsImages/skills-react-img.png';
import typeScriptImg from './skillsImages/skills-ts-img.png';
import javaImg from './skillsImages/skills-java-img.png';
import pythonImg from './skillsImages/skills-python-img.png';
import htmlImg from './skillsImages/skills-html-img.png';
import scssImg from './skillsImages/skills-scss-img.png';
import adobeImg from './skillsImages/skills-adobe-img.png';
import angularImg from './skillsImages/skills-angular-img.png';
import {skillsItem} from 'customTypes';

const skillItems: skillsItem[] = [
    {
        identifier: 'react',
        image: reactImg,
        label: 'REACT / REACT NATIVE',
    },
    {
        identifier: 'typeScript',
        image: typeScriptImg,
        label: 'TYPESCRIPT / JAVASCRIPT',
    },
    {
        identifier: 'java',
        image: javaImg,
        label: 'JAVA',
    },
    {
        identifier: 'python',
        image: pythonImg,
        label: 'PYTHON',
    },
    {
        identifier: 'html',
        image: htmlImg,
        label: 'HTML5',
    },
    {
        identifier: 'scss',
        image: scssImg,
        label: 'SCSS / CSS',
    },
    {
        identifier: 'adobe',
        image: adobeImg,
        label: 'ADOBE CREATIVE CLOUD',
    },
    {
        identifier: 'angular',
        image: angularImg,
        label: 'ANGULAR',
    },
];

export default skillItems;
