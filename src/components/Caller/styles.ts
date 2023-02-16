import styled from "styled-components";

export const Caller = styled.div`
  padding: 40px 24px 0;
  @media (min-width: 768px) {
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
  color: #bfd8bd;
  & > span {
    font-weight: 900;
    color: #65a261;
  }
`;

export const Subtitle = styled.h3`
  text-align: center;
  height: 20px;
  font-size: 22px;
  color: #65a261;
`;

export const UnderTitle = styled.h2`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 40px;
  padding-top: 8px;
  font-size: 22px;
  font-weight: 300;
  color: #bfd8bd;

  & > div {
    width: fit-content;
    transition: transform 0.3s ease;
    & > p {
      opacity: 0;
      &.selected {
        opacity: 1;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          width: 40px;
          height: 1px;
          background-color: #bfd8bd;
          left: 0;
          bottom: 0;
          transform: translate(0px, 8px);
        }
      }
      width: 105%;
      position: relative;
      color: #65a261;
      font-weight: 900;
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
  margin: 80px 0;
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
  background-color: #65a261;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #0f1018;
  border: 1px solid #65a261;
  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    background-color: #0f1018;
    color: #65a261;
  }
`;

export const Github = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: transparent;
  border: 1px solid #65a261;
  color: #65a261;
  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    background-color: #bfd8bd;
  }
`;
