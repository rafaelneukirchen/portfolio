import React from "react";
import AboutMe from "../../components/AboutMe";
import Caller from "../../components/Caller";
import CarouselSection from "../../components/CarouselSection";
import Header from "../../components/Header";
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <S.ContentWrapper>
        <Caller />
        <CarouselSection />
      </S.ContentWrapper>
      <AboutMe />
    </main>
  );
};

export default Home;
