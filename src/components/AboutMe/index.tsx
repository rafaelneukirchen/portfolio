import * as S from "./styles";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.AboutMe>
      <S.Parallax>
        <S.ParallaxCourtain />
        <S.ParallaxContent id="sobre">
          <S.Content>
            <S.Profile>
              <S.Picture>
                <img alt="Rafael Neukirchen" src="./eu.png"></img>
                <S.ShortDescription>
                  <h3>Rafael Neukirchen</h3>
                  <p>💍 {t("about_me.married")}</p>
                  <p>🛹 {t("about_me.skater")}</p>
                  <p>👨‍🍳 {t("about_me.chef")}</p>
                  <p>🐈 {t("about_me.pet_father")}</p>
                  <p>🎮 {t("about_me.gamer")}</p>
                  <p>💻 {t("about_me.developer")}</p>
                  <p style={{ marginTop: "24px" }}>
                    <i>{t("about_me.bugs_solved")}</i>
                  </p>
                </S.ShortDescription>
              </S.Picture>
              <S.Description>
                <h3 style={{ marginTop: "24px" }}>Gaming</h3>
                <p>
                  <span className="platinum">Platinum 2</span> {t("gaming.tft")}
                </p>
                <p>
                  <span className="gold">Gold 3</span> {t("gaming.lol")}
                </p>
                <p>
                  <span className="silver">Silver 4</span> {t("gaming.csgo")}
                </p>
                <p>
                  MMORPG <span className="red">Lover</span> (Diablo Series,
                  World of Warcraft, Grand Chase)
                </p>

                <h3 style={{ marginTop: "24px" }}>Setup</h3>
                <p>ASUS A320M-K PRIME</p>
                <p>AMD Ryzen 7 5700G with Radeon Graphics 3.80 GHz</p>
                <p>AMD Radeon RX 6600 (8GB)</p>
                <p>2x8gb 3200MHz Ballistix</p>
                <p>ADATA SU630 240gb SSD</p>
                <p>SSD KINGSTON SNV2S1000G</p>
              </S.Description>
            </S.Profile>
          </S.Content>
        </S.ParallaxContent>
      </S.Parallax>
    </S.AboutMe>
  );
};

export default AboutMe;
