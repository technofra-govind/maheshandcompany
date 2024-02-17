import React from 'react'

import Footer from '../../Components/Footer/Footer'
// import Header from '../../Components/Header/Header'
import Bread from '../../Components/Bread/Bread'
import Aboutcom from '../../Components/Aboutcom/Aboutcom'
import Header1 from '../../Components/Header/Header1'

function About() {
  return (
   <>
   <Header1/>
   <Bread pageTitle="About Us" pagePath="/about" />
   <Aboutcom/>
   <Footer/>
   </>
  )
}

export default About

