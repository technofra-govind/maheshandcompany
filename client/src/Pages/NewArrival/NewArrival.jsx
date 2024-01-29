import React from 'react'
import Bread from '../../Components/Bread/Bread'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import NewAr from '../../Components/NewAr/NewAr'

function NewArrival() {
  return (
   <>
   <Header/>
   <Bread pageTitle={'New Arrival'} pagePath={"/newarrival"}/>
   <NewAr/>
   <Footer/>
   </>
  )
}

export default NewArrival
