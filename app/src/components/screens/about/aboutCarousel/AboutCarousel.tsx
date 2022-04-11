import React from 'react';
import './_aboutCarousel.scss';
import aboutItems from '../AboutData';
import useInterval from '../../../../customHooks/UseInterval';

const AboutCarousel = ({currIndex, shiftLeftPressed, shiftRightPressed} : {currIndex: number, shiftLeftPressed: any, shiftRightPressed: any}) => {
    const aboutItemsLength = aboutItems.length;
    const aboutItemDuration = 4000;

    useInterval(() => {
        crankHandle('right');
        shiftCarousel('right');
    }, aboutItemDuration); 

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
        const selectedAboutItem = document.getElementById('selected-about-item');

        selectedAboutItem?.classList.remove('aboutItemSelected');
        selectedAboutItem?.classList.add('aboutItemDeselected');

        leftHandle!.style.pointerEvents = 'none';
        rightHandle!.style.pointerEvents = 'none';

        if(direction === 'right') {
            const tube = document.getElementById('tube');
            tube?.classList.add('shiftTubeRight');
    
            setTimeout(() => {
                tube?.classList.remove('shiftTubeRight');
                selectedAboutItem?.classList.remove('aboutItemDeselected');
                selectedAboutItem?.classList.add('aboutItemSelected');
            }, 750);
        }
        else if (direction === 'left') {
            const tube = document.getElementById('tube');
            tube?.classList.add('shiftTubeLeft');
    
            setTimeout(() => {
                tube?.classList.remove('shiftTubeLeft');
                selectedAboutItem?.classList.remove('aboutItemDeselected');
                selectedAboutItem?.classList.add('aboutItemSelected');
            }, 750);
        }
        setTimeout(() => {
            leftHandle!.style.pointerEvents = 'auto';
            rightHandle!.style.pointerEvents = 'auto';
        }, 2250);
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
                    <img 
                        src={aboutItems[getIndex(2)].carouselImage} 
                        className='tubeItem' 
                        alt={aboutItems[getIndex(2)].identifier}
                    />
                    <img
                        src={aboutItems[getIndex(1)].carouselImage} 
                        className='tubeItem' 
                        alt={aboutItems[getIndex(1)].identifier}
                    />
                    <img
                        id='selected-about-item'
                        src={aboutItems[currIndex].carouselImage}
                        className='tubeItem aboutItemSelected'
                        alt={aboutItems[currIndex].identifier}
                    />
                    <img
                        src={aboutItems[getIndex(-1)].carouselImage} 
                        className='tubeItem' 
                        alt={aboutItems[getIndex(-1)].identifier}
                    />
                    <img
                        src={aboutItems[getIndex(-2)].carouselImage} 
                        className='tubeItem' 
                        alt={aboutItems[getIndex(-2)].identifier}
                    />
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
