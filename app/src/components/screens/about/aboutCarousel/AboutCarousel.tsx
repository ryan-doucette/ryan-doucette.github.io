import React from 'react';
import './_aboutCarousel.scss';
import aboutItems from '../AboutData';
import useInterval from '../../../../customHooks/UseInterval';

const AboutCarousel = ({currIndex, shiftLeftPressed, shiftRightPressed} : {currIndex: number, shiftLeftPressed: any, shiftRightPressed: any}) => {
    const aboutItemsLength = aboutItems.length;
    const aboutItemDuration = 4000;

    // useInterval(() => {
    //     crankHandle('right');
    //     shiftCarousel('right');
    // }, aboutItemDuration); 

    const crankHandle = (side: string) => {
        if (side === 'left') {
            const handle = document.getElementById('left-handle');
            handle?.classList.add('leftCrank');

            setTimeout(() => {
                handle?.classList.remove('leftCrank');
            }, 750);
        }
        else if (side === 'right') {
            const handle = document.getElementById('right-handle');
            handle?.classList.add('rightCrank');

            setTimeout(() => {
                handle?.classList.remove('rightCrank');
            }, 750);
        }
    }
  
    const shiftCarousel = (direction: string) => {
        const leftHandle = document.getElementById('left-handle');
        const rightHandle = document.getElementById('right-handle');

        leftHandle!.style.pointerEvents = 'none';
        rightHandle!.style.pointerEvents = 'none';

        if(direction === 'right') {
            const tube = document.getElementById('tube');
            tube?.classList.add('shiftTubeRight');
    
            setTimeout(() => {
                tube?.classList.remove('shiftTubeRight');
                leftHandle!.style.pointerEvents = 'auto';
                rightHandle!.style.pointerEvents = 'auto';
            }, 750);
        }
        else if (direction === 'left') {
            const tube = document.getElementById('tube');
            tube?.classList.add('shiftTubeLeft');
    
            setTimeout(() => {
                tube?.classList.remove('shiftTubeLeft');
                leftHandle!.style.pointerEvents = 'auto';
                rightHandle!.style.pointerEvents = 'auto';
            }, 750);
        }
    };

    const getIndex = (index: number) => {
        if(index < 0) {
            if(index + currIndex >= 0) {
                return index + currIndex;
            }
            else {
                const correctedDiff = index + currIndex;
                return aboutItemsLength + correctedDiff;
            }
        }
        else {
            if(index + currIndex < aboutItemsLength) {
                return index + currIndex;
            }
            else {
                const correctedDiff = (index + currIndex) - aboutItemsLength;
                return correctedDiff;
            }
        }
    }

    return (
        <div className="aboutCarousel">
            <div 
                className='handleContainer leftHandle' 
                id='left-handle' 
                onClick={() => {
                    crankHandle('left'); 
                    shiftCarousel('left'); 
                    shiftLeftPressed();
                }}
            >
                <div className='handleBall'/>
                <div className='handle'/>
            </div>
            <div className='tubeContainer'>
                <div className='tubeSide tubeSideRight'/>
                <div className='tube' id='tube'>
                    <div className='tubeItem'>{aboutItems[getIndex(2)].identifier}</div>
                    <div className='tubeItem'>{aboutItems[getIndex(1)].identifier}</div>
                    <div className='tubeItem'>{aboutItems[currIndex].identifier}</div>
                    <div className='tubeItem'>{aboutItems[getIndex(-1)].identifier}</div>
                    <div className='tubeItem'>{aboutItems[getIndex(-2)].identifier}</div>
                </div>
                <div className='tubeSide tubeSideLeft'/>
            </div>
            <div 
                className='handleContainer rightHandle' 
                id='right-handle' 
                onClick={() => {
                    crankHandle('right'); 
                    shiftCarousel('right');
                    shiftRightPressed();
                }}
            >
                <div className='handleBall'/>
                <div className='handle'/>
            </div>
        </div>
    );
}

export default AboutCarousel;
