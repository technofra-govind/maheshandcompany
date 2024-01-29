import React from 'react'

import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Bread from '../../Components/Bread/Bread'
import Aboutcom from '../../Components/Aboutcom/Aboutcom'
import TeamSection from '../../Components/TeamSection/TeamSection'
import TestimonialSection from '../../Components/TestimonialSection/TestimonialSection'

function About() {
  return (
   <>
   <Header/>
   <Bread pageTitle="About Us" pagePath="/about" />
   <Aboutcom/>
   <TeamSection/>
   <TestimonialSection/>
   <Footer/>
   </>
  )
}

export default About

