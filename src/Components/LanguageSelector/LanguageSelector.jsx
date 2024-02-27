import React from "react";
import { useTranslation } from "react-i18next";
import "./language-selector.css";
import ruflag from "../../img/ru-logo.svg";
import ukflag from "../../img/uk-logo.svg";

function LanguageSelector({ closeMenu }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLanguageChange = (lng) => (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      changeLanguage(lng);
      closeMenu(); 
    }
  };

  return (
    <div className="language-selector__container">
      <span
        className="language-selector__icon"
        onClick={() => changeLanguage("en")}
        onKeyDown={handleLanguageChange("en")}
        tabIndex={0} 
      >
        <img src={ukflag} alt={"United Kingdom flag"} width="40" height="30" />
      </span>
      <span
        className="language-selector__icon"
        onClick={() => changeLanguage("ru")}
        onKeyDown={handleLanguageChange("ru")}
        tabIndex={0} 
      >
        <img src={ruflag} alt={"Russian Federation flag"} width="40" height="30" />
      </span>
    </div>
  );
}

export default LanguageSelector;
