import React, { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p>
    </div>
  )
}
const App = () => {
  const [good, Good] = useState(0)
  const [neutral, Neutral] = useState(0)
  const [bad, Bad] = useState(0)

  const GClick = () => {
        Good(good + 1)
  }
  const NClick = () => {
    Neutral(neutral + 1)
  }
  const BClick = () => {
    Bad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
        <button onClick={GClick}>good</button>
        <button onClick={NClick}>neutral</button>
        <button onClick={BClick}>bad</button>
        <Statistics good={good} 
                    neutral={neutral} 
                    bad={bad}
                    all={good+bad+neutral}
                    average={(good-bad)/(good+neutral+bad)}
                    positive={(good/(good+bad+neutral))*100}/>
    </div>
  )
}

export default App