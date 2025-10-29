import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ counter , setCounter] = useState(0);

  return (
    <>
     <h2>Counter : {counter}</h2>
     <button onClick={() =>{setCounter(counter+1)}}>Increment Counter</button>
     <button  onClick={() =>{setCounter(counter-1)}}>Decerement Counter </button>
    </>
  )
}

export default App
