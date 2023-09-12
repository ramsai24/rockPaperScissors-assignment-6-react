import GameContext from '../../Context/GameContext'
import './index.css'

const Header = () => (
  <GameContext.Consumer>
    {value => {
      const {score, choicesList} = value
      return (
        <div className="header-container">
          <h1>ROCK PAPER SCISSORS</h1>
          <div>
            <p>Score</p>
            <h1>{score}</h1>
          </div>
        </div>
      )
    }}
  </GameContext.Consumer>
)

export default Header
