import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'
import Header1 from '../../Components/Header/Header1'

export default function ShirtandTShirt() {

    const Shirts = [
        {
            imgSrc: "/assets/img/shirt-t-shirt/t-shirt-01.png",
            name: "T-Shirt 01",
        },
        {
            imgSrc: "/assets/img/shirt-t-shirt/t-shirt-02.png",
            name: "T-Shirt 02",
        },
        {
            imgSrc: "/assets/img/shirt-t-shirt/t-shirt-03.png",
            name: "T-Shirt 03",
        },
        {
            imgSrc: "/assets/img/shirt-t-shirt/t-shirt-04.png",
            name: "T-Shirt 04",
        },
        {
            imgSrc: "/assets/img/shirt-t-shirt/t-shirt-05.png",
            name: "T-Shirt 05",
        },
        {
            imgSrc: "/assets/img/shirt-t-shirt/shirt-01.png",
            name: "Shirt 01",
        },
        {
            imgSrc: "/assets/img/shirt-t-shirt/shirt-02.png",
            name: "Shirt 02",
        }
    ];

    return (
        <>
            <Header1 />
            <Bread pageTitle={'Shirt & T-Shirts '} pagePath={'/shirtandtShirt'} />
            <ProductComp products={Shirts} />
            <Footer />
        </>
    )
}
