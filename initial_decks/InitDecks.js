import {capitals} from './usaCapitals'
import {elements} from './elements'

export function UsaStates(){
  const quiz = capitals.map(set => ({
    question: `What is the capital of ${set.state}?`,
    answer: set.capital
  }))

  return quiz
}

export function Elements(){
  const quiz = elements.map(set => ({
    question: `What is the chemical element for the following symbol: ${set.symbol}?`,
    answer: set.name
  }))

  return quiz
}
