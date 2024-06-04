import React from 'react'
import Counter from './components/Counter'
import { useContext } from 'react'
import { ConterContext } from './Context/Counter.jsx'
 
  

const App = () => {
  const counterState=useContext(ConterContext)
  console.log('Context',counterState)
  return (
    <div className='App'>
      <h1>count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>  
      <Counter/>
    </div>
  )
}

export default App