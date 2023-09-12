import {Component} from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import GameContext from '../../Context/GameContext'
import './index.css'

class Game extends Component {
  state = {
    ruleImage: true,
  }

  ruleImg = () => this.setState({ruleImage: false})

  closeBtn = () => this.setState({ruleImage: true})

  render() {
    const {ruleImage} = this.state

    return (
      <GameContext.Consumer>
        {value => {
          const {
            systemChoice,
            choicesList,
            makeUserChoice,
            userComponent,
            systemId,
            userChoice,
            playAgain,
            status,
          } = value

          const ranChoice =
            choicesList[Math.floor(Math.random() * choicesList.length)]

          const resultComponent = () => (
            <div className="result-container">
              <div>
                <h1>You</h1>
                <img className="coin-img" src={userChoice} alt="your choice" />
              </div>
              <div>
                <h1>OPPONENT</h1>
                <img
                  className="coin-img"
                  src={systemChoice.imageUrl}
                  alt="opponent choice"
                />
              </div>
              <div>
                <h1>{status}</h1>
                <button type="button" onClick={playAgain}>
                  PLAY AGAIN
                </button>
              </div>
            </div>
          )

          return (
            <div className="game-container">
              <div>
                <div>
                  {userComponent ? (
                    resultComponent()
                  ) : (
                    <ul className="coins-container">
                      {choicesList.map(each => {
                        const updateUserChoice = () => {
                          makeUserChoice(each, ranChoice)
                        }

                        return (
                          <li key={each.id}>
                            <button
                              data-testid={each.alt}
                              type="button"
                              onClick={updateUserChoice}
                            >
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
                <Popup
                  modal
                  trigger={
                    <button
                      type="button"
                      className="rules-button"
                      onClick={this.ruleImg}
                    >
                      Rules
                    </button>
                  }
                >
                  {close => (
                    <div>
                      <button type="button" onClick={() => close()}>
                        <RiCloseLine />
                      </button>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                        alt="rules"
                      />
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          )
        }}
      </GameContext.Consumer>
    )
  }
}

export default Game

// console.log(choicesList[Math.floor(Math.random() * choicesList.length)])
//   console.log(Math.random() * choicesList.length)
//       console.log(Math.floor(Math.random() * choicesList.length))

//   console.log(`systemChoice in Game Component ${systemChoice.id}`)
