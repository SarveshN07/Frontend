import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './useFetch'

function App() {
  const [tab , setTab] = useState(1);
  const { data ,loading} = useFetch('https://jsonplaceholder.typicode.com/todos/'+ tab)
  
  if(loading){
        return <h2>Loading....</h2>
      }
  return (
    <>
      

      <h1>THis is the data Below</h1>
        Data:{data.title};
        <br/>
        <br/>
        <br/>
        <br/>
        <button onClick={() =>{
          setTab(1);
        }}> Todo 1 </button>
        <button onClick={() =>{
          setTab(2);
        }}> Todo 2 </button>
        <button onClick={() =>{
          setTab(3);
        }}> Todo 3 </button>
        <button onClick={() =>{
          setTab(4);
        }}> Todo 4 </button>
       
    </>
  )
}

export default App
