import React from 'react'
import './Counter.css'
const CounterLayout = ({children}) => {
  return (
    <div className='counter-background'>
        {children}
    </div>
  )
}

export default CounterLayout