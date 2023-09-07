import React from 'react'

const GameContext = React.createContext({
  choicesList: [],
  userChoice: '',
  systemChoice: '',
  score: 0,
  userComponent: false,
  makeUserChoice: () => {},
  playAgain: () => {},
})

export default GameContext
