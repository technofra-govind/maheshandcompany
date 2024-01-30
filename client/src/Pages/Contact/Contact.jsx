import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Bread from '../../Components/Bread/Bread'
import GenContactForm from '../../Components/GenContactForm/GenContactForm'

function Contact() {
  return (
    <>
    <Header/>
    <Bread pageTitle="Contact Us" pagePath="/contact" />
    <GenContactForm/>
    <Footer/>

    </>
  )
}

export default Contact
