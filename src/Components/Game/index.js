// import {Component} from 'react'
import GameContext from '../../Context/GameContext'
import './index.css'

const Game = () => (
  <GameContext.Consumer>
    {value => {
      const {systemChoice, choicesList, userComponent, score} = value

      console.log(systemChoice, score, userComponent)
      return <div> </div>
    }}
  </GameContext.Consumer>
)

export default Game

// console.log(choicesList[Math.floor(Math.random() * choicesList.length)])
//       console.log(Math.random() * choicesList.length)
//       console.log(Math.floor(Math.random() * choicesList.length))
