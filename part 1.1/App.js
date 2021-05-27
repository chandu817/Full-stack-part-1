import React from 'react'
const Header = (props) => {
  return (
    <div>
      <p>Header = {props.course} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Content = Part1 = {props.part1}, Execercises1 = {props.exercises1}</p>
      <p>Content = Part2 = {props.part2}, Execercises2 = {props.exercises2}</p>
      <p>Content = Part3 = {props.part3}, Execercises3 = {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total = {props.Total}</p>
    </div>
    )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} 
               part2={part2} exercises2={exercises2} 
               part3={part3} exercises3={exercises3}  />
      <Total Total={exercises1 + exercises2 +exercises3} />
    </>
  )
}

export default App