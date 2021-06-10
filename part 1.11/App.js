import React, { useState } from 'react'
const Statistics = (props) => {
    if (props.allClicks.length != 0) {
      return (
       <div>
         <h1>statistics</h1>
       <table>
         <tr>
          <td>good</td>
          <td>{props.good}</td>
         </tr>
         <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
         </tr>
         <tr>
          <td>bad</td>
          <td>{props.bad}</td>
         </tr>
         <tr>
          <td>all</td>
          <td>{props.all}</td>
         </tr>
         <tr>
          <td>average</td>
          <td>{props.average}</td>
         </tr>
         <tr>
          <td>positive</td>
          <td>{props.positive}%</td>
         </tr>
      </table>
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