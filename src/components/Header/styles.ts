import styled, { css } from "styled-components";

interface BodyProps {
  open: boolean;
}

export const Nav = styled.button<BodyProps>`
  background: #bfd8bd;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  border: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: fixed;
  right: 8px;
  top: 8px;
  transition: 0.25s all ease-in;
  ${(props) =>
    !props.open &&
    css`
      & > div:nth-child(2) {
        display: none;
      }
      & > div:first-child {
        transform: rotate(45deg) translate(4px, 3px);
        transition: 0.25s all ease-in;
      }
      & > div:last-child {
        transform: rotate(-45deg) translate(4px, -3px);
        transition: 0.25s all ease-in;
      }
    `};
`;

export const Background = styled.div<BodyProps>`
  background: var(--dark-green);
  width: 100%;
  height: 100vh;
  position: fixed;
  transition: 0.25s all ease-in;
  z-index: 10;

  ${(props) =>
    props.open &&
    css`
      margin-left: -100vw;
      transition: 0.25s all ease-in;
    `}
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background: var(--dark-green);
`;

export const Body = styled.div`
  height: 100vh;
`;

export const Links = styled.div`
  width: 100%;
  padding-top: 44px;
  @media (min-width: 768px) {
    padding: 8px 0;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Socials = styled.div`
  width: 100%;
  margin-top: 16px;
  & p {
    margin-top: 64px;
    text-align: center;
    color: #bfd8bd;
  }
`;

export const SocialWrapper = styled.div`
  width: calc(100% - 128px);
  padding: 16px 64px 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.a`
  width: calc(100% - 8px);
  border: none;
  font-size: 22px;
  padding: 12px 4px 8px;
  background: none;
  border-bottom: 1px solid #bfd8bd75;
  text-align: left;
  display: flex;
  & > span {
    color: #bfd8bd;
  }

  & > svg:not(.arrow) {
    padding: 0 4px;
  }

  @media (max-width: 767px) {
    & > svg.arrow {
      display: none;
    }
  }

  @media (min-width: 768px) {
    width: fit-content;
    border: none;
    text-align: center;
    cursor: pointer;
    padding: 6px 12px 10px 8px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    position: relative;

    & > svg.arrow {
      opacity 0;
      left: 16px;
      position: absolute;
      transition: 0.1s all ease-in-out;
    }

    & > span {
      font-size: 16px;
      color: #bfd8bd;
    }

    & > svg {
    }

    &:hover {
      background-color: #bfd8bd;
      & > span {
        color: var(--secondary-color);
      }
      & > svg {
        color: var(--secondary-color);
        fill: var(--secondary-color);
      }
      & > svg.arrow {
        transition: 0.1s all ease-in-out;
        position: relative;
        left: 0;
        opacity: 1;
      }
    }
  }
`;

export const Head = styled.div`
  width: 100vw;
  display: flex;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  z-index: 1000;
  background-color: var(--dark-color);
  box-shadow: 0px 0px 10px #bfd8bd15;
`;

export const ProgressBar = styled.div`
  height: 4px;
  background: var(--secondary-color);
`;

interface GoTopButtonProps {
  visible: boolean;
}

export const GoTopButton = styled.button<GoTopButtonProps>`
  background: transparent;
  z-index: 9;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: fixed;
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  right: 8px;
  bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  ${(props) =>
    props.visible
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
  &:hover {
    transition: all 0.3s ease;
    background-color: #bfd8bd;
  }
`;
