import React, { useRef, useState } from 'react';
import './styles/_closeButton.scss'

const CloseButton = ({backgroundColor, xColor, changeColorOnHover, hoverBackgroundColor, hoverXColor} : {backgroundColor: string, xColor: string, changeColorOnHover: boolean, hoverBackgroundColor: string, hoverXColor: string}) => {
    const [hovering, setHovering] = useState(false);
    const closeButton = useRef<HTMLDivElement>(null);
    const X = useRef<HTMLDivElement>(null);

    const changeHoverColor = () => {
        if(changeColorOnHover) {
            closeButton.current!.style.backgroundColor = hoverBackgroundColor;
            X.current!.style.backgroundColor = hoverXColor;
        }
    }
    const changeOffHoverColor = () => {
        if(changeColorOnHover) {
            closeButton.current!.style.backgroundColor = backgroundColor;
            X.current!.style.backgroundColor = xColor;
        }
    }

    return (
        <div 
            ref={closeButton}
            style={{backgroundColor:backgroundColor}}
            className="closeButton" 
            onMouseEnter ={() => {setHovering(true); changeHoverColor()}} 
            onMouseLeave = {() => {setHovering(false); changeOffHoverColor()}} 
            id={hovering ? 'hovering' : undefined}
        >
            <div 
                ref={X}
                className="leftright"
                style={{backgroundColor:xColor}}
            />
            <div 
                ref={X}
                className="rightleft"
                style={{backgroundColor:xColor}}
            />
        </div>
    );
}

export default CloseButton