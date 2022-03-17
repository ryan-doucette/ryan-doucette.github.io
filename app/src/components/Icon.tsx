import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom'
import './styles/_icon.scss';

const Icon = ({iconPressed} : {iconPressed: MouseEventHandler}) => {
    return (
        <Link to={'home'} className="iconContainer" onClick={iconPressed}>
            <div className='topTriangle'/>
            <div className='bottomTriangle'/>
            <div className='topLightningBolt'/>
            <div className='bottomLightningBolt'/>
        </Link>
    );
}

export default Icon