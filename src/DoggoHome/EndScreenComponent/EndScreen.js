import React, {useState} from 'react'
import { EndScreenContainer, EndScreenElements, EndScreenStatsText, EndScreenTitle, EndScreenButton } from './EndScreenStyles'
import DoggoHome from '../DoggoHome'
function EndScreen() {

    const {cutenumber, notcutenumber} = useState(DoggoHome);
  return (
    <EndScreenContainer>
        <EndScreenElements>
            <EndScreenTitle>Thank You For Playing DoggoSmash</EndScreenTitle>
            <EndScreenStatsText></EndScreenStatsText>
            <EndScreenStatsText></EndScreenStatsText>
        </EndScreenElements>
    </EndScreenContainer>
  )
}

export default EndScreen