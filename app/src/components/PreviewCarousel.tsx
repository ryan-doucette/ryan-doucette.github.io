// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import Preview from './Preview';
import './styles/_previewCarousel.scss';
import useInterval from './UseInterval';
import category from 'customTypes';
import categories from './PreviewData';

const PreviewCarousel = ({menuRevealed} : {menuRevealed:boolean|undefined}) => {

    const [currOption, setCurrOption] = useState(categories[0])

    useEffect(() => {
        if(menuRevealed) {
            setCurrOption(categories[0]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuRevealed]);

    useEffect(() => {

    });

    const toggleSection = (selectedCategory: category) => {
        setCurrOption(selectedCategory);
    }

    const autoScrollOptions = () => {
        let currIndex: number;
        // This is a bit hacky.. using a custom type did not allow me to use indexOf as expected
        categories.forEach((category) => {
            if (category.identifier === currOption.identifier) {
                currIndex = categories.indexOf(category);                
                const nextIndex: number = currIndex === categories.length - 1 ? 0 : currIndex + 1;
                setCurrOption(categories[nextIndex]);
            }
        })
    };

    useInterval(() => {
        autoScrollOptions();
    }, 7500); 

    return (
        <div className="previewCarousel">
            <Preview currentCategory={currOption}/>
            <section className='toggleSection'>
                { categories.map((category) => (
             
                    <div 
                        key={category.identifier} 
                        className='option'
                        id = {currOption.identifier === category.identifier ? 'selected' : undefined}
                        onClick={() => toggleSection(category)}
                    />
                )) }
            </section>
        </div>
    );
}

export default PreviewCarousel;
