import { useState } from 'react';
import './styles/_closeButton.scss'

const CloseButton = () => {
    const [hovering, setHovering] = useState(false);

    return (
        <div className="closeButton" onMouseEnter ={() => setHovering(true)} onMouseLeave = {() => setHovering(false)} id={hovering ? 'hovering' : null}>
            <div className="leftright"/>
            <div className="rightleft"/>
        </div>
    );
}

export default CloseButton