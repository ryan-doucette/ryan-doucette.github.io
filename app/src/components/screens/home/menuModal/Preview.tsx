import React from 'react';
import { Link } from 'react-router-dom';
import category from 'customTypes';
import './styles/_preview.scss';

const Preview = ({currentCategory} : {currentCategory:category}) => {
    return (
        <div className="preview">
            <div className='previewImage' id='preview-image'/>
            <div className='description' id='description'>{currentCategory.description}</div>
            <Link to={currentCategory.link.toLowerCase()} className='tellMeMore' id='more-button'>{currentCategory.identifier === 'Contact' ? 'contact' : 'tell me more'}</Link>
        </div>
    );
}

export default Preview;
