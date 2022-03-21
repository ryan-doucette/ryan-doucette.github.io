// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import Preview from './Preview';
import './styles/_previewCarousel.scss';
import useInterval from './UseInterval';
import category from 'customTypes';
import categories from './PreviewData';

const PreviewCarousel = ({menuRevealed} : {menuRevealed:boolean|undefined}) => {

    const [currOption, setCurrOption] = useState(categories[0]);
    const [currTab, setCurrTab] = useState(categories[0]);
    const [previewTransitioning, setPreviewTransitioning] = useState(false);
    // duration is previewDuration / 1000 seconds
    const previewDuration: number = 7000;

    useEffect(() => {
        if(menuRevealed) {
            setCurrOption(categories[0]);
            setCurrTab(categories[0]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuRevealed]);

    const toggleSection = (selectedCategory: category) => {
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
        categories.forEach((category) => {
            if (category.identifier === currOption.identifier) {
                currIndex = categories.indexOf(category);                
                const nextIndex: number = currIndex === categories.length - 1 ? 0 : currIndex + 1;
                toggleSection(categories[nextIndex]);
            }
        })
    };

    useInterval(() => {
        autoScrollOptions();
    }, previewDuration); 

    return (
        <div className="previewCarousel">
            <div className='previewContainer' id={previewTransitioning ? 'preview-transitioning' : undefined}>
                <Preview currentCategory={currOption}/>
            </div>
            <section className='toggleSection'>
                { categories.map((category) => (
                    <div 
                        className='optionContainer'
                        onClick={() => previewTransitioning ? null :  toggleSection(category)}
                    >
                        <div 
                            key={category.identifier} 
                            className='option'
                            id = {currTab.identifier === category.identifier ? 'selected' : undefined}
                        />
                    </div>
                )) }
            </section>
        </div>
    );
}

export default PreviewCarousel;
