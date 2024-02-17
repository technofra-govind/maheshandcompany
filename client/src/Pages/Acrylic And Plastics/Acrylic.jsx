import React from 'react'
// import Header from '../../Components/Header/Header'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'
import Footer from '../../Components/Footer/Footer'
import OurProductsBread from '../../Components/Bread/OurProductsBread'
import Header1 from '../../Components/Header/Header1'
// import './bags.css'
function Acrylic() {
    const Acrylics = [
        {
            imgSrc: "/assets/img/acrylic/Acrylic-Tablet-Paper-Weight1.png",
            name: "Acrylic Tablet Paper Weight",
        },
        {
            imgSrc: "/assets/img/acrylic/Smiley-Balancing-Paper-Weight.png",
            name: "Smiley Balancing Paper Weight",
        },
        {
            imgSrc: "/assets/img/acrylic/3-in-1-Smiley-Paper-Weight.png",
            name: "3 in 1 Smiley Paper Weight",
        },
        {
            imgSrc: "/assets/img/acrylic/First-Aid-Kit.png",
            name: "First Aid Kit",
        },
        {
            imgSrc: "/assets/img/acrylic/Diabetes-Eye-Table-Top.png",
            name: "Diabetes Eye Table Top",
        },
        {
            imgSrc: "/assets/img/acrylic/Pyramid-Pen-Stand.png",
            name: "Pyramid Pen Stand",
        },
        {
            imgSrc: "/assets/img/acrylic/Acrylic-Tablet-Paper-Weight2.png",
            name: "Acrylic Tablet Paper Weight",
        },
        {
            imgSrc: "/assets/img/acrylic/Acrylic-Uterus-Education-Chart.png",
            name: "Acrylic Uterus Education Chart",
        },
        {
            imgSrc: "/assets/img/acrylic/Mobile-Stand.png",
            name: "NO. 1 Mobile Stand",
        },
        {
            imgSrc: "/assets/img/acrylic/Acrylic-Knee-Stages.png",
            name: "Acrylic Knee Stages",
        },
        {
            imgSrc: "/assets/img/acrylic/Mascot-QR-Standee.png",
            name: "Mascot QR Standee",
        },
        {
            imgSrc: "/assets/img/acrylic/Clock-with-Mobile-Pen-Stand.png",
            name: "Clock with Mobile & Pen Stand",
        },
        {
            imgSrc: "/assets/img/acrylic/Allergic-Chit-Pad-Holder.png",
            name: "Allergic Chit Pad Holder",
        },
        {
            imgSrc: "/assets/img/acrylic/Ampule-Cotton-Dispenser.png",
            name: "Ampule Cotton Dispenser",
        },
        {
            imgSrc: "/assets/img/acrylic/Acrylic-Chit-Pad-Holder.png",
            name: "Acrylic Chit Pad Holder",
        },
        {
            imgSrc: "/assets/img/acrylic/Calendar-With-Chit-Pad-Holder.png",
            name: "Calendar With Chit Pad Holder",
        },
    ]
    return (
        <>
            <Header1 />
            <OurProductsBread pageTitle2={'Acrylic And Plastics'} pagePath2={'/acrylic'} />
            <ProductComp products={Acrylics} />
            <Footer />
        </>
    )
}

export default Acrylic
