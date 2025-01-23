import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p>
      Number of exercises: {total}
    </p>
  );
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];
  

  return (
    <>
      <Header course={course} />

      <Content parts={parts} />

      <Total parts={parts} />
      
    </>
  )
}

export default App
