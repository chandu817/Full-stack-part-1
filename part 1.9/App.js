import React, { useState } from 'react'
const Statistics = (props) => {
    if (props.allClicks.length != 0) {
      return (
        <div>
         <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
      </div>
      )
    }
    return (
      <div>
          <h1>Statistics</h1>
          No feedback is given
        </div>
    )
  }
const App = () => {
  const [good, Good] = useState(0)
  const [neutral, Neutral] = useState(0)
  const [bad, Bad] = useState(0)
  const [allClicks, All] = useState([])

  const GClick = () => {
    All(allClicks.concat(''))
        Good(good + 1)
  }
  const NClick = () => {
    All(allClicks.concat(''))
    Neutral(neutral + 1)
  }
  const BClick = () => {
    All(allClicks.concat(''))
    Bad(bad + 1)
  }
  
    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={GClick}>good</button>
        <button onClick={NClick}>neutral</button>
        <button onClick={BClick}>bad</button>
        <Statistics allClicks={allClicks} 
                    good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    all={good+bad+neutral} 
                    average={(good-bad)/(good+neutral+bad)} 
                    positive={(good/(good+bad+neutral))*100}/>
      </div>
    )
  }
export default App