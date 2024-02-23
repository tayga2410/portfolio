import { useTranslation } from "react-i18next";
import "./footer.css";
import linkedIn from "../../img/linkedin.svg";
import github from "../../img/github.svg";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer__container">
        <span className="footer__copyright">&copy; {t("Coded")}</span>
        <ul>
          <li>
            <a className="footer__link" href="#">
              {t("Home")}
            </a>
          </li>
          <li>
            <a className="footer__link" href="#about">
              {t("About")}
            </a>
          </li>
          <li>
            <a className="footer__link" href="#skills">
              {t("Skills")}
            </a>
          </li>
          <li>
            <a className="footer__link" href="#portfolio">
              {t("Portfolio")}
            </a>
          </li>
        </ul>
        <div className="footer__socials">
          <a
            className="footer__logo-link"
            href="https://www.linkedin.com/in/eldar-moldazhanov-2a142928a/"
            target="_blank"
          >
            <img
              src={linkedIn}
              alt={"linked in logo."}
              width="40"
              height="40"
            />
          </a>
          <a
            className="footer__logo-link"
            href="https://github.com/tayga2410"
            target="_blank"
          >
            <img src={github} alt={"linked in logo."} width="40" height="40" />
          </a>
        </div>
      </div>
    </footer>
  );
}
