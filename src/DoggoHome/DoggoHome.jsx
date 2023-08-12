import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import {
  DoggoContainer,
  DoggoElements,
  DoggoImageContainer,
  DoggoImage,
  DoggoButton,
  DoggoTitle,
  DoggoButtonContainer,
  SmallCounter,
} from "./DoggoHomeStyles";
import EndScreen from "./EndScreenComponent/EndScreen";

function DoggoHome() {
  const [cutenumber, addCuteNumber] = useState(0);
  const [imagedata, setImageData] = useState({});

  const [notcutenumber, addNotCuteNumber] = useState(0);
  const [gamecounter, setGameCounter] = useState(0);
  const [gameStart, setGameStart] = useState(true);
  const [endscreen, showEndScreen] = useState(false);
 

  const getData = async () => {
    const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    setImageData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleGameEnd = () => {
    setGameStart(false);
    showEndScreen(true);
  };

  const cuteHandler = (e) => {
    e.preventDefault();
    if (cutenumber >= 10) {
      handleGameEnd();
    } else {
      addCuteNumber(cutenumber + 1);
      setGameCounter(gamecounter + 1);
      getData();
    }
  };
  const notCuteHandler = (e) => {
    e.preventDefault();
    if (notcutenumber >= 10) {
      handleGameEnd();
    } else {
      addNotCuteNumber(notcutenumber + 1);
      setGameCounter(gamecounter + 1);
      getData();
    }
  };
  // turn this to fetch handler
  return (
    <DoggoContainer>
      {gameStart ? (
        <DoggoElements>
          <DoggoImageContainer>
            <DoggoTitle>DoggoSmash </DoggoTitle>
            <DoggoImage src={imagedata.message} alt="dogimage" />
          </DoggoImageContainer>
          <DoggoButtonContainer>
            <DoggoButton onClick={(e) => cuteHandler(e)}>Cute</DoggoButton>
            <SmallCounter>{gamecounter}/10</SmallCounter>
            <DoggoButton onClick={(e) => notCuteHandler(e)}>
              Not Cute
            </DoggoButton>
          </DoggoButtonContainer>
         
        </DoggoElements>
      ) : null}
      {endscreen ? <EndScreen /> : null}
      <Outlet />
    </DoggoContainer>
  );
}

export default DoggoHome;
