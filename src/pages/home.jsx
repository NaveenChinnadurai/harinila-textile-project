import React from 'react'
import { IoIosArrowForward as Arrow } from "react-icons/io";
import bannerImg from '../assets/bannerImg/banner_1.png'
import aboutImg from '../assets/aboutImg.png'
import wovenFabric from '../assets/productImages/wovenFabric.png'
import cottonYarn from '../assets/productImages/cottonYarn.png'
import knittedFabric from '../assets/productImages/knittedFabric.png'

const productInfo = [
    {
        img: wovenFabric,
        title: " WOVEN FABRICS",
        para: "we weave excellence into every thread. Our high-quality fabrics blend durability with timeless elegance, crafted by skilled artisans in state-of-the-art facilities."
    },
    {
        img: cottonYarn,
        title: "COTTON YARN",
        para: "Elevate your textile creations with our premium cotton yarn, trusted by industry leaders worldwide. From garment manufacturers to wholesalers, we have the perfect yarn to meet your specific needs, ensuring excellence in every thread."
    },
    {
        img: knittedFabric,
        title: "KNITTED FABRICS",
        para: "Knitting Division, we excel in crafting premium knit fabrics for diverse industries. Our state-of-the-art machinery and skilled team ensure exceptional quality tailored to your specific requirements."
    },
]
function Home() {
    return (
        <div className='m-0 row d-flex flex-column'>
            <div className="row col-md-10 mx-auto d-flex flex-column">
                <h2 className="lead text-color-green display-1 fw-bold text-center opacity-50 mt-3"> Harinila Textiles</h2>
                <img src={bannerImg} alt="Banner Image" className=' img-fluid' />
                <h1 className="col-md-10 col-12 lead display-6 fw-bold text-center mx-auto mt-4 text-primary">Welcome to Our Woven Fabric mills Where Quality Meets Styles</h1>
                <p className="lead fs-5 text-lighter fw-medium text-center m-0">Harinila Weaves the Global with innovation</p>
                <div className="d-flex gap-2 justify-content-center align-items-center bg-green mx-auto my-2">
                    <span>Get Started </span>
                    <span className='d-flex'><Arrow /></span>
                </div>
            </div>
            <div className="row col-12 px-0 px-lg-5 mx-auto d-flex flex-column flex-md-row justify-content-center justify-content-ld-between align-items-center my-4">
                <div className='col-12 col-md-5 col-lg-6 px-3 d-flex flex-column gap-2'>
                    <h2 className="lead fs-3 fw-bold text-dark-blue">WHAT WE DO</h2>
                    <h1 className="lead display-6 fw-bold text-primary px-3 border-start border-5">Harinila Textiles, beyond exports we are working as multifunctional company</h1>
                    <div className='d-block d-md-none col-10 col-sm-7 mx-auto p-5'>
                        <img src={aboutImg} alt="About Image" className='img-fluid ' />
                    </div>
                    <p className='lead fs-5 fw-normal'>Active as a knowledge and innovation partner, creations and commercialization partner, marketing and sourcing partner for Textiles and Technical Textiles Value Chain. We are significantly contributing the value chain of the world’s leading brands, <b> textile conglomerates, retailers and manufacturers in more than 30 countries globally. </b>We want to make best use of our experience and knowledge of – Technical Textiles and science behind it.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-5 d-flex justify-content-center align-items-center d-none d-md-block">
                    <img src={aboutImg} alt="About Image" className='img-fluid' />
                </div>
            </div>
            <div className="row col-12 d-flex flex-column">
                <div className='row col-12 d-flex justify-content-center'>
                    <h2 className="w-fit lead fs-3 fw-normal text-primary fw-medium m-0 pe-1">We develop modern production of </h2>
                    <div className='w-fit pt-4 px-2 border-start border-5'>
                        <span className='lead fs-1 fw-bolder text-primary fw-bolder'>Fabrics & Cottons</span>
                    </div>
                </div>
                <div className='col-12 row container-fluid'>
                    {
                        productInfo.map((e, i) => {
                            return (
                                <div key={i} className={`row col-12 d-flex w-screen justify-content-md-center justify-content-lg-evenly align-items-center px-md-5 ${i % 2 != 0 ? "flex-row-reverse" : ""}`}>
                                    <div className="col-10 col-sm-8 col-md-5 my-5 p-6 d-flex justify-content-center align-items-center">
                                        <img src={e.img} alt="product Image" className='img-fluid' />
                                    </div>
                                    <div className="col-12 col-md-7 col-lg-5 col-6 d-flex gap-2 flex-column">
                                        <h2 className="lead fs-2 fw-bold text-dark-blue">{e.title}</h2>
                                        <p className="lead fs-5 fw-normal">{e.para}</p>
                                        <span className="bg-green px-5 mt-2">Know More</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home