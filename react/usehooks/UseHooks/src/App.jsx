import { useState , useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState(1);
  const [ tabData , setTabData] = useState({})
  const [ loading , setLoading] = useState(true);
 
  useEffect(() =>{

    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/"+ todo)
    .then(async (res) =>{
      const json =  await res.json();
      setTabData(json);
      setLoading(false);
    })
  },[todo])

  return (
    <>
      
     <button onClick={() => {setTodo(1)}}>Todo 1</button>
     <button onClick={() => {setTodo(2)}}>Todo 2</button>
     <button onClick={() => {setTodo(3)}}>Todo 3</button>
     <button onClick={() => {setTodo(4)}}>Todo 4</button>

      {loading ? "Loading..." : tabData.title} 
    </>
  )
}

export default App
