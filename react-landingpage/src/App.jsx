import { useState } from 'react'
import './App.css'

// Components
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import InfoOne from './Components/InfoOne'
import InfoTwo from './Components/InfoTwo'
import CTA from './Components/CTA'
import Reviews from './Components/Reviews'
import GetInTouch from './Components/GetInTouch'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <InfoOne/>
      <InfoTwo/>
      <CTA/>
      <Reviews/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}

export default App
