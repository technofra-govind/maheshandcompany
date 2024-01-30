import React from 'react'
import Header from '../../Components/Header/Header'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'
import Footer from '../../Components/Footer/Footer'

function Bags() {
  const Bag=[
    {
      imgSrc: "/src/assets/img/new-bags/laptop-bag.png",
      name: "Laptop Bag",
    },
    {
      imgSrc: "/src/assets/img/new-bags/duffel-bag.png",
      name: "Leatherite Duffel Bag",
    },
    {
      imgSrc: "/src/assets/img/new-bags/bag-01.png",
      name: "Bag-01",
    },
    {
      imgSrc: "/src/assets/img/new-bags/bag-02.png",
      name: "Bag-02",
    },
    {
      imgSrc: "/src/assets/img/new-bags/bag-03.png",
      name: "Bag-03",
    },
    {
      imgSrc: "/src/assets/img/new-bags/bag-04.png",
      name: "Bag-04",
    },
  ]
  return (
    <>
    <Header/>
    <Bread pageTitle={'Bags'} pagePath={'/bags'}/>
    <ProductComp products={Bag}/>
    <Footer/>

    </>
  )
}

export default Bags
