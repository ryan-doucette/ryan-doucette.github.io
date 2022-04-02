// eslint-disable-next-line
import React from 'react';
import { experienceItem } from 'customTypes';

const ExperienceFull = ({currentItem} : {currentItem:experienceItem}) => {
    return (
        <div>{currentItem.title}</div>
    );
}

export default ExperienceFull;
