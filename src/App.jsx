import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Skill from './Components/Skill'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Main/>
      <hr/>
      <Skill/>
      <About/>
      <hr/>
      <Projects/>
      <hr/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
