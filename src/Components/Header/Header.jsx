import React, { useState, useEffect } from 'react';
import './header.css';
import Button from '../Button/Button';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import burgerIcon from '../../img/burger-menu.png'; 

export default function Header() {
  const { t } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showBurgerMenu, setShowBurgerMenu] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const handleResize = () => {
      setShowBurgerMenu(window.innerWidth < 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <section className={`header ${showBurgerMenu ? 'header--is-closed' : ''}`}>
      <div className={`header__container ${visible ? '' : 'header__container--hidden'}`}>
        <img
          src={burgerIcon} 
          alt="Burger Menu" 
          className="header__burger-menu"
          onClick={() => setShowBurgerMenu(!showBurgerMenu)}
        />
        <div className={`header__text-wrapper ${showBurgerMenu ? 'header__text-wrapper--hidden' : ''}`}>
          <h2 className="header__heading">{t('name')}</h2>
          <p className="header__description">{t('slogan')}</p>
        </div>
        <ul className={`header__menu ${showBurgerMenu ? 'header__menu--hidden' : ''}`}>
          <li>
            <a className="header__link" href="#">
              {t('Home')}
            </a>
          </li>
          <li>
            <a className="header__link" href="#about">
              {t('About')}
            </a>
          </li>
          <li>
            <a className="header__link" href="#skills">
              {t('Skills')}
            </a>
          </li>
          <li>
            <a className="header__link" href="#portfolio">
              {t('Portfolio')}
            </a>
          </li>
        </ul>
        <div className={`header__group ${showBurgerMenu ? 'header__group--hidden' : ''}`}>
          <LanguageSelector />
          <a href="#contacts">
            <Button>{t('HeaderButtonContact')}</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
