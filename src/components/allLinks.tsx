import i18n from "../i18n";
import { useEffect } from "react";

interface MenuOptionsProps {
  image: string;
  title: string;
  link: string;
}

export let menuOptions: MenuOptionsProps[];

const menuOptionsPt: MenuOptionsProps[] = [
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
  // {
  //   image: "tabuleiro",
  //   title: "Chess",
  //   link: "chess",
  // },
];

const menuOptionsEn: MenuOptionsProps[] = [
  {
    image: "mala",
    title: "Career",
    link: "carreira",
  },
  {
    image: "livro",
    title: "Skills",
    link: "skills",
  },
  {
    image: "personagem",
    title: "About",
    link: "sobre",
  },
  {
    image: "email",
    title: "Contact",
    link: "contato",
  },
  {
    image: "chamado",
    title: "Feedback",
    link: "feedback",
  },
  // {
  //   image: "tabuleiro",
  //   title: "Chess",
  //   link: "chess",
  // },
];

i18n.language === "pt-BR"
  ? (menuOptions = menuOptionsPt)
  : (menuOptions = menuOptionsEn);
