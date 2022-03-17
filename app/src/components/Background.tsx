// import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from './UseMousePosition';
import React, { useEffect } from 'react';
import './styles/_background.scss';

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

    const distBetween = (x1: number, y1: number, x2: number, y2: number) => {
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
