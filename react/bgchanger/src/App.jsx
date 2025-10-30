import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({colorName = 'Default Color'}) {
  const [color, setColor] = useState('#1f2937')

  return (
    <>
      <div className=' bg-gray-800  w-full  h-screen  flex justify-center ' style={{backgroundColor: color}}>
          
          <div className='w-80 h-15 bg-white fixed bottom-15 rounded-4xl flex justify-center gap-2 items-center'>
               <button className='bg-red-600  rounded-4xl w-20 h-10 text-white cursor-pointer'
               onClick={() => setColor('red')}>{colorName}</button> 
              <button className='bg-green-600  rounded-4xl w-20 h-10 text-white cursor-pointer'
              onClick={() => setColor('green')}>Green</button>
               <button className='bg-blue-600  rounded-4xl w-20 h-10 text-white cursor-pointer'
               onClick={() => setColor('blue')}>Blue</button>     
               
          </div>
       
      </div>
      
    </>
  )
}

export default App
