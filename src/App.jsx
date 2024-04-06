import { useState } from 'react'
import './App.css'
import Addlist from './components/Addlist'
import Display from './components/Display'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Addlist></Addlist>
    <Display></Display>
    </>
  )
}

export default App
