import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Info from './components/Info.jsx'
import About from './components/About.jsx'
import Interest from './components/Interest.jsx'
import Footer from './components/Footer.jsx'

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='card'>
      <Info/>
      <About/>
      <Interest/>
      <Footer/>
    </main>
  )
}

export default App
