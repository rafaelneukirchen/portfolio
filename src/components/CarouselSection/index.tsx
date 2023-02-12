import React, { useCallback, useState } from "react";
import { Navigation, A11y } from "swiper";
import { SwiperSlide } from "swiper/react";
import * as S from "./styles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { careerProjects } from "../../careerprojects";
import { CgScrollH } from "react-icons/Cg";

const CarouselSection: React.FC = () => {
  const [actualSlide, setActualSlide] = useState(0);

  const verifyActualSwiper = useCallback(() => {
    setTimeout(() => {
      let activeSwiperSlide = document.querySelector(".swiper-slide-active");
      setActualSlide(Number(activeSwiperSlide!.ariaLabel?.split("/")[0]));
    }, 200);
  }, []);

  return (
    <S.SwiperWrapper id="carreira">
      <span>
        <small>Arraste para os lados</small>
        <CgScrollH color="bfd8bd" size={24} />
      </span>
      <S.Swiper
        modules={[Navigation, A11y]}
        slidesPerView={1}
        navigation
        spaceBetween={24}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        onSwiper={() => verifyActualSwiper()}
        onSlideChange={() => verifyActualSwiper()}
      >
        {careerProjects.map((project, key) => {
          return (
            <SwiperSlide key={key}>
              <img src={project.image}></img>
              <h3>{project.name}</h3>
              <h4>{project.company}</h4>
            </SwiperSlide>
          );
        })}
        {actualSlide}
      </S.Swiper>
    </S.SwiperWrapper>
  );
};

export default CarouselSection;
