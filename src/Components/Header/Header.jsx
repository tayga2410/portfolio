import "./header.css";
import Button from "../Button/Button";
import linkedIn from "../../img/linkedin.svg";
import LanguageSelector from "../LanguageSelector/LanguageSelector"
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
    <section className="header__container">
        <div className="header__text-wrapper">
      <h2 className="header__heading">{t('name')}</h2>
      <p className="header__description">{t('slogan')}</p>
      </div>
      <ul>
        <li>
          <a className="header__link" href="#">
            {t('Home')}
          </a>
        </li>
        <li>
          <a className="header__link" href="#">
          {t('About')}
          </a>
        </li>
        <li>
          <a className="header__link" href="#">
          {t('Skills')}
          </a>
        </li>
        <li>
          <a className="header__link" href="#">
          {t('Portfolio')}
          </a>
        </li>
      </ul>
      <div className="header__group">
        <LanguageSelector />
        <a
          className="header__logo-link"
          href="https://www.linkedin.com/in/eldar-moldazhanov-2a142928a/"
          target="_blank"
        >
          <img src={linkedIn} alt={"linked in logo."} width="40" height="40" />
        </a>
        <Button>{t('HeaderButtonContact')}</Button>
      </div>
    </section>
  );
}
