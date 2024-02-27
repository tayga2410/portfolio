import React, { useState, useEffect } from "react";
import "./header.css";
import Button from "../Button/Button";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
import burgerIcon from "../../img/burger-menu.png";
import closemenu from "../../img/close-menu.png";

export default function Header() {
  const { t } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="header">
      <div
        className={`header__container ${isMenuOpen ? "open" : ""} ${
          visible ? "" : "header__container--hidden"
        }`}
      >
        <div className="burger-menu" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? closemenu : burgerIcon}
            alt="Menu Icon"
            className={`burger-icon ${isMenuOpen ? "open" : ""}`}
            width="40"
            height="40"
          />
          <h4 className="header__burger-menu-title">{t("menu")}</h4>
        </div>
        <div className={`header__content ${isMenuOpen ? "open" : ""}`}>
          <div className="header__text-wrapper">
            <h2 className="header__heading">{t("name")}</h2>
            <p className="header__description">{t("slogan")}</p>
          </div>
          <ul className="header__list">
            <li>
              <a className="header__link" href="#" onClick={closeMenu}>
                {t("Home")}
              </a>
            </li>
            <li>
              <a className="header__link" href="#about" onClick={closeMenu}>
                {t("About")}
              </a>
            </li>
            <li>
              <a className="header__link" href="#skills" onClick={closeMenu}>
                {t("Skills")}
              </a>
            </li>
            <li>
              <a className="header__link" href="#portfolio" onClick={closeMenu}>
                {t("Portfolio")}
              </a>
            </li>
          </ul>
          <div className="header__group">
          <LanguageSelector closeMenu={closeMenu} />
            <a href="#contacts">
              <Button onClick={closeMenu}>{t("HeaderButtonContact")}</Button>
            </a>
          </div>
        </div>
      </div>
      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
    </section>
  );
}
