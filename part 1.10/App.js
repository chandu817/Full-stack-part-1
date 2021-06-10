import React, { useState } from 'react'
const Button = ({text,event }) => {
    return <button onClick={event}>{text}</button>;
};

const Statistic = ({ text, value}) => {
    return (
        <span>
            {text} {value}
        </span>
    );
};
const Statistics = (props) => {
    if (props.allClicks.length != 0) {
      return (
         <div>
           <h1>statistics</h1>
            <p><Statistic text="good" value={props.good}/></p>
            <p><Statistic text="neutral" value={props.neutral}/></p>
            <p><Statistic text="bad" value={props.bad}/></p>
            <p><Statistic text="all" value={props.all}/></p>
            <p><Statistic text="average" value={props.average}/></p>
            <p><Statistic text="positive" value={props.positive}/>%</p>
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
        <Button event={GClick} text="good"/>
        <Button event={NClick} text="neutral"/>
        <Button event={BClick} text="bad"/>
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