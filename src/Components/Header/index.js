import GameContext from '../../Context/GameContext'
import './index.css'

const Header = () => (
  <GameContext.Consumer>
    {value => {
      const {score, choicesList} = value
      return (
        <div className="header-container">
          <ul>
            {choicesList.map(each => (
              <li key={each.id}>{each.id}</li>
            ))}
          </ul>
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
