import React from 'react';
import { Link } from 'react-router-dom';
import category from 'customTypes';
import './styles/_preview.scss';

const Preview = ({currentCategory} : {currentCategory:category}) => {
    return (
        <div className="preview">
            {/* Image */}
            <h2>{currentCategory.description}</h2>
            <Link to={currentCategory.link.toLowerCase()} className='tellMeMore'>tell me more</Link>
        </div>
    );
}

export default Preview;
