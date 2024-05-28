import React, { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { menuOptions } from "../allLinks";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import * as S from "./styles";
import isMobile from "../../hooks/useMobile";
import { SiStyledcomponents, SiTypescript } from "react-icons/Si";
import { FaReact } from "react-icons/Fa";
import { useTranslation } from "react-i18next";
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from "react-icons/Ci";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const SmoothScroll = useCallback((link: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
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
              <S.Link
                className={
                  option.title.toLowerCase() === "chess" && isMobile()
                    ? "hidden"
                    : ""
                }
                onClick={() => SmoothScroll(option.link)}
              >
                <span>{option.title}</span>
              </S.Link>
            </React.Fragment>
          );
        })}
      </S.Links>
    );
  }, []);

  useEffect(() => {
    tippy("#maestria", {
      allowHTML: true,
      content: "<img src='./maestria.png' height='50' />",
    });
    tippy("#typescript", {
      content: "Typescript",
    });
    tippy("#react", {
      content: "React",
    });
    tippy("#styled", {
      content: "Styled Components",
    });
    tippy("#profissional", {
      content: `Instagram - ${t("footer.professional")}`,
    });
    tippy("#pessoal", {
      content: `Instagram - ${t("footer.individual")}`,
    });
  }, []);

  return (
    <S.Footer>
      <S.Logo>
        {/* <img src="./faellodev.webp" alt={`Logo Faello.dev`}></img> */}
      </S.Logo>
      <S.Wrapper>
        <S.Links>{Links}</S.Links>
        <S.Technologies>
          <h3>
            {t("footer.made_with")}{" "}
            <span style={{ textDecoration: "underline" }} id="maestria">
              {t("footer.mastery")}
            </span>
          </h3>
          <p>
            <SiTypescript id="typescript" size={16} />
            <SiStyledcomponents id="styled" size={32} />
            <FaReact size={16} id="react" />
          </p>
        </S.Technologies>
      </S.Wrapper>
      <S.SocialMedia>
        <h3>{t("footer.socials")}</h3>
        <a
          title="Instagram pessoal de Rafael Neukirchen"
          target="_blank"
          id="pessoal"
          href="https://www.instagram.com/fael_lo/"
        >
          <CiInstagram size={24} color="#BFD8BD" />
        </a>
        <a
          title="LinkedIn de Rafael Neukirchen"
          target="_blank"
          href="https://www.linkedin.com/in/rafaelneukirchen/"
        >
          <CiLinkedin size={24} color="#BFD8BD" />
        </a>
        <a
          title="Youtube de Rafael Neukirchen"
          target="_blank"
          href="https://www.youtube.com/channel/UCciziZqFv7EwX9N51PtMcmg"
        >
          <CiYoutube size={24} color="#BFD8BD" />
        </a>
        <a
          title="Facebook de Rafael Neukirchen"
          target="_blank"
          href="https://www.facebook.com/rafael.neukirchen.5/"
        >
          <CiFacebook size={24} color="#BFD8BD" />
        </a>
        <a
          title="Instagram profissional de Rafael Neukirchen"
          target="_blank"
          id="profissional"
          href="https://www.instagram.com/faello.dev/"
        >
          <CiInstagram size={24} color="#BFD8BD" />
        </a>
      </S.SocialMedia>
    </S.Footer>
  );
};

export default Footer;
