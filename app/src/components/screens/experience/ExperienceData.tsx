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
        identifier: 'smartsheet',
        title: 'Smartsheet',
        subtitle: 'Frontend Dev Internship',
        description: 'I start my internship at Smartsheet in May 2022. More details coming soon!',
        image: smartsheetImg,
        buttonLabel: 'SMARTSHEET.COM',
        buttonLink: 'https://www.smartsheet.com/',
    },
    {
        identifier: 'website',
        title: 'This Website',
        subtitle: 'Fun Personal Project',
        description: "Developing this website was an extremely fulfilling experience for me. It was created using React, TypeScript, and SCSS which has become my favorite frontend stack to work with. Whenever I had ideas about interesting animations or interactions I could not wait to get back to my laptop to implement them. Developing a website with so many specific animations and transitions while still maintaining its content scalability (adding new projects) was a rewarding challenge. If you have any specific questions about my implementation of anything, feel free to check out the source code or message me directly!",
        image: myWebsiteImg,
        buttonLabel: 'SOURCE CODE',
        buttonLink: 'https://github.com/ryan-doucette/my-website/',
    },
    {
        identifier: 'ruumzy',
        title: 'Ruumzy',
        subtitle: 'Apartment Sublet Solution',
        description: "Ruumzy was founded by Shanmukha Sriviasan and myself in 2021. It is an iOS and Android mobile application that simplifies the process of subletting apartments for students. I served as the lead frontend developer and designer for the team. Through the development of the app I was able to become more comfortable with React Native and developing a robust frontend with complicated data flows. I also developed ruumzy.com. Please feel free to reach with any questions about Ruumzy!",
        image: ruumzyImg,
        buttonLabel: 'RUUMZY.COM',
        buttonLink: 'https://ruumzy.com/',
    },
    {
        identifier: 'blueport',
        title: 'Blueport',
        subtitle: 'Frontend Dev Co-op',
        description: "I co-oped at Blueport Commerce as a frontend developer for a 6 month period spanning from July to December 2021. During my time there I contributed to their multi-tenant architecture by developing reusable components via Angular, TypeScript, and SCSS. I learned about RxJS and how to maintain a smooth flow of asynchronous data coming from cloud API endpoints into the state of the application. Having the opportunity to make meaningful contributions to Blueport's application was an awesome experience.",
        image: blueportImg,
        buttonLabel: 'BLUEPORT.COM',
        buttonLink: 'https://www.blueport.com/',
    },
    {
        identifier: 'stateStreet',
        title: 'SSGA',
        subtitle: 'Project Manager Co-op',
        description: "I co-oped at State Street Global Advisors within the Database Architecture team as a project manager for a 6 month period spanning from July to December 2020. This was my first time being a member in a software development team, it was my introduction to agile development and scrum methodologies. My responsibilities revolved around leading daily scrum meetings, managing cross functional relationships between various teams and vendors, and overseeing delivery of program objectives. Having a managerial position this early in my career was a great experience.",
        image: ssgaImg,
        buttonLabel: 'SSGA.COM',
        buttonLink: 'https://www.ssga.com/',
    },
    {
        identifier: 'scrutiny',
        title: 'ScrutinyFB',
        subtitle: 'Fantasy Football Help App',
        description: "ScrutinyFB is an iOS application that I developed with Shanmukha Srinvisan in 2019. The idea behind the app was to allow users to derive interesting patterns between players and fields. eg. How does Tom Brady play away against the Steelers? It was my (and Shan's) first introduction to React Native and the development lifecycle of a mobile app, so I learned a ton from this project. At this point it mainly just serves as a reminder of how far I've come as a developer and designer, as it is no longer up to date.",
        image: scrutinyImg,
        buttonLabel: 'ScrutinyFB APP',
        buttonLink: 'https://apps.apple.com/us/app/scrutinyfb/id1491261180',
    },
];

export default experienceItems;
