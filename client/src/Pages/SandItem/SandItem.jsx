import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'

export default function SandItem() {
  
  const SandItems=[
    {
      imgSrc: "/assets/img/sand-timers/sand-timer-with-compass-base.png",
      name: "Sand Timer With Compass Base",
    },
    {
      imgSrc: "/assets/img/sand-timers/5-minutes-sand-timer.png",
      name: "5 Minutes Sand Timer",
    },
    {
      imgSrc: "/assets/img/sand-timers/15-minutes-sand-timer.png",
      name: "15 Minutes Sand Timer",
    },
    {
      imgSrc: "/assets/img/sand-timers/double-sand-timer.png",
      name: "Double Sand Timer",
    },
  ];

  return (
   <>
   <Header/>
   <Bread pageTitle={'Sand Items'} pagePath={'/sanditems'}/>
   <ProductComp products={SandItems}/>
   <Footer/>
   </>
  )
}
