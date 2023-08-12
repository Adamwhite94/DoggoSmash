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

const DoggoContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 100vh;
background-color: #f1dfd1;
background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%);
`;
const DoggoElements = styled.div`


`;
const DoggoImageContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    margin-right: 1.1rem;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    margin-right: 1.1rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
    margin-right: 2.2rem;
}
`;
const DoggoImage = styled.img`
width: 30rem;
height: 30rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    width: 20rem;
height: 20rem;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    width: 20rem;
height: 20rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
    width: 20rem;
height: 20rem;
}
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    width: 20rem;
height: 20rem;
}

`;
const DoggoButton = styled.button`
width: 10rem;
height: 3rem;
border-radius: 2rem;
border: none;
background-color: #AE8A6F;
color: #FFF7F0;
font-size: 1rem;
cursor:pointer;
margin-top: 2rem;


`;
const DoggoTitle = styled.h1`
    color: #FFF7F0;
    font-size: 3rem;
    background-color: #AE8A6F;
    padding: 1rem;
    border-radius: 1rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    color: #FFF7F0;
    font-size: 3rem;
    background-color: #AE8A6F;
    padding: 2rem;
    border-radius: 1rem;
}
`;

const DoggoButtonContainer = styled.div`
display:flex;
justify-content: space-around;
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    margin-right: 1.1rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
    margin-right: 2.2rem;
}
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    margin-right: 1.1rem;
}
`;

const SmallCounter = styled.h3`
margin-top: 1.8rem;
`;


export{
    DoggoContainer,
    DoggoElements,
    DoggoImageContainer,
    DoggoButton, 
    DoggoImage,
    DoggoTitle,
    DoggoButtonContainer,
    SmallCounter
}