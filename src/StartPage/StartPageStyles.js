import styled from "styled-components";

const StartPageContainer = styled.div`
height: 100vh;
width: 100%;
`;
const StartPageElements = styled.div`
display:flex;
align-items: center;
justify-content: center;
position: relative;
flex-direction: column;
height: 85vh;
`;
const StartPageTitle = styled.h1`
color: #fff;
font-size: 6rem;
height: 4rem;
font-weight: bold;
`;
const StartPageButton = styled.button`
width: 10rem;
height: 3rem;
border-radius: 2rem;
border: none;
background-color: #6A6E09;
color: #fff;
font-size: 1rem;
cursor:pointer;




`;
const StartPageVideo = styled.video`
height: 100vh;
object-fit: cover;
position: absolute;
width: 100vw;

`;

export {
    StartPageContainer,
    StartPageElements,
    StartPageTitle,
    StartPageButton,
    StartPageVideo
}