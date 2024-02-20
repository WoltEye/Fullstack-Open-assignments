import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({value, text}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => { 

  const getAvg = (...nums) => {
    let sum = 0;
    for(let num of nums) sum+= num;
    return sum / nums.length
  }

  const positivePrecentage = good ? good / (good + neutral + bad) * 100 : 0;

  const hasFeedback = good || neutral || bad ? true : false

  return (
    <>
      { hasFeedback ?
          <table>
            <thead>
              <tr>
                <th>Statistics</th>
              </tr>
            </thead>
            <tbody>
              <StatisticLine
              text="good"
              value={good}/>
              <StatisticLine
              text="neutral"
              value={neutral}/>
              <StatisticLine
              text="bad"
              value={bad}/>
              <StatisticLine
              text="average"
              value={getAvg(good, neutral, bad)}/>
              <StatisticLine 
              text="positive"
              value={`${positivePrecentage}%`}/>
            </tbody>
          </table>
          : <p>No feedback given</p>
      }
    </>
  )  
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const vote = choice => {
    switch(choice) {
      case 'good': 
        setGood(prev => prev + 1)
        break;
      case 'neutral':
        setNeutral(prev => prev + 1)
        break;
      case 'bad':
        setBad(prev => prev + 1)
        break;
    }
  }


  return (
    <div>
      <Button 
      handleClick={() => { vote('good') }} 
      text="good"/>
      <Button 
      handleClick={() => { vote('neutral') }} 
      text="neutral"/>
      <Button 
      handleClick={() => { vote('bad') }} 
      text="bad"/>
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}/>
    </div>
  )
}

export default App
