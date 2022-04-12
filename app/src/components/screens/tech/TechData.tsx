// eslint-disable-next-line
import React from 'react';
import reactImg from './techImages/tech-react-img.png';
import typeScriptImg from './techImages/tech-ts-img.png';
import javaImg from './techImages/tech-java-img.png';
import pythonImg from './techImages/tech-python-img.png';
import htmlImg from './techImages/tech-html-img.png';
import scssImg from './techImages/tech-scss-img.png';
import adobeImg from './techImages/tech-adobe-img.png';
import angularImg from './techImages/tech-angular-img.png';
import {techItem} from 'customTypes';

const skillItems: techItem[] = [
    {
        identifier: 'react',
        image: reactImg,
        innerLabelMobile: 'My preferred frontend library',
        innerLabelDesktop: "My preferred frontend library. I love their lifecycle hooks and JSX.",
        outerLeftLabelMobile: '<React>',
        outerRightLabelMobile: '</React>',
        outerLeftLabelDesktop: '<React-ReactNative>',
        outerRightLabelDesktop: '</React-ReactNative>',
    },
    {
        identifier: 'typeScript',
        image: typeScriptImg,
        innerLabelMobile: "Builds my frontend projects",
        innerLabelDesktop: "Builds my frontend projects. I'm a big fan of static typed languages.",
        outerLeftLabelMobile: '<TS-JS>',
        outerRightLabelMobile: '</TS-JS>',
        outerLeftLabelDesktop: '<TypeScript-JavaScript>',
        outerRightLabelDesktop: '</TypeScript-JavaScript>',
    },
    {
        identifier: 'java',
        image: javaImg,
        innerLabelMobile: 'My go-to for object oriented',
        innerLabelDesktop: 'My go-to langauge for working with object oriented systems.',
        outerLeftLabelMobile: '<Java>',
        outerRightLabelMobile: '</Java>',
        outerLeftLabelDesktop: '<Java>',
        outerRightLabelDesktop: '</Java>',
    },
    {
        identifier: 'python',
        image: pythonImg,
        innerLabelMobile: 'For any algorithmic solutions',
        innerLabelDesktop: 'For any algorithmic solutions. Data manipulation has never been so fun!',
        outerLeftLabelMobile: '<Python>',
        outerRightLabelMobile: '</Python>',
        outerLeftLabelDesktop: '<Python>',
        outerRightLabelDesktop: '</Python>',
    },
    {
        identifier: 'html',
        image: htmlImg,
        innerLabelMobile: 'Structures my online projects',
        innerLabelDesktop: 'Structures my online projects. Gained most of my knowledge from JSX.',
        outerLeftLabelMobile: '<HTML5>',
        outerRightLabelMobile: '</HTML5',
        outerLeftLabelDesktop: '<HTML5>',
        outerRightLabelDesktop: '</HTML5>',
    },
    {
        identifier: 'scss',
        image: scssImg,
        innerLabelMobile: 'Makes my pages come to life',
        innerLabelDesktop: 'Makes my pages come to life. SCSS is a must for me for organized styling.',
        outerLeftLabelMobile: '<SCSS-CSS>',
        outerRightLabelMobile: '</SCSS-CSS>',
        outerLeftLabelDesktop: '<SCSS-CSS>',
        outerRightLabelDesktop: '</SCSS-CSS>',
    },
    {
        identifier: 'adobe',
        image: adobeImg,
        innerLabelMobile: 'I live in the Creative Cloud',
        innerLabelDesktop: 'I live in the Creative Cloud. Primarily Illustrator, InDesign, and After Effects.',
        outerLeftLabelMobile: '<Adobe>',
        outerRightLabelMobile: '</Adobe>',
        outerLeftLabelDesktop: '<Adobe>',
        outerRightLabelDesktop: '</Adobe>',
    },
    {
        identifier: 'angular',
        image: angularImg,
        innerLabelMobile: 'For out-of-box structure',
        innerLabelDesktop: 'For out-of-box structure. Fantastic CLI to get an app running fast.',
        outerLeftLabelMobile: '<Angular>',
        outerRightLabelMobile: '</Angular>',
        outerLeftLabelDesktop: '<Angular>',
        outerRightLabelDesktop: '</Angular>',
    },
];

export default skillItems;
