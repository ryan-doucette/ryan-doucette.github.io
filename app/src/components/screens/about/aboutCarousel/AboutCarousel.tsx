import React from 'react';
import './_aboutCarousel.scss';
import aboutItems from '../AboutData';
import useInterval from '../../../../customHooks/UseInterval';

const AboutCarousel = ({currIndex, shiftLeftPressed, shiftRightPressed} : {currIndex: number, shiftLeftPressed: any, shiftRightPressed: any}) => {
    const aboutItemsLength = aboutItems.length;
    const aboutItemDuration = 4000;

    useInterval(() => {
        crankHandle('right');
        shiftTubeItemsAnimation();
    }, aboutItemDuration); 

    const crankHandle = (side: string) => {
        if (side === 'left') {
            const handle = document.getElementById('left-handle');
            handle?.classList.add('leftCrank');

            setTimeout(() => {
                handle?.classList.remove('leftCrank');
            }, 1000);
        }
        else if (side === 'right') {
            const handle = document.getElementById('right-handle');
            handle?.classList.add('rightCrank');

            setTimeout(() => {
                handle?.classList.remove('rightCrank');
            }, 1000);
        }
    }

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

    const shiftTubeItemsAnimation = () => {
        const tubeItem1 = document.getElementById('tube-item-1');
        const tubeItem2 = document.getElementById('tube-item-2');
        const tubeItem3 = document.getElementById('selected-about-item');
        const tubeItem4 = document.getElementById('tube-item-4');
        const tubeItem5 = document.getElementById('tube-item-5');

        tubeItem3?.classList.remove('itemSelectedIndicator');
        
        tubeItem1?.classList.add('shiftTube');
        tubeItem2?.classList.add('shiftTube');
        tubeItem3?.classList.add('shiftTubeSelected');
        tubeItem4?.classList.add('shiftTube');
        tubeItem5?.classList.add('shiftTube');

        setTimeout(() => {
            tubeItem3?.classList.add('itemSelectedIndicator');

            tubeItem1?.classList.remove('shiftTube');
            tubeItem2?.classList.remove('shiftTube');
            tubeItem3?.classList.remove('shiftTubeSelected');
            tubeItem4?.classList.remove('shiftTube');
            tubeItem5?.classList.remove('shiftTube');
        }, 1000)
    }

    return (
        <div className="aboutCarousel">
            <div 
                className='handleContainer leftHandle' 
                id='left-handle' 
                onClick={() => {
                    crankHandle('left'); 
                    shiftLeftPressed();
                    shiftTubeItemsAnimation();
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
                        id='tube-item-1'
                    />
                    <img
                        src={aboutItems[getIndex(1)].carouselImage} 
                        className='tubeItem' 
                        alt={aboutItems[getIndex(1)].identifier}
                        id='tube-item-2'
                    />
                    <img
                        id='selected-about-item'
                        src={aboutItems[currIndex].carouselImage}
                        className='tubeItem itemSelectedIndicator'
                        alt={aboutItems[currIndex].identifier}
                    />
                    <img
                        src={aboutItems[getIndex(-1)].carouselImage} 
                        className='tubeItem' 
                        alt={aboutItems[getIndex(-1)].identifier}
                        id='tube-item-4'
                    />
                    <img
                        src={aboutItems[getIndex(-2)].carouselImage} 
                        className='tubeItem' 
                        alt={aboutItems[getIndex(-2)].identifier}
                        id='tube-item-5'
                    />
                </div>
                <div className='tubeSide tubeSideLeft'/>
            </div>
            <div 
                className='handleContainer rightHandle' 
                id='right-handle' 
                onClick={() => {
                    crankHandle('right'); 
                    shiftRightPressed();
                    shiftTubeItemsAnimation();
                }}
            >
                <div className='handleBall'/>
                <div className='handle'/>
            </div>
        </div>
    );
}

export default AboutCarousel;
