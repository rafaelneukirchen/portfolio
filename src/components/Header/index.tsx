import React, {
  useCallback,
  useState,
  useMemo,
  useEffect,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from "react-icons/Ci";
import { RiSuitcaseLine, RiArrowRightLine } from "react-icons/Ri";
import { FiMail } from "react-icons/fi";
import { AiOutlineArrowUp, AiOutlineUser } from "react-icons/ai";
import { MdLanguage, MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosMegaphone } from "react-icons/io";
import isMobile from "../../hooks/useMobile";
import * as S from "./styles";
import { FaChessBoard } from "react-icons/Fa";
import { menuOptions } from "../allLinks";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Header: React.FC = () => {
  const [isClosed, setClosed] = useState(true);
  const navigate = useNavigate();
  const [scrollTopVisible, setScrolltopVisible] = useState(false);
  const [lang, setLang] = useState(
    localStorage.getItem("i18nextLng") || "pt-BR"
  );
  const selectRef = useRef<HTMLSelectElement>(null);

  const { t } = useTranslation();

  const goTop = useCallback(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const toggleMenu = useCallback(() => {
    setClosed((isActive) => !isActive);
  }, [isClosed]);

  const SmoothScroll = useCallback(
    (link: string) => {
      if (window.location.pathname !== "/") {
        navigate("/");
      }

      setClosed(true);
      setTimeout(() => {
        let elementYpos = document
          .querySelector(`#${link}`)!
          .getBoundingClientRect();
        if (isMobile()) {
          window.scrollTo({
            top: window.scrollY + elementYpos.top,
            behavior: "smooth",
          });
          return;
        }
        window.scrollTo({
          top: window.scrollY + elementYpos.top - 100,
          behavior: "smooth",
        });
      }, 300);
    },
    [setClosed]
  );

  useEffect(() => {
    if (isMobile()) return;
    const scrollProgress = document.getElementById("scroll-progress");
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    window.addEventListener("scroll", () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      scrollProgress!.style.width = `${(scrollTop / height) * 100}%`;
    });

    window.addEventListener("scroll", () => {
      document.body.scrollTop > 120 || document.documentElement.scrollTop > 120
        ? setScrolltopVisible(true)
        : setScrolltopVisible(false);
    });

    //mobile
    window.addEventListener("touchmove", () => {
      document.body.scrollTop > 120 || document.documentElement.scrollTop > 120
        ? setScrolltopVisible(true)
        : setScrolltopVisible(false);
    });
  }, [window, document, selectRef, lang]);

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
                <RiArrowRightLine className="arrow" color="#BFD8BD" size={22} />
                {option.image == "mala" && (
                  <RiSuitcaseLine color="#BFD8BD" size={24} />
                )}
                {option.image == "livro" && (
                  <MdOutlineLibraryBooks color="#BFD8BD" size={24} />
                )}
                {option.image == "personagem" && (
                  <AiOutlineUser color="#BFD8BD" size={24} />
                )}
                {option.image == "email" && (
                  <FiMail color="#BFD8BD" size={24} />
                )}
                {option.image == "chamado" && (
                  <IoIosMegaphone color="#BFD8BD" size={24} />
                )}
                {option.image == "tabuleiro" && (
                  <FaChessBoard color="#BFD8BD" size={24} />
                )}
                <span>{option.title}</span>
              </S.Link>
            </React.Fragment>
          );
        })}
        <S.Link>
          <MdLanguage color="#BFD8BD" size={24} />
          <S.Dropdown
            ref={selectRef}
            value={lang}
            onChange={(e) => {
              setLang(e.currentTarget.value);
              localStorage.setItem("i18nextLng", e.currentTarget.value);
              i18n.changeLanguage(e.currentTarget.value);
              window.location.reload();
            }}
          >
            <option id="en-US" value="en-US">
              English
            </option>
            <option id="pt-BR" value="pt-BR">
              Português
            </option>
          </S.Dropdown>
        </S.Link>
      </S.Links>
    );
  }, [lang]);

  return (
    <header>
      {isMobile() && (
        <S.Background open={isClosed}>
          <S.Nav open={isClosed} onClick={() => toggleMenu()}>
            <S.Line></S.Line>
            <S.Line></S.Line>
            <S.Line></S.Line>
          </S.Nav>
          <S.Body>
            {/* <a href={window.location.host}>
              <img src="./logo.png" alt="Imagem da logo" />
            </a> */}
            {Links}
            <S.Socials>
              <div>
                <p>{t("header.socials")}</p>
              </div>
              <S.SocialWrapper>
                <a target="_blank" href="https://www.instagram.com/faello.dev/">
                  <CiInstagram size={24} color="#BFD8BD" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rafaelneukirchen/"
                >
                  <CiLinkedin size={24} color="#BFD8BD" />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCciziZqFv7EwX9N51PtMcmg"
                >
                  <CiYoutube size={24} color="#BFD8BD" />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/rafael.neukirchen.5/"
                >
                  <CiFacebook size={24} color="#BFD8BD" />
                </a>
              </S.SocialWrapper>
            </S.Socials>
          </S.Body>
        </S.Background>
      )}
      {!isMobile() && (
        <S.Head>
          <S.Links>{Links}</S.Links>
          <S.ProgressBar id="scroll-progress"></S.ProgressBar>
        </S.Head>
      )}
      <S.GoTopButton visible={scrollTopVisible} onClick={() => goTop()}>
        <AiOutlineArrowUp size={32} />
      </S.GoTopButton>
    </header>
  );
};

export default Header;
