import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GridSimple from './page/GridSimple'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GridSimple />
  )
}

export default App
