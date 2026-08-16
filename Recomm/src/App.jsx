import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Fetching from './components/data'
import Header from './components/header'
import Menu from './components/menu/index.jsx'
import Filter from './components/filter/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen'>
      <Fetching/>
      <div>
        <Header/>
      </div>
      <div className='grid grid-cols-[4fr_250px] p-6'>
        <div>
          <Menu/>
        </div>
        <div>
          <Filter/>
        </div>
        
      </div>

    </div>
  )
}

export default App
