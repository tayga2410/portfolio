import React, { useState, useEffect } from "react";
import "./herosection.css";
import hero from "../../img/hero.png";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [displayText, setDisplayText] = useState("");
  const introText = t("introText");
  const phrasesToType = t("phrasesToType", { returnObjects: true });

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
    <section className="hero__container" id="about">
      <div className="hero__text-container">
        <h2 className="hero__title">{t("welcome")}</h2>
        <h3 className="hero__sub-title">{displayText}</h3>
        <p className="hero__description">{t("hero-description")}</p>
      </div>
      <div className="hero__image-container">
      <img
        className="hero__image"
        src={hero}
        alt={"Kazakhstan flag"}
        width=""
        height=""
      />
      </div>
    </section>
  );
};

export default HeroSection;
