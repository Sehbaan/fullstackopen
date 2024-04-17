import { useState } from 'react'

const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}> {text} </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <th>{text}</th><th>{value}</th>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  var all = bad + neutral + good
  if(all==0){
    return(
      <p>no feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={good}></StatisticLine>
          <StatisticLine text='neutral' value={neutral}></StatisticLine>
          <StatisticLine text='bad' value={bad}></StatisticLine>
          <StatisticLine text='all' value={all}></StatisticLine>
          <StatisticLine text='average' value={(good - bad)/all}></StatisticLine>
          <StatisticLine text='positive' value={(good/all)*100}></StatisticLine>
        </tbody>
      </table>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='Give Feedback'></Header>
      <Button handleClick={() => {setGood(good+1)}} text='good'></Button>
      <Button handleClick={() => {setNeutral(neutral+1)}} text='neutral'></Button>
      <Button handleClick={() => {setBad(bad+1)}} text='bad'></Button>
      <Header text='Statistics'></Header>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App