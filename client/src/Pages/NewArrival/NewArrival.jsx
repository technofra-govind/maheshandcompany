import React from 'react'
import Bread from '../../Components/Bread/Bread'
// import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import NewAr from '../../Components/NewAr/NewAr'
import Header1 from '../../Components/Header/Header1'

function NewArrival() {
  return (
    <>
      <Header1 />
      <Bread pageTitle={'New Arrivals'} pagePath={"/newarrival"} />
      <NewAr />
      <Footer />
    </>
  )
}

export default NewArrival
