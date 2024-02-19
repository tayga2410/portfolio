import React, { useState, useEffect } from "react";
import "./herosection.css";
import hero from "../../img/hero.png";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();
  const [displayText, setDisplayText] = useState("");
  const introText = "Hi! I'm Eldar and I'm ";
  const phrasesToType = [
    "Junior Frontend Developer",
    "Quick Learner",
    "not afraid of something new",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrasesToType[phraseIndex];
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < currentPhrase.length) {
        setDisplayText(
          (prevText) => introText + currentPhrase.substring(0, index + 1)
        );
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText(introText);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrasesToType.length);
        }, 2000);
      }
    }, 125);

    return () => clearInterval(typingInterval);
  }, [phraseIndex]);

  return (
    <section className="hero__container">
      <div className="hero__text-container">
        <h2 className="hero__title">{t("welcome")}</h2>
        <h3 className="hero__sub-title">{displayText}</h3>
        <p className="hero__description">{t("hero-description")}</p>
      </div>
      <img
        className="hero__image"
        src={hero}
        alt={"Kazakhstan flag"}
        width="600"
        height="461"
      />
    </section>
  );
};

export default HeroSection;
