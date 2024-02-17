import React from 'react'
// import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import GenContactForm from '../../Components/GenContactForm/GenContactForm'
import ConactBread from '../../Components/Bread/ContactBread'
import Header1 from '../../Components/Header/Header1'


function Contact() {
  return (
    <>
      <Header1 />
      <ConactBread pageTitle1="Contact Us" pagePath1="/contact" />
      <GenContactForm />
      <Footer />
    </>
  )
}

export default Contact
