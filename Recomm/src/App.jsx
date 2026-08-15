import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Fetching from './components/data'
import Header from './components/header'
import Menu from './components/menu/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Menu/>
    </>
  )
}

export default App
