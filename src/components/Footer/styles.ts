import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 80px;
  padding: 40px 0;
  border-top: 1px solid var(--primary-color);
`;

export const Logo = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 25%;
  }
  & > img {
    max-width: 50%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Technologies = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  & > h3 {
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
    color: var(--primary-color);
  }

  & span {
    color: var(--secondary-color);
  }

  & p {
    color: var(--primary-color);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg + svg {
      margin-left: 10px;
    }
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  & > div > span {
    color: var(--primary-color);
    transition: color 0.3s;
    &:hover {
      transition: color 0.3s;
      color: var(--secondary-color);
    }
  }
  & div + div {
    margin-left: 16px;
  }
`;

export const Link = styled.div``;

export const SocialMedia = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 25%;
  }

  & > h3 {
    color: var(--secondary-color);
    margin-bottom: 24px;
  }

  & > a + a {
    margin-left: 8px;
  }
`;
