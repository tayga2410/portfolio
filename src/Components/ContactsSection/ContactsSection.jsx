import Form from "../FormSection/Form";
import './contactsSection.css'
import gmail from '../../img/gmail.png';
import discord from '../../img/discord.png';
import github from '../../img/github.svg';
import dividerdesktop from '../../img/kz-decor.png';
import dividertablet from '../../img/kz-decor-tablet.png';
import { useTranslation } from "react-i18next";

export default function ContactsSection() {
    const {t} = useTranslation();

  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__title">{t("Contacts")}</h2>
      <div className="contacts__wrapper">
        <div className="contacts__container">
          <p className="contacts__description">{t("contactme")}
          </p>
          <div className="contacts__text-wrapper">
            <img src={gmail} alt="" width="34" height="34"/>
            <a className="contacts__link" href="mailto:moldazhanov.eldar@gmail.com">
              <span className="contacts__text-link">
                moldazhanov.eldar@gmail.com
              </span>
            </a>
          </div>
          <div className="contacts__text-wrapper">
            <img src={discord} alt="" width="34" height="34" />
            <a className="contacts__link" href="https://discord.com/users/tayga_dev">
              <span className="contacts__text-link">tayga_dev</span>
            </a>
          </div>
          <div className="contacts__text-wrapper">
            <img src={github} alt="" width="34" height="34"/>
            <a className="contacts__link" href="https://github.com/tayga2410" target="_blank">
              <span className="contacts__text-link">
                tayga2410
              </span>
            </a>
          </div>
        </div>
        <picture>
        <source media="(max-width: 1439px)" srcSet={dividertablet} />
        <img className="contacts__divider" src={dividerdesktop} alt="" width="177" height="371" />
        </picture>
        <Form />
      </div>
    </section>
  );
}
