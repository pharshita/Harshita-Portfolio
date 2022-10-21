import React from 'react'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import Education from '../Components/Education/Education'
import Navbar from '../Components/Navbar/Navbar'
import Portfolio from '../Components/Portfolio/Portfolio'
import Services from '../Components/Services/Services'
import Skill from '../Components/Skills/Skill'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <About />
        <Education/>
        <Services/>
        <Portfolio/>
        <Skill/>
        <Contact/>
    </div>
  )
}
