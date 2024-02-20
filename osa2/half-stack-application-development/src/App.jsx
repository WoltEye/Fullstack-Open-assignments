import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part 
      name={props.names[0]}
      exercise={props.exercises[0]}/>
      <Part 
      name={props.names[1]}
      exercise={props.exercises[1]}/>
      <Part 
      name={props.names[2]}
      exercise={props.exercises[2]}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p> 
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
      <Header course={course.name}/>
      <Content 
      names={course.parts.map(part => part.name)}
      exercises={course.parts.map(part => part.exercises)}/>
      <Total exercises={course.parts.map(part => part.exercises)} />
    </div>
  )
}

export default App
