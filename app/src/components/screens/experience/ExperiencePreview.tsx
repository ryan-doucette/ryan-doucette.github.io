// eslint-disable-next-line
import React from 'react';
import ExperienceFull from './ExperienceFull';

const ExperiencePreview = ({image, title, subTitle} : {image : string, title: string, subTitle: string}) => {
    return (
        <div className='experiencePreview'>
        <div>
            {title}
        </div>
        </div>
    );
}

export default ExperiencePreview;
