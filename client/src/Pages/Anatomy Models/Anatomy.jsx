import React from 'react'
import Header from '../../Components/Header/Header'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'
import Footer from '../../Components/Footer/Footer'
import OurProductsBread from '../../Components/Bread/OurProductsBread'
import Header1 from '../../Components/Header/Header1'
// import './bags.css'
function Anatomy() {
    const AnatomyModels = [
        {
            imgSrc: "/assets/img/anatomy-models/esophagus-model.png",
            name: "Esophagus Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/sinus-model.png",
            name: "Sinus Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/thyroid-model.png",
            name: "Thyroid Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/lungs-model.png",
            name: "Lungs Model 1",
        },
        {
            imgSrc: "/assets/img/anatomy-models/lungs-model-1.png",
            name: "Lungs Model 2",
        },
        {
            imgSrc: "/assets/img/anatomy-models/bladder-model.png",
            name: "Bladder Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/uterus-model.png",
            name: "Uterus Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/breast-model.png",
            name: "Breast Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/pancreas-table-top.png",
            name: "Pancreas Table Top",
        },
        {
            imgSrc: "/assets/img/anatomy-models/female-pelvis.png",
            name: "Female Pelvis",
        },
        {
            imgSrc: "/assets/img/anatomy-models/rectum-model.png",
            name: "Rectum Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/skin-model.png",
            name: "Skin Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/teeth-with-braces-model.png",
            name: "Teeth with Braces Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/normal-teeth-model.png",
            name: "Normal Teeth Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/knee-model.png",
            name: "Knee Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/palm-model.png",
            name: "Palm Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/elbow-model.png",
            name: "Elbow Model",
        },
        {
            imgSrc: "/assets/img/anatomy-models/acrylic-prostate-model.png",
            name: "Acrylic And Plastics Prostate Model",
        },
    ]
    return (
        <>
            <Header1 />
            <OurProductsBread pageTitle2={'Anatomy Models'} pagePath2={'/anatomy'} />
            <ProductComp products={AnatomyModels} />
            <Footer />
        </>
    )
}

export default Anatomy
