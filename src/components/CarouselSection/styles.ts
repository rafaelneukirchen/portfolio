import styled from "styled-components";
import { Swiper as RootSwiper } from "swiper/react";

export const SwiperWrapper = styled.div`
  margin-top: 20px;
  & span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    & > small {
      padding-right: 4px;
      font-size: 8px;
      color: #bfd8bd;
    }
  }

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const Swiper = styled(RootSwiper)`
  cursor: grab;
  position: relative;
  & > .swiper-button-prev,
  & > .swiper-button-next {
    width: 40px;
    height: 40px;
  }

  & > .swiper-button-prev::after,
  & > .swiper-button-next::after {
    font-size: 12px;
  }

  & .swiper-wrapper .swiper-slide {
    position: relative;
    height: 100%;
    &:after {
      content: "";
      z-index: 1;
      height: 100%;
      width: 100%;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      position: absolute;
      top: 0;
      left: 0;
    }
    & > img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      object-position: center;
      z-index: 0;
      border-radius: 4px 4px 0 0;
    }

    & > h3 {
      position: absolute;
      bottom: 48px;
      z-index: 2;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: #bfd8bd;

      &:after {
        content: "";
        width: 100%;
        height: 1px;
        left: 0;
        background-color: #bfd8bd;
        position: absolute;
        bottom: 0;
        transform: translateY(8px);
      }
    }

    & > h4 {
      width: 100%;
      color: #65a261;
      position: absolute;
      bottom: 20px;
      font-size: 12px;
      z-index: 2;
      text-align: center;
    }
  }
`;

export const Caller = styled.div`
  padding-top: 40px;
  @media (min-width: 768px) {
    padding-top: 80px;
  }
`;

export const Title = styled.h1`
  font-size: 56px;
  text-align: center;
  color: #bfd8bd;
  & > span {
    color: #65a261;
  }
`;

export const Subtitle = styled.h3`
  text-align: center;
`;
