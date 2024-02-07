import React from 'react'
import Navebar from './component/Navebar'
import Header from './component/Header'
import About from './component/About'
import Courses from './component/course'
import Resume from './component/Resume'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Certificate from './component/Certificate'

import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div>

      <Navebar />
      <Header />
      <About />
      <Courses />
      <Resume />
      <Certificate />
      <Contact />
      <Footer />

      <ScrollToTop smooth color='#fff' style={{ backgroundColor: '#00b4d9' }} />
    </div>
  )
}

export default App
