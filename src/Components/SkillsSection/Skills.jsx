import Button from "../Button/Button";
import { useState } from "react";
import "./skills.css";
import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import react from "../../img/react.png";
import npm from "../../img/npm.svg";
import node from "../../img/nodejs.svg";
import git from "../../img/github.svg";
import vite from "../../img/vite.svg";
import { useTranslation } from "react-i18next";

export default function SkillsSection(active, onChange) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const { t } = useTranslation();

  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">{t("Skills")}</h2>
      <div className="skills__container">
        <div className="skills__header">
          <button
            onClick={() => handleTabClick(0)}
            className={activeTab === 0 ? "active" : ""}
          >
            <img src={html} alt="html5 icon"></img>
          </button>
          <button
            onClick={() => handleTabClick(1)}
            className={activeTab === 1 ? "active" : ""}
          >
            <img src={css} alt="css3 icon"></img>
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={activeTab === 2 ? "active" : ""}
          >
            <img src={js} alt="javascript icon"></img>
          </button>
          <button
            onClick={() => handleTabClick(3)}
            className={activeTab === 3 ? "active" : ""}
          >
            <img src={react} alt="react icon"></img>
          </button>
        </div>
        <div className="skills__content">
          {activeTab === 0 && (
            <div>
              <ul className="skills__list">
                <li className="skills__item">{t("semantic")}</li>
                <li className="skills__item">{t("adaptive")}</li>
                <li className="skills__item">{t("BEM")}</li>
              </ul>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <ul className="skills__list">
                <li className="skills__item">Sass</li>
                <li className="skills__item">Tailwind</li>
                <li className="skills__item">Flexbox, grid</li>
              </ul>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <ul className="skills__list">
                <li className="skills__item">{t("libintegration")}</li>
                <li className="skills__item">{t("libexample")}</li>
              </ul>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <ul className="skills__list">
                <li className="skills__item">{t("compsep")}</li>
                <li className="skills__item">Styled Components</li>
                <li className="skills__item">{t("multilang")}</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <h3 className="skills__sub-title">{t("exp")}</h3>
          <ul className="skills__sub-list">
            <li className="skills__sub-item">
              <img src={npm} alt="npm"></img>
            </li>
            <li className="skills__sub-item">
              <img src={node} alt="node.js"></img>
            </li>
            <li className="skills__sub-item">
              <img src={git} alt="github"></img>
            </li>
            <li className="skills__sub-item">
              <img src={vite} alt="vite"></img>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
