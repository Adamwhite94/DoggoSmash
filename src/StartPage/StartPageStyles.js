import styled from "styled-components";
import { device } from "../Breakpoints/Breakpoints";

// @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
// }
// @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
// }
// @media only screen and (${device.laptopSmallerBP}) and (${device.laptop}) {
// }

const StartPageContainer = styled.div`
height: 100vh;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    background-color: #f1dfd1;
background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%);

}
`;
const StartPageElements = styled.div`
display:flex;
align-items: center;
justify-content: center;
position: relative;
flex-direction: column;
height: 85vh;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    margin-right: 1.1rem;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    margin-right: 1rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
    margin-right: 3.5rem;
}
@media only screen and (${device.laptopSmallerBP}) and (${device.laptop}) {
    margin-right: 3.5rem;
}
`;
const StartPageTitle = styled.h1`
color: #fff;
font-size: 6rem;
height: 4rem;
font-weight: bold;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    color: #FFF7F0;
    font-size: 3rem;
    background-color: #AE8A6F;
    padding: 2rem;
    border-radius: 1rem;
}

@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    font-size: 4rem;
}
`;
const StartPageButton = styled.button`
width: 10rem;
height: 3rem;
border-radius: 2rem;
border: none;
background-color: #AE8A6F;
color: #FFF7F0;
font-size: 1rem;
cursor:pointer;




`;
const StartPageVideo = styled.video`
width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    display:none;

}
`;

export {
    StartPageContainer,
    StartPageElements,
    StartPageTitle,
    StartPageButton,
    StartPageVideo
}