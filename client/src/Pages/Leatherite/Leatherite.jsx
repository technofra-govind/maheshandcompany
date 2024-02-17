import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ProductComp from '../../Components/ProductComp/ProductComp'
import OurProductsBread from '../../Components/Bread/OurProductsBread'
import Header1 from '../../Components/Header/Header1'

export default function Leatherite() {

  const Leatherites = [
    {
      imgSrc: "/assets/img/leatherrite/writing-pad.png",
      name: "Writing Pad",
    },
    {
      imgSrc: "/assets/img/leatherrite/cubic-calendar.png",
      name: "Cubic Calendar",
    },
    {
      imgSrc: "/assets/img/leatherrite/multiple-organiser.png",
      name: "Multiple Organiser",
    },
    {
      imgSrc: "/assets/img/leatherrite/chit-pad-pen-holder.png",
      name: "Chit Pad, Mobile & Pen Holder ",
    },
    {
      imgSrc: "/assets/img/leatherrite/table-organiser.png",
      name: "Table Organiser",
    },
    {
      imgSrc: "/assets/img/leatherrite/chit-pad-mobile-pen-holder1.png",
      name: "Chit Pad & Pen Holder",
    }
  ];

  return (
    <>
      <Header1 />
      <OurProductsBread pageTitle2={'Leatherite'} pagePath2={'/leatherite'} />
      <ProductComp products={Leatherites} />
      <Footer />
    </>
  )
}
