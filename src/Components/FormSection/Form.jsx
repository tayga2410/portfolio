import "./form.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";
import classess from '../Button/Button.module.css';
import { useTranslation } from "react-i18next";

export default function Form() {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!userName || !message || ! email) {
      setIsFormError(true);
      setIsFormSubmitted(false);
      return;
    }


    emailjs
      .sendForm("service_ka5xeva", "template_qcft3ei", form.current, {
        publicKey: "xh0KIET6KS1g-T-MY",
      })
      .then(
        () => {
          setIsFormSubmitted(true);
          setIsFormError(false);
          form.current.reset();
        },
        (error) => {
          setIsFormSubmitted(false);
          setIsFormError(true);
          form.current.reset();
        }
      );
  };

  return (
    <div>
    <form className="form" ref={form} onSubmit={sendEmail} autoComplete="off" id="#form">
      <label className="form__label">{t("Your Name")} 
      <input className="form__input" type="text" name="user_name" />
      </label>
      <label  className="form__label">{t("Your Email")} 
      <input className="form__input" type="email" name="user_email" />
      </label>
      <label className="form__label">{t("Your Message")} 
      <textarea className="form__textarea" name="message" />
      </label>
      <Button className={classess.formButton} type="submit" value="Send">{t("Submit")}</Button>
    </form>
     {isFormSubmitted && <p className="form__message">{t("Thank you for your message!")}</p>}
     {isFormError && <p className="form__message">{t("Please, make sure all fields are filled")}</p>}
     </div>
  );
}
