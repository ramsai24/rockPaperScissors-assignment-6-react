import React from 'react'

const GameContext = React.createContext({
  choicesList: [],
  userChoice: '',
  systemChoice: '',
  score: 0,
  userComponent: false,
  makeUserChoice: () => {},
  playAgain: () => {},
  status: '',
  userId: '',
  systemId: '',
})

export default GameContext
