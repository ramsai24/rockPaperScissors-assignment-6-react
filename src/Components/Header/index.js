import GameContext from '../../Context/GameContext'
import {Para} from './styleComponent'
import './index.css'

const Header = () => (
  <GameContext.Consumer>
    {value => {
      const {score, choicesList} = value
      return (
        <div className="header-container">
          <h1>ROCK PAPER SCISSORS</h1>
          <div>
            {/* <p className="score-para"></p> */}
            <Para className="score-para" fontFamily="Roboto">
              Score {`${score}`}
            </Para>
          </div>
        </div>
      )
    }}
  </GameContext.Consumer>
)

export default Header
