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

const randomNum = Math.floor(Math.random() * choicesList.length)

class App extends Component {
  state = {
    score: 0,
    userChoice: '',
    userComponent: false,
    userId: '',
    systemId: choicesList[randomNum].id,
    systemChoice: choicesList[randomNum].imageUrl,
    status: '',
  }

  makeUserChoice = each => {
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    this.setState({
      userChoice: each.imageUrl,
      userId: each.id,
      userComponent: true,
      systemId: choicesList[randomNumber].id,
      systemChoice: choicesList[randomNumber].imageUrl,
    })
    const {systemId} = this.state
    console.log(each.id, systemId)

    if (each.id === 'PAPER' && systemId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        status: 'YOU WON',
      }))
    } else if (each.id === 'PAPER' && systemId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        status: 'YOU LOSE',
      }))
    } else if (each.id === 'SCISSORS' && systemId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        status: 'YOU LOSE',
      }))
    } else if (each.id === 'SCISSORS' && systemId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        status: 'YOU WON',
      }))
    } else if (each.id === 'ROCK' && systemId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        status: 'YOU LOSE',
      }))
    } else if (each.id === 'ROCK' && systemId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        status: 'YOU WON',
      }))
    } else {
      this.setState({status: 'IT IS DRAW'})
    }
  }

  playAgain = () => {
    this.setState({userComponent: false})
  }

  render() {
    const {
      score,
      userId,
      systemId,
      userComponent,
      userChoice,
      systemChoice,
      status,
    } = this.state

    return (
      <GameContext.Provider
        value={{
          choicesList,
          systemChoice,
          score,

          makeUserChoice: this.makeUserChoice,
          userComponent,
          userChoice,
          playAgain: this.playAgain,
          systemId,
          status,
          userId,
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
