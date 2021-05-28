import React from 'react'
const Course = (props) => {
  return (
    <div>
      <p>{props.Course}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <>
        course={course}
      </>
      <p>
        part1:-name={part1.name},Exercises={part1.exercises} 
        
      </p>
      <p>
       part2:-name={part2.name},Exercises={part2.exercises} 
      </p>
      <p>
        part3:-name={part3.name},Exercises={part3.exercises} 
      </p>
    </div>
  )
}
export default App