import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateY(80px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: 0 24px;
  @media (min-width: 768px) {
    margin-top: 0px;
    padding: 0 24px;
    border-left: 4px solid var(--secondary-color);
  }
`;

export const TextWrapper = styled.div`
  color: var(--primary-color);
  font-size: 16px;
  margin-top: 16px;
  animation: ${fadeIn} ease-in-out 1s;
  > p {
    line-height: 130%;
  }

  @media (min-width: 768px) {
    text-align: justify;
    width: 50%;
  }
`;

export const ProjectTitle = styled.div`
  width: 100%;
  > h2 {
    color: var(--secondary-color);
    font-weight: 900;
    font-size: 44px;
    animation: ${fadeIn} ease-in-out 1s;
    position: relative;
    margin: -6px 0 24px 0;
    & > span {
      color: var(--primary-color);
      font-size: 22px;
    }
    &:after {
      content: "";
      position: absolute;
      width: 50px;
      height: 1px;
      background-color: var(--primary-color);
      left: 0;
      bottom: 0;
      transform: translate(0px, 8px);
    }
  }

  > h3 {
    margin-bottom: 16px;
    animation: ${fadeIn} ease-in-out 1s;
  }
`;

export const CompetenceFigures = styled.div`
  display: flex;
  margin: 16px 0 8px;
  justify-content: space-between;
`;
