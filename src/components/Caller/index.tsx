import React, { useCallback, useEffect } from "react";
import { CiLinkedin } from "react-icons/Ci";
import { FaGithub } from "react-icons/Fa";
import Typed from "typed.js";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

const Caller: React.FC = () => {
  let index = 1;

  const words = [
    "ReactJS",
    "HTML",
    "Styled Components",
    "NodeJS",
    "SCSS",
    "WordPress",
    "Typescript",
  ];

  const { t } = useTranslation();

  const roller = useCallback(() => {
    const roller = document.querySelector("#roller");
    if (roller) {
      let indexMax = roller.children.length;
      if (index == indexMax) {
        index = 0;
      } else {
        roller.setAttribute("style", `transform:translateY(-${22 * index}px);`);
        [...roller.children].forEach((child) => {
          child.classList.remove("selected");
        });
        roller.children[index].classList.add("selected");
        index++;
      }
    }
  }, []);

  useEffect(() => {
    var options = {
      strings: words,
      typeSpeed: 120,
      backSpeed: 150,
      backDelay: 1400,
      loop: true,
    };

    new Typed("#typer", options);
    setInterval(roller, 3000);
  }, []);

  return (
    <S.Caller>
      <S.Subtitle>
        <span id="typer"></span>
      </S.Subtitle>
      <S.Title>
        {t("caller.hello")} <span>(Ra)</span>fael
      </S.Title>
      <S.UnderTitle>
        <span>{t("caller.a_developer")}</span>
        <div id="roller">
          <p className="selected">{t("caller.roller.frontend")} 💻</p>
          <p>{t("caller.roller.gamer")} 🎮</p>
          <p>{t("caller.roller.pet_father")} 🐈</p>
          <p>{t("caller.roller.chef")} 👨‍🍳</p>
          <p>{t("caller.roller.ecletic")} 🎶</p>
        </div>
      </S.UnderTitle>
      <S.CTA>
        <S.LinkedIn
          href="https://www.linkedin.com.br/in/rafaelneukirchen"
          target={"_blank"}
        >
          <CiLinkedin size={24} /> <span>LinkedIn</span>
        </S.LinkedIn>
        <S.Github href="https://github.com/rafaelneukirchen" target={"_blank"}>
          <FaGithub size={24} /> <span>GitHub</span>
        </S.Github>
      </S.CTA>
    </S.Caller>
  );
};

export default Caller;
