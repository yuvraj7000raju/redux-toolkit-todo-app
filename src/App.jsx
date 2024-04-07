import { useState } from 'react'
import './App.css'
import Addlist from './components/Addlist'
import Display from './components/Display'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
     <Addlist></Addlist>
    <Display></Display>
    </div>
  )
}

export default App
