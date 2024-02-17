import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'
import OurProductsBread from '../../Components/Bread/OurProductsBread'
import Header1 from '../../Components/Header/Header1'

export default function Metal() {

  const Metals = [
    {
      imgSrc: "/assets/img/metal/indian-flag-with-table-clock.png",
      name: "Indian Flag With Table Clock",
    },
    {
      imgSrc: "/assets/img/metal/metal-heart-pen-stand.png",
      name: "Metal Heart Pen Stand",
    },
    {
      imgSrc: "/assets/img/metal/peacock-table-clock.png",
      name: "Peacock Table Clock",
    },
    {
      imgSrc: "/assets/img/metal/dr-logo-metal-pen-stand.png",
      name: "Dr. Logo Metal Pen Stand",
    },
    {
      imgSrc: "/assets/img/metal/flexible-spring-pen-stand.png",
      name: "Flexible Spring Pen Stand",
    },

  ];

  return (
    <>
      <Header1 />
      <OurProductsBread pageTitle2={'Metal'} pagePath2={'/metal'} />
      <ProductComp products={Metals} />
      <Footer />
    </>
  )
}
