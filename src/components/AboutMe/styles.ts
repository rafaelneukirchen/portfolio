import styled, { Keyframes, keyframes } from "styled-components";

// const paperFlight = keyframes`
// 0% {
//   opacity: 0;
//   transform: translateY(0px) rotateX(-17deg) rotateY(-24deg) rotateZ(6deg);
// }

// 1% {
//   transform: translateY(200px) rotateX(-17deg) rotateY(-24deg) rotateZ(6deg);
// }

// 10% {
//   transform: translateY(100px) rotateX(-7deg) rotateY(0deg) rotateZ(13deg);
// }
// 20% {
//   transform: rotateX(13deg) rotateY(10deg) rotateZ(3deg) translateY(15px)
// }
// 30% {
//   transform: rotate3d(1, 1, 0.5, 45deg);
// }
// 40% {
//   transform: rotate3d(1, 1, 0.5, 45deg);
// }
// 50% {
//   transform: rotate3d(1, 1, 0.5, 45deg);
// }
// 60% {
//   transform: rotate3d(1, 1, 0.5, 45deg);
// }
// 70% {
//   transform: rotate3d(1, 1, 0.5, 45deg);
// }
// 80% {
//   transform: rotate3d(1, 1, 0.5, 45deg);
// }
// 90% {
//   transform: rotate3d(1, 1, 0.5, 45deg);
// }
// 100% {
//   transform: rotate3d(1, 1, 0.5, 45deg);
//   opacity: 1;
// }
// `;

export const AboutMe = styled.div`
  position: relative;
`;

export const Parallax = styled.div`
  background: url("./background.webp") 100% 100% no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400vh;
  padding: 50vh 0 0 0;
`;

export const ParallaxContent = styled.div`
  position: absolute;
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  max-width: 1440px;
  height: 100%;
  top: 100vh;
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
  margin: 0 auto;
  z-index: 1;
  height: 300vh;
`;
