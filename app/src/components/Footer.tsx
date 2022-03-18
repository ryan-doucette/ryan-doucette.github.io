import React from 'react';
import './styles/_footer.scss'

const Footer = ({menuButtonPressed} : {menuButtonPressed: React.MouseEventHandler}) => {
    return (
        <div className="footer">
            <div className='triangle' id='tri1' onClick={menuButtonPressed}/>
            <div className='triangle' id='tri2'/>
            <div className='triangle' id='tri3'/>
            <div className='squares' id='square1'/>
            <div className='squares' id='square2'/>
        </div>
    );
}

export default Footer