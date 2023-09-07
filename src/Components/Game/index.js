// import {Component} from 'react'
import GameContext from '../../Context/GameContext'
import './index.css'

const Game = () => (
  <GameContext.Consumer>
    {value => {
      const {
        systemChoice,
        choicesList,
        makeUserChoice,
        userComponent,
        score,
        userChoice,
        playAgain,
      } = value

      console.log(systemChoice, userChoice, score, userComponent)

      const resultComponent = () => (
        <div className="result-container">
          <div>
            <h1>You</h1>
            <img className="coin-img" src={userChoice} alt="user" />
          </div>
          <div>
            <h1>OPPONENT</h1>
            <img className="coin-img" src={systemChoice} alt="system" />
          </div>
          <div>
            <button type="button" onClick={playAgain}>
              PLAY AGAIN
            </button>
          </div>
        </div>
      )

      return (
        <div>
          {userComponent ? (
            resultComponent()
          ) : (
            <ul className="coins-container">
              {choicesList.map(each => {
                const updateUserChoice = () => {
                  makeUserChoice(each.imageUrl)
                }

                return (
                  <li key={each.id}>
                    <button type="button" onClick={updateUserChoice}>
                      <img
                        className="coin-img"
                        src={each.imageUrl}
                        alt={each.id}
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )
    }}
  </GameContext.Consumer>
)

export default Game

// console.log(choicesList[Math.floor(Math.random() * choicesList.length)])
//       console.log(Math.random() * choicesList.length)
//       console.log(Math.floor(Math.random() * choicesList.length))
