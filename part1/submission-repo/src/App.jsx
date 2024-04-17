import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = ({course}) => { <h1>{course.name}</h1> }

const Content = ({course}) => {
  return (
    <div>
      <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
    </div>
  )
}

const Total =({course}) => {
  return (
    <p>Number of exercisess: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
  )
}

const Part = ({part, exercises}) => {
  return (
    <p>
      Part: {part}, exercises: {exercises}
    </p>
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App

