import "./header.css";
import Button from "../Button/Button";
import linkedIn from "../../img/linkedin.svg";

export default function Header() {
  return (
    <section className="header_container">
        <div className="header_text-wrapper">
      <h2 className="header_heading">Eldar Moldazhanov</h2>
      <p className="header_description">practice makes perfect</p>
      </div>
      <ul>
        <li>
          <a className="header_link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="header_link" href="#">
            About Me
          </a>
        </li>
        <li>
          <a className="header_link" href="#">
           Portfolio
          </a>
        </li>
      </ul>
      <div className="header_group">
        <a
          className="header_logo-link"
          href="https://www.linkedin.com/in/eldar-moldazhanov-2a142928a/"
          target="_blank"
        >
          <img src={linkedIn} alt={"result"} width="40" height="40" />
        </a>
        <Button>Contact Me</Button>
      </div>
    </section>
  );
}
