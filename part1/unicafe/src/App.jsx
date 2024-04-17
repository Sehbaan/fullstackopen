import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}> {props.text} </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <th>{props.text}</th><th>{props.value}</th>
    </tr>
  )
}

const Statistics = (props) => {
  var all = props.bad + props.neutral + props.good
  if(all==0){
    return(
      <p>no feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good}></StatisticLine>
          <StatisticLine text='neutral' value={props.neutral}></StatisticLine>
          <StatisticLine text='bad' value={props.bad}></StatisticLine>
          <StatisticLine text='all' value={all}></StatisticLine>
          <StatisticLine text='average' value={(props.good - props.bad)/all}></StatisticLine>
          <StatisticLine text='positive' value={(props.good/all)*100}></StatisticLine>
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