'use Client'
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import SliderBanner from '../../Components/SliderBanner/SliderBanner'
import HomenewArraval from '../../Components/Homenewarrival/HomenewArraval'
import OurProducts from '../../Components/OurProducts/OurProducts'
import Header1 from '../../Components/Header/Header1'
import Header from '../../Components/Header/Header'
function Home() {
  return (
    <>
      <Header1 />
      <SliderBanner />
      <OurProducts />
      <HomenewArraval />
      <Footer />
    </>
  )
}

export default Home
