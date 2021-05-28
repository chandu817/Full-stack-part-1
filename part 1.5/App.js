
import React from 'react'
const Header = (props) => {
  console.log(props)
  return (
  <div>
  <b>Header:-</b>
  <p>{props.course}</p>
  </div>
  )
}
const Content = ({parts}) => {
  const[part1,part2,part3] = parts;
  console.log(part1,part2,part3)
  return (
    <div>
      <b>Content:-</b>
      <p>
        part1={part1.name} ,{part1.exercises}
      </p>
      <p>
        part2={part2.name} ,{part2.exercises}
      </p>
      <p>
        part3={part3.name} ,{part3.exercises}
      </p>
    </div>
  )
}
const Total = ({parts}) => {
  const[part1,part2,part3] = parts;
  return (
    <div>
      <b>Total:-</b>
      <p>{part1.exercises+part2.exercises+part3.exercises}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
