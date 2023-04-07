import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { menuOptions } from "../allLinks";
import * as S from "./styles";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const SmoothScroll = useCallback((link: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    if (link === "chess") {
      navigate("/chess");
    }

    setTimeout(() => {
      let elementYpos = document
        .querySelector(`#${link}`)!
        .getBoundingClientRect();

      window.scrollTo({
        top: window.scrollY + elementYpos.top - 100,
        behavior: "smooth",
      });
    }, 300);
  }, []);

  const Links = useMemo(() => {
    return (
      <S.Links>
        {menuOptions.map((option, index) => {
          return (
            <React.Fragment key={index}>
              <S.Link onClick={() => SmoothScroll(option.link)}>
                <span>{option.title}</span>
              </S.Link>
            </React.Fragment>
          );
        })}
      </S.Links>
    );
  }, []);

  return (
    <S.Footer>
      <S.Logo>
        <img src="./faellodev.webp" alt={`Logo Faello.dev`}></img>
      </S.Logo>
      <S.Wrapper>
        <S.Links>{Links}</S.Links>
        <S.Technologies>
          <h3>Feito com amor</h3>
          <p>Typescript - ReactJS - Styled Components</p>
        </S.Technologies>
      </S.Wrapper>
      <S.SocialMedia></S.SocialMedia>
    </S.Footer>
  );
};

export default Footer;
