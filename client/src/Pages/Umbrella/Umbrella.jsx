import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ProductComp from '../../Components/ProductComp/ProductComp'
import OurProductsBread from '../../Components/Bread/OurProductsBread'
import Header1 from '../../Components/Header/Header1'

export default function Umbrella() {

    const Umbrellas = [
        {
            imgSrc: "/assets/img/umbrella/umbrella-01.png",
            name: "Umbrella-01",
        },
        {
            imgSrc: "/assets/img/umbrella/umbrella-02.png",
            name: "Umbrella-02",
        },
        {
            imgSrc: "/assets/img/umbrella/umbrella-03.png",
            name: "Umbrella-03",
        },
        {
            imgSrc: "/assets/img/umbrella/umbrella-04.png",
            name: "Umbrella-04",
        },
        {
            imgSrc: "/assets/img/umbrella/umbrella-05.png",
            name: "Umbrella-05",
        },
    ];

    return (
        <>
            <Header1 />
            <OurProductsBread pageTitle2={'Umbrella'} pagePath2={'/umbrella'} />
            <ProductComp products={Umbrellas} />
            <Footer />
        </>
    )
}
