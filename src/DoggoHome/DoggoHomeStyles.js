import styled from "styled-components";

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
const DoggoImageContainer = styled.div``;
const DoggoImage = styled.img`
width: 30rem;
height: 30rem;

`;
const DoggoButton = styled.button`
width: 10rem;
height: 3rem;
border-radius: 2rem;
border: none;
background-color: #6A6E09;
color: #fff;
font-size: 1rem;
cursor:pointer;
margin-top: 1rem;


`;
const DoggoTitle = styled.h1`
text-align: center;
font-size: 4rem;
height: 2.5rem;
`;

const DoggoButtonContainer = styled.div`
display:flex;
justify-content: space-around;
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