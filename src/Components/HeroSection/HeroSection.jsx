import React, { useState, useEffect } from 'react';
import './herosection.css';
import hero from "../../img/hero.jpg";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const introText = "Hi! I'm Eldar and I'm ";
  const phrasesToType = ["Junior Frontend Developer", "Quick Learner", "not afraid of something new"];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrasesToType[phraseIndex];
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < currentPhrase.length) {
        setDisplayText(prevText => introText + currentPhrase.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText(introText);
          setPhraseIndex(prevIndex => (prevIndex + 1) % phrasesToType.length);
        }, 2000);
      }
    }, 125);

    return () => clearInterval(typingInterval);
  }, [phraseIndex]);

  return (
    <section className="hero__container">
        <div className='hero__text-container'>
      <h2 className="hero__title">Welcome to my Portfolio</h2>
      <h3 className="hero__sub-title">{displayText}</h3>
      <p className="hero__description">
        I think the background of a person is very important, but a lot of text is also considered as "not good". I'm a former businessman, but now I decided to change my life dramatically and I'm passionate about possessing new information about frontend development and IT sphere in general
      </p>
      </div>
      <img className="hero__image" src={hero} alt={"coffee with keyboard"} width="600" height="461"/>
    </section>
  );
};

export default HeroSection;
