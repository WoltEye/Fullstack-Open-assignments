import React from 'react';

const Header = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = ({name, exercise}) => {
  return (
    <p>{name} {exercise}</p>
  )
}

const Content = ({parts, exercises}) => {
  return (
    <>
    {
    parts.map(item =>
      <Part
      name={item.name}
      exercise={item.exercises}
      key={item.id}/>
    )}
      <Total exercises={exercises} />
    </>
  )
}

const Total = ({exercises}) => {
  const sum = exercises.reduce((accumulator, currentVal) => accumulator + currentVal, 0)
  return (
    <strong>Number of exercises {sum}</strong> 
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name}/>
      <Content 
      parts={course.parts}
      exercises={course.parts.map(part => part.exercises)}/>
    </>
  )
}

export default Course
