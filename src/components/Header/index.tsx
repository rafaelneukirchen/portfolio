import React, { useCallback, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from "react-icons/Ci";
import { RiSuitcaseLine, RiArrowRightLine } from "react-icons/Ri";
import { FiMail } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosMegaphone } from "react-icons/io";
import isMobile from "../../hooks/useMobile";
import * as S from "./styles";

const Header: React.FC = () => {
  const [isClosed, setClosed] = useState(true);
  const navigate = useNavigate();

  interface MenuOptionsProps {
    image: string;
    title: string;
    link: string;
  }

  const menuOptions: MenuOptionsProps[] = [
    {
      image: "mala",
      title: "Carreira",
      link: "carreira",
    },
    {
      image: "livro",
      title: "Skills",
      link: "skills",
    },
    {
      image: "personagem",
      title: "Sobre",
      link: "sobre",
    },
    {
      image: "email",
      title: "Contato",
      link: "contato",
    },
    {
      image: "chamado",
      title: "Feedback",
      link: "feedback",
    },
  ];

  const toggleMenu = useCallback(() => {
    setClosed((isActive) => !isActive);
  }, [isClosed]);

  const ScrollIntoSelectedMenuOption = useCallback(
    (link: string) => {
      if (window.location.pathname !== "/") {
        navigate("/");
      }

      setClosed(true);
      setTimeout(() => {
        let elementYpos = document
          .querySelector(`#${link}`)!
          .getBoundingClientRect();
        window.scrollTo({
          top: window.scrollY + elementYpos.top,
          behavior: "smooth",
        });
      }, 300);
    },
    [setClosed]
  );

  const Links = useMemo(() => {
    return (
      <S.Links>
        {menuOptions.map((option, i) => {
          return (
            <>
              <S.Link
                key={`#-${i}`}
                onClick={() => ScrollIntoSelectedMenuOption(option.link)}
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
                <span>{option.title}</span>
              </S.Link>
            </>
          );
        })}
      </S.Links>
    );
  }, []);

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
                <p>Me encontre nas redes sociais!</p>
              </div>
              <S.SocialWrapper>
                <a target="_blank" href="https://www.instagram.com/fael_lo/">
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
      {!isMobile() && <S.Head>{Links}</S.Head>}
    </header>
  );
};

export default Header;
