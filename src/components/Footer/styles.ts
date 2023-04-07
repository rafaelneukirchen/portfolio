import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 80px;
  padding: 40px 0;
`;

export const Logo = styled.div`
  width: 25%;
  & > img {
    max-width: 50%;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
  background: blue;
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
  & > h3 {
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  text-align: center;

  & div + div {
    margin-left: 10px;
  }
`;

export const Link = styled.div``;

export const SocialMedia = styled.div`
  width: 50%;
`;
