import React from 'react'
import {StartPageContainer, StartPageElements, StartPageTitle, StartPageButton, StartPageVideo} from './StartPageStyles'
import BgVideo from '../Assets/videos/Dog_running_video.mp4'
import { useNavigate } from 'react-router-dom'


function StartPage(){


  let navigate = useNavigate();
  return (
    <StartPageContainer>
      <StartPageVideo src={BgVideo} autoPlay loop muted playsinline />
        <StartPageElements>
            <StartPageTitle>DoggoSmash</StartPageTitle>
            <StartPageButton onClick={()=>navigate('/play')}>Start Smashing</StartPageButton>
        </StartPageElements>
    </StartPageContainer>
  )
}

export default StartPage