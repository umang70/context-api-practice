import React ,{useContext} from 'react'
import { ConterContext } from '../Context/Counter'; 

const Counter = () => {
  const CounterContext = useContext(ConterContext)
  return (
    <div>
        <button onClick={()=>{CounterContext.setCount(CounterContext.count+1)}}>increment</button>
        <button   onClick={()=>{CounterContext.setCount(CounterContext.count-1)}} >decrement</button>
    </div>
  )
}

export default Counter;