import './styles/_footer.scss'
import React from 'react';

const Footer = ({menuButtonPressed} : {menuButtonPressed: React.MouseEventHandler}) => {
    return (
        <div className="footer">
            <div className='triangle' id='tri1' onClick={menuButtonPressed}/>
            <div className='triangle' id='tri2'/>
            <div className='triangle' id='tri3'/>
        </div>
    );
}

export default Footer