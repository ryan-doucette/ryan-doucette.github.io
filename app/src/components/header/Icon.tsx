import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom'
import './styles/_icon.scss';

const Icon = ({iconPressed} : {iconPressed: MouseEventHandler}) => {
    return (
        <Link to={'/'} className="iconContainer" onClick={iconPressed}>
            <div className='topTriangle'/>
            <div className='bottomTriangle'/>
            <div className='lightningBoltContainer'>
                <div className='topLightningBolt'/>
                <div className='bottomLightningBolt'/>
            </div>
        </Link>
    );
}

export default Icon