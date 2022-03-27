import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import category from 'customTypes';
import './styles/_preview.scss';

import about from './previewImgs/aboutPreviewImg.png';
import skills from './previewImgs/skillsPreviewImg.png';
import experience from './previewImgs/experiencePreviewImg.png';
import ruumzy from './previewImgs/ruumzyPreviewImg.png';
import contact from './previewImgs/contactPreviewImg.png';

const Preview = ({currentCategory} : {currentCategory:category}) => {
    const [currentImg, setCurrentImg] = useState(ruumzy);
    useEffect(() => {
        switch (currentCategory.identifier) {
            case 'About':
                setCurrentImg(about);
                break;
            case 'Skills':
                setCurrentImg(skills);
                break;
            case 'Experience':
                setCurrentImg(experience);
                break;
            case 'Ruumzy':
                setCurrentImg(ruumzy);
                break;
            case 'Contact':
                setCurrentImg(contact);
                break;
        }
    }, [currentCategory]);

    return (
        <div className="preview">
            <div className='previewImage' id='preview-image' style={{ backgroundImage:`url(${currentImg})` }}/>
            <div className='description' id='description'>{currentCategory.description}</div>
            <Link to={currentCategory.link.toLowerCase()} className='tellMeMore' id='more-button'>{currentCategory.identifier === 'Contact' ? 'contact' : 'tell me more'}</Link>
        </div>
    );
}

export default Preview;
