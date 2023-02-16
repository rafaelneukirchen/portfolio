import React, { useCallback, useEffect, useRef } from "react";
import Typed from "typed.js";
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
        Olá, sou o <span>(Ra)</span>fael
      </S.Title>
      <S.UnderTitle>
        <span>Um desenvolvedor</span>
        <div id="roller">
          <p className="selected">gamer 🎮</p>
          <p>frontend pleno 💻</p>
          <p>pai de pets 🐈</p>
          <p>cozinheiro 👨‍🍳</p>
          <p>eclético 🎶</p>
        </div>
      </S.UnderTitle>
    </S.Caller>
  );
};

export default Caller;
