import styled from "styled-components";

export const AboutMe = styled.div`
  position: relative;
`;

export const Parallax = styled.div`
  background: url("./tree.gif") 100% 100% repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: contain;
  padding: 0 0 75vh;
  min-height: 100vh;
  @media (min-width: 768px) {
    padding: 0;
    min-height: 100vh;
  }
`;

export const ParallaxContent = styled.div`
  position: absolute;
  width: 90vw;
  transform: translateX(-50%);
  left: 50%;
  max-width: 1440px;
  top: 25vh;
  // @media (min-width: 768px) {
  //   top: 50vh;
  // }
`;

export const ParallaxCourtain = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  background: var(--dark-color);
  padding: 32px;
  border-radius: 5px;
  margin: 0 auto;
  // height: 300vh;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    & > div {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const Profile = styled.div`
  grid-area: 1 / 1 / 1 / 3;
  display: flex;
  flex-wrap: wrap;
`;

export const Picture = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    width: 70%;
    &:after {
      content: "";
      width: 1px;
      height: 100%;
      position: absolute;
      background-color: var(--secondary-color);
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  & > img {
    width: 100%;
    height: 100%;
    border: 3px solid rgba(106, 106, 106, 0.4);
    object-fit: cover;
    text-align: center;
    height: calc(85vw - 50px);
    max-width: calc(85vw - 50px);
    @media (min-width: 768px) {
      object-fit: contain;
      max-width: 250px;
      max-height: 250px;
    }
  }
`;

export const ShortDescription = styled.div`
  padding: 16px 0 0;
  @media (min-width: 768px) {
    padding: 0 24px 0 24px;
  }
  display: flex;
  flex-wrap: wrap;
  align-self: start;
  & > h3 {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
    width: 100%;
    font-size: 40px;
    font-weight: 900;
    color: var(--secondary-color);
    margin-bottom: 16px;
  }

  & > p {
    width: 100%;
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
    @media (min-width: 1000px) {
      width: 50%;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    width: 30%;
  }
  align-self: start;
  & > h3 {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
    width: 100%;
    font-size: 40px;
    font-weight: 900;
    color: var(--secondary-color);
    margin-bottom: 16px;
  }

  & > p {
    width: 100%;
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
    & > span.gold {
      color: #efb810;
      font-weight: 800;
    }

    & > span.platinum {
      color: #74fffd;
      font-weight: 800;
    }

    & > span.red {
      color: rgb(255, 75, 75);
      font-weight: 500;
    }
  }
`;

export const Song = styled.div`
  margin-bottom: 16px;
  width: 100%;

  & > h3 {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
    width: 100%;
    font-size: 40px;
    font-weight: 900;
    color: var(--secondary-color);
    margin-bottom: 16px;
  }
`;

export const Spotify = styled.div`
  grid-area: 2 / 1 / 5 / 2;
  background-color: green;
`;

export const Instagram = styled.div`
  grid-area: 5 / 1 / 5 / 3;
  background-color: purple;
`;

export const Hobbies = styled.div`
  grid-area: 2 / 2 / 2 / 3;
  background-color: blue;
`;

export const Religion = styled.div`
  grid-area: 4 / 2 / 4 / 3;
  background-color: pink;
`;

export const Something = styled.div`
  grid-area: 3 / 2 / 3 / 3;
  background-color: gray;
`;
