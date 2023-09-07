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
  state = {score: 0, userChoice: '', userComponent: false}

  makeUserChoice = imageUrl => {
    this.setState({userChoice: imageUrl, userComponent: true})
  }

  playAgain = () => {
    this.setState({userComponent: false})
  }

  render() {
    const {score, userComponent, userChoice} = this.state

    return (
      <GameContext.Provider
        value={{
          choicesList,
          systemChoice:
            choicesList[Math.floor(Math.random() * choicesList.length)]
              .imageUrl,
          score,

          makeUserChoice: this.makeUserChoice,
          userComponent,
          userChoice,
          playAgain: this.playAgain,
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
