// eslint-disable-next-line
import React from 'react';
import './_experiencePreview.scss';

const ExperiencePreview = ({image, title, subTitle} : {image : string, title: string, subTitle: string}) => {
    return (
        <div className='experiencePreview'>
            <div className='experiencePreviewImage' style={{ backgroundImage:`url(${image})` }}/>
            <div className='previewLabels'>
                <div className='experiencePreviewTitle'>{title}</div>
                <div className='experiencePreviewSubTitle'>{subTitle}</div>  
            </div>
        </div>
    );
}

export default ExperiencePreview;
