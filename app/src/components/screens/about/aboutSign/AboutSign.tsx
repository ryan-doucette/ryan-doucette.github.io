import React, { useEffect } from 'react';
import './_aboutSign.scss';
import aboutItems from '../AboutData';
import heart from '../images/about-heart-image.png';

const AboutSign = ({currIndex} : {currIndex: number}) => {
  useEffect(() => {
      const textArea1 = document.getElementById('about-text-start');
      const textArea2 = document.getElementById('about-text-label');
      const heartIcon = document.getElementById('about-heart');
      const aboutSignContent = document.getElementById('about-sign-content');

      textArea1!.textContent = '';
      textArea1!.setAttribute('data-text', '');
      textArea2!.textContent = '';
      textArea2!.setAttribute('data-text', '');
      heartIcon!.style.display = 'none';

      setTimeout(() => {
        textArea1!.textContent = '.';
      }, 150);
      setTimeout(() => {
        textArea1!.textContent = '. .';
      }, 300);
      setTimeout(() => {
        textArea1!.textContent = '. . .';
      }, 450);
      setTimeout(() => {
        textArea1!.textContent = '';
        aboutSignContent!.style.transform = 'scaleY(0)';
      }, 600)
      setTimeout(() => {
        aboutSignContent!.style.transform = 'scaleY(1)';
        textArea1!.textContent = 'I';
        textArea1!.setAttribute('data-text', 'I');
        textArea2!.textContent = aboutItems[currIndex].iLoveLabel;
        textArea2!.setAttribute('data-text', aboutItems[currIndex].iLoveLabel);
        heartIcon!.style.display = 'block';
      }, 750);
  }, [currIndex]);

  return (
    <div className="aboutSign">
      <div className='aboutSignContent' id='about-sign-content'>
        <div className='aboutSignText' id='about-text-start'></div>
        <img src={heart} alt='heart' id='about-heart' className='aboutHeartImg'/>
        <div className='aboutSignText' id='about-text-label'>
        </div>
      </div>
    </div>
  );
}

export default AboutSign;
