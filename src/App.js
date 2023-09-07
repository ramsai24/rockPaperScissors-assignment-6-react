import {Component} from 'react'
import GameContext from './Context/GameContext'
import Header from './Components/Header'
import Game from './Components/Game'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {score: 0, userChoice: '', choicesList, userComponent: false}

  makeUserChoice = () => {}

  render() {
    const {score, userComponent} = this.state

    return (
      <GameContext.Provider
        value={{
          choicesList,
          systemChoice:
            choicesList[Math.floor(Math.random() * choicesList.length)],
          score,

          makeUserChoice: this.makeUserChoice,
          userComponent,
        }}
      >
        <div className="app-container">
          <Header />
          <Game />
        </div>
      </GameContext.Provider>
    )
  }
}

export default App
