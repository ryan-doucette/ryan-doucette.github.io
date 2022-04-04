// eslint-disable-next-line
import React from 'react';
import './_experiencePreview.scss';

const ExperiencePreview = ({image, title, subTitle} : {image : string, title: string, subTitle: string}) => {
    return (
        <div className='experiencePreview'>
            <img className='experiencePreviewImage' alt={title + ' image'} src={image}/>
            <div className='previewLabels'>
                <div className='experiencePreviewTitle'>{title}</div>
                <div className='experiencePreviewSubTitle'>{subTitle}</div>  
            </div>
        </div>
    );
}

export default ExperiencePreview;
