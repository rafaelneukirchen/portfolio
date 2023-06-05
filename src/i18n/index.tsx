import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import portuguese from "./locale/pt/pt-br.json";
import english from "./locale/en/en-us.json";

const resources = {
  "pt-BR": portuguese,
  "en-US": english,
};

i18n.use(initReactI18next).init({
  // debug: true,
  resources,
  lng: localStorage.getItem("i18nextLng") || "pt-BR",
  interpolation: { escapeValue: false },
});

i18n.reloadResources();

export default i18n;
