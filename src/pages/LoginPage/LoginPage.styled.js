import styled from "styled-components";

//Mobile
import bgMobile from "../../images/mainPage-image/bg-mobile.png";
import bgMobile2x from "../../images/mainPage-image/bg2x-mobile.png";
//Tablet
import bgTablet from "../../images/mainPage-image/bg-tablet.png";
import bgTablet2x from "../../images/mainPage-image/bg2x-tablet.png";
//Desk
import bgDesk from "../../images/mainPage-image/bg-desk.png";
import bgDesk2x from "../../images/mainPage-image/bg2x-desk.png";
export const LoginBg = styled.div`
  position: absolute;
  top: 12%;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background-size: cover;
  background-position: center;
  background-image: url(${bgMobile});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobile2x});
  }
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    background-blend-mode: multiply;
    background-position: center;
    background-size: cover;
    background-image: url(${bgTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTablet2x});
    }
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${bgDesk});
    display: flex;
    padding-top: 20px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDesk2x});
    }
  }
`;
