import React, { useRef } from 'react'

import Carousel from 'react-bootstrap/Carousel';

import aboutImg from '../assets/mainAssets/aboutImg.png'
import aboutImg1 from '../assets/mainAssets/aboutImg1.png'

import Header from '../components/header';
import ContactSection from '../components/contactCard';

import { Link } from 'react-router-dom';
import { IoIosArrowForward as ArrowRight, IoIosArrowBack as ArrowLeft } from "react-icons/io";
import { IoArrowForwardCircleOutline as RightArrow } from "react-icons/io5";

import { productInfo, aboutCount, posters, carouselData } from '../scripts/data'

function Home() {
    const carouselRef = useRef(null);
    const handleSlide = (event) => {
        if (event.direction === 'right' && event.target.activeIndex === 0) {
            event.direction = 'left';
        }
    };
    return (
        <div className='m-0 row d-flex flex-column'>
            <div className="row col-md-10 mx-auto d-flex flex-column">
                <Header textSize="display-1" text="Harnila Textiles" />
            </div>
            <Carousel
                ref={carouselRef}
                interval={2500}
                onSlide={handleSlide}
                prevIcon={<ArrowLeft className='text-black display-4 mt-0' />}
                nextIcon={<ArrowRight className='text-black display-4 mt-0' />}>
                {
                    carouselData.map((e, i) => {
                        return (
                            <Carousel.Item className=' py-4' key={i}>
                                <div className='col-10 mx-auto'>
                                    <img src={e.img} alt="Banner Image" className=' img-fluid' />
                                    <h1 className="col-md-10 col-12 lead display-6 fw-bold text-center mx-auto mt-4 title-primary-1">{e.title}</h1>
                                    <p className="lead fs-5 title-primary-3 fw-medium text-center m-0">{e.text}</p>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            <div className="row col-12 px-0 mx-auto d-flex flex-column flex-md-row justify-content-evenly justify-content-ld-between align-items-center my-4">
                <div className='col-12 col-md-7 col-lg-6 d-flex flex-column gap-2'>
                    <h2 className="lead fs-3 fw-bold title-primary-2">WHAT WE DO</h2>
                    <h1 className="lead display-6 fw-bold title-primary-1 px-2 ms-3 ms-md-0 border-start border-5">Harinila Textiles, beyond exports we are working as multifunctional company</h1>
                    <div className='d-block d-md-none col-12 col-sm-7 mx-auto p-5'>
                        <img src={aboutImg} alt="About Image" className='img-fluid ' />
                    </div>
                    <p className='lead fs-5 fw-normal'>Active as a knowledge and innovation partner, creations and commercialization partner, marketing and sourcing partner for Textiles and Technical Textiles Value Chain. We are significantly contributing the value chain of the world’s leading brands, <b> textile conglomerates, retailers and manufacturers in more than 30 countries globally. </b>We want to make best use of our experience and knowledge of – Technical Textiles and science behind it.</p>
                </div>
                <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center d-none d-md-block">
                    <img src={aboutImg} alt="About Image" className='img-fluid' />
                </div>
            </div>
            <div className="row col-12 d-flex flex-column">
                <div className='row col-12 d-flex gap-2 justify-content-center'>
                    <h2 className="w-fit lead fs-3 fw-normal title-primary-1 fw-medium m-0 pe-1">We develop modern production of </h2>
                    <div className='w-fit pt-4 px-2 border-start border-5'>
                        <span className='lead fs-1 fw-bolder title-primary-1 fw-bolder'>Fabrics & Cottons</span>
                    </div>
                </div>
                <div className='col-12 row container-fluid'>
                    {
                        productInfo.map((e, i) => {
                            const align = i % 2
                            return (
                                <div key={i} className={`row col-12 d-flex w-screen justify-content-md-center justify-content-lg-evenly align-items-center px-md-5 ${align != 0 ? "flex-row-reverse" : ""}`}>
                                    <div className="col-10 col-sm-8 col-md-5 col-lg-4 my-5 p-6 d-flex justify-content-center align-items-center">
                                        <img src={e.img} alt="product Image" className='img-fluid' />
                                    </div>
                                    <div className={`col-12 col-md-7 col-lg-5 col-6 d-flex gap-2 flex-column ${align != 0 ? "align-items-end align-items-md-start" : ""}`}>
                                        <h2 className="lead fs-2 fw-bold title-primary-2">{e.title}</h2>
                                        <p className={`lead fs-5 fw-normal ${align != 0 ? "text-end text-md-start" : ""}`}>{e.para}</p>
                                        <span className="bg-green px-5 mt-2">Know More</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <h2 className="lead text-center title-primary-7 mt-5 fw-bolder fs-1">OUR UPDATES</h2>
            <div className="row col-12 my-3 p-2 gap-2 gap-md-4 d-flex justify-content-lg-center flex-nowrap overflow-auto">
                {
                    posters.map((e, i) => {
                        return (
                            <div className="card col-11 col-sm-6 col-md-5 col-lg-3 py-2" key={i}>
                                <img className="card-img-top" src={e.imgPath} alt={e.title} />
                                <div className="card-body px-1">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="card-title fs-5 title-primary-2 fw-bold">{e.title}</h5>
                                        <Link href="#" className="text-decoration-none text-dark fs-2 p-0 h-fit d-flex"><RightArrow /></Link>
                                    </div>
                                    <div className="d-flex align-items-center gap-1">
                                        <p className="card-text fs-3 fw-bolder">{e.date}</p>
                                        <p className="card-text fs-6 fw-medium">{e.month} , {e.year}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row col-11 mx-auto d-flex flex-column flex-md-row justify-content-evenly my-4">
                <div className='col-12 col-md-7 col-lg-6 px-lg-5 d-flex flex-column gap-2 my-3'>
                    <h2 className="lead fs-5 fw-bold title-primary-2">ABOUT US</h2>
                    <h1 className="lead fs-1 fw-bold title-primary-1">Discover Deeper Insights into Harinila Textiles</h1>
                    <p className='lead fs-5 fw-normal'>At Harinila Textiles, we transcend traditional exports, serving as a dynamic enterprise. We're collaborative innovators, guiding creation, commercialization, marketing, and sourcing in the Textiles and Technical Textiles Value Chain. Our impact extends globally, enhancing the value chains of leading brands across 30+ countries. Leveraging vast expertise, we optimize Technical Textiles' utilization and scientific principles.</p>
                </div>
                <div className="col-12 col-md-5 py-3 py-md-1 m-0 col-lg-6 d-flex flex-column align-items-center align-items-md-start">
                    <div className='col-11 d-flex mx-auto justify-content-center align-items-center'>
                        <img src={aboutImg1} alt="About Image" className='img-fluid' />
                    </div>
                    <div className='col-12 d-flex flex-wrap justify-content-evenly justify-content-md-evenly px-0'>
                        {
                            aboutCount.map((e, i) => {
                                return (
                                    <CounterCard data={e} key={i} style="col-5 mt-3" />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='row p-0 col-12 py-2 my-3 d-flex gap-2 justify-content-center align-items-center'>
                <h2 className="mb-2 lead display-6 title-primary-2 text-center fw-bold">Get in Touch With Us</h2>
                <ContactSection />
            </div>

        </div>
    )
}

export const CounterCard = (props) => {
    return (
        <div key={props.key} className={`p-3 count-box-shadow rounded-3 ${props.style}`}>
            <h2 className="lead fs-1 fw-bolder">{props.data.num}+</h2>
            <p className="lead fs-6 fw-medium">{props.data.text} </p>
        </div>
    )
}
export default Home