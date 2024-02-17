import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'
import OurProductsBread from '../../Components/Bread/OurProductsBread'
import Header1 from '../../Components/Header/Header1'

export default function Crystal() {

  const Crystals = [
    {
      imgSrc: "/assets/img/crystal/glass-candle-with-fragrance.png",
      name: "Glass Candle With Fragrance",
    },
    {
      imgSrc: "/assets/img/crystal/swan-shape-candle-with-fragrance.png",
      name: "Swan Shape Candle with Fragrance",
    },
    {
      imgSrc: "/assets/img/crystal/tulip-shaped-revolving-tea-light-holder.png",
      name: "Tulip Shaped Revolving Tea Light Holder",
    },
    {
      imgSrc: "/assets/img/crystal/perfume-glass-candles.png",
      name: "Perfume Glass Candles",
    },
    {
      imgSrc: "/assets/img/crystal/heart-clear-glass-paper-weight.png",
      name: "Heart Clear Glass Paper Weight",
    },
    {
      imgSrc: "/assets/img/crystal/heart-glass-paper-weight.png",
      name: "Heart Glass Paper Weight",
    },
    {
      imgSrc: "/assets/img/crystal/bubble-vintage-paper-weight.png",
      name: "Bubble Vintage Paper Weight",
    },
    {
      imgSrc: "/assets/img/crystal/crystal-ball-paper-weight.png",
      name: "Crystal Ball Paper Weight",
    },
    {
      imgSrc: "/assets/img/crystal/heart-vase-pen-stand.png",
      name: "Heart Vase Pen Stand",
    },
    {
      imgSrc: "/assets/img/crystal/diamond-pen-holder-mobile-holder.png",
      name: "Diamond Pen Holder & Mobile Holder",
    },
    {
      imgSrc: "/assets/img/crystal/golden-vase-fragrance-paper-weight.png",
      name: "Golden Vase Fragrance Paper Weight",
    },
    {
      imgSrc: "/assets/img/crystal/cricket-table-top1.png",
      name: "Cricket Table Top",
    },
    {
      imgSrc: "/assets/img/crystal/gratia-holi-colours.png",
      name: "Gratia Holi Color's",
    },
  ];

  return (
    <>
      <Header1 />
      <OurProductsBread pageTitle2={'Crystal'} pagePath2={'/crystal'} />
      <ProductComp products={Crystals} />
      <Footer />
    </>
  )
}
