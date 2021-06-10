import React, { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </div>
  )
}
const App = () => {
  const [good, Good] = useState(0)
  const [neutral, Neutral] = useState(0)
  const [bad, Bad] = useState(0)
  const GoodClick = () => {
        Good(good + 1)
  }
  const NeutralClick = () => {
    Neutral(neutral + 1)
  }
  const BadClick = () => {
    Bad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
        <button onClick={GoodClick}>good</button>
        <button onClick={NeutralClick}>neutral</button>
        <button onClick={BadClick}>bad</button>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App