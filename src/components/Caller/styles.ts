import styled from "styled-components";

export const Caller = styled.div`
  min-height: 100vh;
  padding: 0 24px;
  display: grid;
  @media (min-width: 768px) {
    display: block;
    min-height: 0;
    padding: 80px 24px 0;
    & > span {
      text-align: center;
    }
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  padding: 16px 0;
  letter-spacing: 2px;
  color: var(--primary-color);
  & > span {
    font-weight: 900;
    color: var(--secondary-color);
  }
`;

export const Subtitle = styled.h3`
  text-align: center;
  height: 20px;
  font-size: 22px;
  color: var(--secondary-color);
  @media (max-width: 767px) {
    padding-top: 60px;
  }
`;

export const UnderTitle = styled.h2`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 40px;
  padding-top: 8px;
  font-size: 22px;
  font-weight: 300;
  color: var(--primary-color);
  & > span {
    @media (max-width: 767px) {
      margin: 32px 0 4px;
    }
  }
  & > div {
    width: fit-content;
    transition: transform 0.3s ease;
    @media (max-width: 767px) {
      text-align: center;
    }
    & > p {
      opacity: 0;
      width: 105%;
      position: relative;
      color: var(--secondary-color);
      font-weight: 900;
      &.selected {
        opacity: 1;
        position: relative;
        @media (min-width: 767px) {
          &:after {
            content: "";
            position: absolute;
            width: 40px;
            height: 1px;
            background-color: var(--primary-color);
            left: 0;
            bottom: 0;
            transform: translate(0px, 8px);
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    margin-left: 32px;
    & > span {
      margin-right: 6px;
    }
  }
`;

export const CTA = styled.h2`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 100px 0 40px;
  & > a {
    padding: 8px 24px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    & > span {
      margin-left: 8px;
    }
  }
  @media (min-width: 768px) {
    justify-content: center;
    & > a {
      cursor: pointer;
      margin-left: 8px;
    }
  }
`;

export const LinkedIn = styled.a`
  background-color: var(--secondary-color);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--dark-color);
  border: 1px solid var(--secondary-color);
  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    background-color: var(--dark-color);
    color: var(--secondary-color);
  }
`;

export const Github = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    background-color: var(--primary-color);
  }
`;
