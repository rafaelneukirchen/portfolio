import React from "react";
import Caller from "../../components/Caller";
import CarouselSection from "../../components/CarouselSection";
import Header from "../../components/Header";
import * as S from "./styles";

const Home: React.FC = () => {
  console.log("teste");

  return (
    <main>
      <Header />
      <S.ContentWrapper>
        <Caller />
        <CarouselSection />
      </S.ContentWrapper>
    </main>
  );
};

export default Home;
