import { useCallback, useRef, useState } from "react";
import * as S from "./styles";
import { object, string } from "yup";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    textbox: "",
  });

  const [error, setError] = useState("");

  const sendEmail = useCallback(
    async (e: any) => {
      let userSchema = object().shape({
        textbox: string().required(t("contact.errors.textbox") || ""),
        email: string()
          .email(t("contact.errors.email.invalid") || "")
          .required(t("contact.errors.email") || ""),
        fullname: string().required(t("contact.errors.fullname") || ""),
      });

      try {
        await userSchema.validate(user);
      } catch (error: any) {
        setError(error.errors);
      }
    },
    [user]
  );

  return (
    <S.Contact id="contato">
      <S.Context>
        <h3>{t("contact.feel_free")}</h3>
        <p>{t("contact.to_send")}</p>
      </S.Context>
      <S.ContactWrapper>
        <S.ContactForm
          ref={formRef}
          action="https://formsubmit.co/ca749a50d51150aacdff1f47af41df17"
          method="POST"
        >
          <p>{error}</p>
          <label>
            {t("contact.label.fullname")}
            <input
              type="text"
              placeholder={t("contact.placeholder.fullname") || ""}
              name="fullname"
              onChange={(e) => {
                setUser({ ...user, fullname: e.target.value });
              }}
              value={user.fullname}
              required
            />
          </label>
          <label>
            {t("contact.label.email")}
            <input
              type="email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              placeholder={t("contact.placeholder.email") || ""}
              name="email"
              required
            />
          </label>
          <label>
            {t("contact.label.textbox")}
            <textarea
              name="textbox"
              value={user.textbox}
              placeholder={t("contact.placeholder.textbox") || ""}
              onChange={(e) => {
                setUser({ ...user, textbox: e.target.value });
              }}
              required
            />
          </label>
          <button
            className="g-recaptcha"
            data-sitekey="reCAPTCHA_6LfcraomAAAAAEAXE8YV38-nWQCUOqhddEylSmAG"
            data-callback="onSubmit"
            data-action="submit"
            id="recapcthaBtn"
            type="submit"
            onClick={(e) => sendEmail(e)}
          >
            Enviar
          </button>
        </S.ContactForm>
      </S.ContactWrapper>
    </S.Contact>
  );
};

export default Contact;
