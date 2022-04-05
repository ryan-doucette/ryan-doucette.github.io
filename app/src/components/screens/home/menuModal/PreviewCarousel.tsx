// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import Preview from './Preview';
import './styles/_previewCarousel.scss';
import useInterval from '../../../../customHooks/UseInterval';
import {previewItem} from 'customTypes';
import previewItems from './PreviewData';

const PreviewCarousel = ({menuRevealed} : {menuRevealed:boolean|undefined}) => {

    const [currOption, setCurrOption] = useState(previewItems[0]);
    const [currTab, setCurrTab] = useState(previewItems[0]);
    const [previewTransitioning, setPreviewTransitioning] = useState(false);
    // duration is (previewDuration / 1000 seconds)
    const previewDuration: number = 7000;

    useEffect(() => {
        if(menuRevealed) {
            setCurrOption(previewItems[0]);
            setCurrTab(previewItems[0]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuRevealed]);

    const toggleSection = (selectedCategory: previewItem) => {
        setPreviewTransitioning(true);
        setCurrTab(selectedCategory);
        // wait till half animation is done
        setTimeout(() => {
            setCurrOption(selectedCategory);
        }, 250);
        // wait till full animation is done
        setTimeout(() => {
            setPreviewTransitioning(false);
        }, 500);    
    }

    const autoScrollOptions = () => {
        let currIndex: number;
        // This is a bit hacky.. using a custom type did not allow me to use indexOf as expected
        previewItems.forEach((item) => {
            if (item.identifier === currOption.identifier) {
                currIndex = previewItems.indexOf(item);                
                const nextIndex: number = currIndex === previewItems.length - 1 ? 0 : currIndex + 1;
                toggleSection(previewItems[nextIndex]);
            }
        })
    };

    useInterval(() => {
        autoScrollOptions();
    }, previewDuration); 

    return (
        <div className="previewCarousel">
            <div className='previewContainer' id={previewTransitioning ? 'preview-transitioning' : undefined}>
                <Preview currentItem={currOption}/>
            </div>
            <section className='toggleSection'>
                { previewItems.map((item) => (
                    <div 
                        key={item.identifier}
                        className='optionContainer'
                        onClick={() => previewTransitioning ? null : toggleSection(item)}
                    >
                        <div 
                            key={item.identifier} 
                            className='option'
                            id = {currTab.identifier === item.identifier ? 'selected' : undefined}
                        />
                    </div>
                )) }
            </section>
        </div>
    );
}

export default PreviewCarousel;
