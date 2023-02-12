import styled from "styled-components";

export const Caller = styled.div`
  padding-top: 40px;
  @media (min-width: 768px) {
    padding-top: 80px;
    & span {
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
  height: 150px;
  padding-top: 8px;
  font-size: 22px;
  font-weight: 300;
  color: #bfd8bd;
  margin-left: 32px;
  & > span {
    margin-right: 6px;
  }
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
`;
