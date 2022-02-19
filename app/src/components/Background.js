// import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from './UseMousePosition';
import './styles/_background.scss';
import { useEffect } from 'react';

const Background = () => {

    const position = useMousePosition();

    const myX = 10;
    const myY = 15;

    useEffect(() => {
        console.log('cursor x: ', position.x);
        console.log('cursor y: ', position.y);
        console.log('x: ', myX);
        console.log('y: ', myY);
        console.log('distance between: ', distBetween(position.x, position.y, myX, myY));
    });

    const distBetween = (x1, y1, x2, y2) => {
        let x = x2 - x1;
        let y = y2 - y1;

        return Math.sqrt(x*x + y*y);
    }

    const myStyle = {
        transform: "rotate(" + position.x + "deg)"
    };

    return (
        <div className="background">
            <div className='test' style={myStyle}>
                </div>
        </div>
    );
}

export default Background;
