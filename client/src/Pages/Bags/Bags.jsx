import React from 'react'
import Header from '../../Components/Header/Header'
import Bread from '../../Components/Bread/Bread'
import OurProductsBread from '../../Components/Bread/OurProductsBread'
import ProductComp from '../../Components/ProductComp/ProductComp'
import Footer from '../../Components/Footer/Footer'
import './bags.css'
import Header1 from '../../Components/Header/Header1'
function Bags() {
  const Bag = [
    {
      imgSrc: "/assets/img/new-bags/laptop-bag.png",
      name: "Laptop Bag",
    },
    {
      imgSrc: "/assets/img/new-bags/duffel-bag.png",
      name: "Leatherite Duffel Bag",
    },
    {
      imgSrc: "/assets/img/new-bags/bag-01.png",
      name: "Bag-01",
    },
    {
      imgSrc: "/assets/img/new-bags/bag-02.png",
      name: "Bag-02",
    },
    {
      imgSrc: "/assets/img/new-bags/bag-03.png",
      name: "Bag-03",
    },
    {
      imgSrc: "/assets/img/new-bags/bag-04.png",
      name: "Bag-04",
    },
  ]
  return (
    <>
      <Header1 />
      <OurProductsBread pageTitle2={'Bags'} pagePath2={'/bags'} />
      <ProductComp products={Bag} />
      <Footer />
    </>
  )
}

export default Bags
