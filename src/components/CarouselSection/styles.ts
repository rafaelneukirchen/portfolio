import styled from "styled-components";
import { Swiper as RootSwiper } from "swiper/react";

export const SwiperWrapper = styled.div`
  margin-top: 20px;
  & > span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    & > small {
      padding-right: 4px;
      font-size: 8px;
      color: var(--primary-color);
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
    width: 32px;
    height: 32px;
    border: 1px solid var(--secondary-color);
    border-radius: 100px;
  }

  & > .swiper-button-prev::after,
  & > .swiper-button-next::after {
    font-size: 12px;
    color: var(--primary-color);
  }

  & .swiper-wrapper .swiper-slide {
    position: relative;
    height: 100%;
    padding-top: 4px;
    transition: transform 0.3s ease;
    transform: translateY(0px);
    &:hover {
      transition: transform 0.3s ease;
      transform: translateY(-4px);
    }
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
      color: var(--primary-color);

      &:after {
        content: "";
        width: 100%;
        height: 1px;
        left: 0;
        background-color: var(--primary-color);
        position: absolute;
        bottom: 0;
        transform: translateY(8px);
      }
    }

    & > h4 {
      width: 100%;
      color: var(--secondary-color);
      position: absolute;
      bottom: 20px;
      font-size: 12px;
      z-index: 2;
      text-align: center;
    }

    & > p {
      color: var(--secondary-color);
      position: absolute;
      top: 4px;
      right: 0;
      font-size: 16px;
      font-weight: 900;
      border-radius: 0 4px 0 4px;
      background-color: var(--primary-color);
      padding: 4px 8px;
      z-index: 2;
      text-align: center;
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 80px;
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
  color: var(--primary-color);
  & > span {
    color: var(--secondary-color);
  }
`;

export const Subtitle = styled.h3`
  text-align: center;
`;
