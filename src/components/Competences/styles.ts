import { darken } from "polished";
import styled, { css, keyframes } from "styled-components";

interface CompetenceProps {
  index: number;
}

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }

  85% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CompetenceWrapper = styled.div`
  width: 100%;
  margin: 16px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    width: 50%;
    display: block;
  }
`;

export const Competence = styled.div<CompetenceProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 40px;
  animation: ${fadeInLeft} 0.6s linear;
  animation-fill-mode: both;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: #bfd8bd;
    color: #fefefe;
  }

  & + div {
    margin-top: 4px;
  }

  & > span {
    padding-left: 16px;
  }

  &:nth-child(1) {
    animation-delay: calc(${(props) => props.index} * 0.3s);
  }

  &:nth-child(2) {
    animation-delay: calc(${(props) => props.index} * 0.3s);
  }

  &:nth-child(3) {
    animation-delay: calc(${(props) => props.index} * 0.3s);
  }

  &:nth-child(4) {
    animation-delay: calc(${(props) => props.index} * 0.3s);
  }

  &:nth-child(5) {
    animation-delay: calc(${(props) => props.index} * 0.3s);
  }

  &:nth-child(6) {
    animation-delay: calc(${(props) => props.index} * 0.3s);
  }

  &:nth-child(7) {
    animation-delay: calc(${(props) => props.index} * 0.3s);
  }

  &:nth-child(8) {
    animation-delay: calc(${(props) => props.index} * 0.3s);
  }

  ${(props) =>
    props.index
      ? css`
          color: ${darken(`0.${props.index / 1.2 + 1}`, "#bfd8bd")};
          & > div {
            background-color: ${darken(
              `0.${props.index / 1.2 + 1}`,
              "#bfd8bd"
            )};
            color: #fefefe;
          }
        `
      : ""};
`;
