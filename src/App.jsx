import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Courses from './components/Courses/Courses'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testomonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'
const App = () => {
const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title  subTitle='Our PROGRAM' title='What We Offer'/>
        <Courses/>
        <About setPlayState={setPlayState} />
        <Title  subTitle='Gallery' title='School Photos'/>
        <Campus/>
        <Title  subTitle='TESTIMONIALS' title='What Students Says'/>
        <Testimonial/>
        <Title  subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>        
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
