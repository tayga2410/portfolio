import "./form.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";
import classess from '../Button/Button.module.css';

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ka5xeva", "template_qcft3ei", form.current, {
        publicKey: "xh0KIET6KS1g-T-MY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail} autoComplete="off">
      <label className="form__label">Your Name
      <input className="form__input" type="text" name="user_name" />
      </label>
      <label  className="form__label">Your Email
      <input className="form__input" type="email" name="user_email" />
      </label>
      <label className="form__label">Your Message
      <textarea className="form__textarea" name="message" />
      </label>
      <Button className={classess.formButton} type="submit" value="Send">Submit</Button>
    </form>
  );
}
