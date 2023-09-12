import {Component} from 'react'
import GameContext from './Context/GameContext'
import Header from './Components/Header'
import Game from './Components/Game'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    alt: 'rockButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    alt: 'scissorsButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    alt: 'paperButton',
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
    systemChoice: choicesList[Math.floor(Math.random() * choicesList.length)],
    status: '',
  }

  makeUserChoice = (each, ranChoice) => {
    const {score} = this.state
    // console.log(ranChoice)
    // console.log(
    //   `userChoice in App Component ${each.id} ======== Score :${score}`,
    // )
    // console.log(`ranChoice in App Component ${ranChoice.id}`)
    // console.log(ranChoice)
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    this.setState({
      userChoice: each.imageUrl,
      userId: each.id,
      userComponent: true,
      //   systemId: choicesList[randomNumber].id,
      systemChoice: ranChoice,
    })
    // const {systemId} = this.state
    // console.log(each.id, systemId)
    // console.log(each.id, systemChoice.id)
    if (each.id === 'PAPER' && ranChoice.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        status: 'YOU WON',
      }))
    } else if (each.id === 'PAPER' && ranChoice.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        status: 'YOU LOSE',
      }))
    } else if (each.id === 'SCISSORS' && ranChoice.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        status: 'YOU LOSE',
      }))
    } else if (each.id === 'SCISSORS' && ranChoice.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        status: 'YOU WON',
      }))
    } else if (each.id === 'ROCK' && ranChoice.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        status: 'YOU LOSE',
      }))
    } else if (each.id === 'ROCK' && ranChoice.id === 'SCISSORS') {
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

    console.log(
      `userChoice in App Component ${userId} ======== Score :${score}`,
    )
    console.log(`ranChoice in App Component ${systemChoice.id}`)

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
