import Form from "../FormSection/Form";
import './contactsSection.css'
import gmail from '../../img/gmail.png';
import discord from '../../img/discord.png';

export default function ContactsSection() {
  return (
    <section className="contacts">
      <h2 className="contacts__title"></h2>
      <div className="contacts__wrapper">
        <div className="contacts__container">
          <p className="contacts__description">
            Want to hire me? or just have a bit of conversation? Just fill out
            small form to contact! Drop me a line and I'll answer ASAP
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
        </div>
        <Form />
      </div>
    </section>
  );
}
