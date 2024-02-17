import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ProductCompSpace from '../../Components/ProductComp/ProductCompSpace'
import OurProductsBread from '../../Components/Bread/OurProductsBread'
import Header1 from '../../Components/Header/Header1'

export default function SpacePens() {

    const Spacepens = [
        {
            imgSrc: "/assets/img/spacepens/1.png",
        },
        {
            imgSrc: "/assets/img/spacepens/2.png",
        },
        {
            imgSrc: "/assets/img/spacepens/3.png",
        },
        {
            imgSrc: "/assets/img/spacepens/4.png",
        },
        {
            imgSrc: "/assets/img/spacepens/5.png",
        },
        {
            imgSrc: "/assets/img/spacepens/6.png",
        },
        {
            imgSrc: "/assets/img/spacepens/7.png",
        },
        {
            imgSrc: "/assets/img/spacepens/8.png",
        },
        {
            imgSrc: "/assets/img/spacepens/9.png",
        },
        {
            imgSrc: "/assets/img/spacepens/10.png",
        },
        {
            imgSrc: "/assets/img/spacepens/11.png",
        },
        {
            imgSrc: "/assets/img/spacepens/12.png",
        },
        {
            imgSrc: "/assets/img/spacepens/13.png",
        },
        {
            imgSrc: "/assets/img/spacepens/14.png",
        },
        {
            imgSrc: "/assets/img/spacepens/15.png",
        },
    ];
    return (
        <>
            <Header1 />
            <OurProductsBread pageTitle2={'Space Pens'} pagePath2={'/spacepens'} />
            <ProductCompSpace products1={Spacepens} />
            <Footer />
        </>
    )
}
