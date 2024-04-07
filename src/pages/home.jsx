import React from 'react'
import { IoIosArrowForward as Arrow } from "react-icons/io";
import bannerImg from '../assets/bannerImg/banner_1.png'
import aboutImg from '../assets/aboutImg.png'
import aboutImg1 from '../assets/aboutImg1.png'
import formImg from '../assets/formImg.png'
import wovenFabric from '../assets/productImages/wovenFabric.png'
import cottonYarn from '../assets/productImages/cottonYarn.png'
import knittedFabric from '../assets/productImages/knittedFabric.png'
import icon1 from '../assets/Icons/icon1.png'
import icon2 from '../assets/Icons/icon2.png'
import icon3 from '../assets/Icons/icon3.png'
import chainIcon from '../assets/Icons/chainIcon.png'
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
const aboutCount = [
    {
        num: 5,
        text: "Years of experience"
    },
    {
        num: 15,
        text: "Exhibition stalls"
    },
    {
        num: 50,
        text: "Exports all over the world"
    },
    {
        num: 40,
        text: "From diverse regions of Globe."
    },
]
function Home() {
    return (
        <div className='m-0 row d-flex flex-column'>
            <div className="row col-md-10 mx-auto d-flex flex-column">
                <h2 className="lead title-primary-6 display-1 fw-bold text-center opacity-50 mt-3"> Harinila Textiles</h2>
                <img src={bannerImg} alt="Banner Image" className=' img-fluid' />
                <h1 className="col-md-10 col-12 lead display-6 fw-bold text-center mx-auto mt-4 title-primary-1">Welcome to Our Woven Fabric mills Where Quality Meets Styles</h1>
                <p className="lead fs-5 title-primary-3 fw-medium text-center m-0">Harinila Weaves the Global with innovation</p>
                <div className="d-flex gap-2 justify-content-center align-items-center bg-green mx-auto my-2">
                    <span>Get Started </span>
                    <span className='d-flex'><Arrow /></span>
                </div>
            </div>
            <div className="row col-12 px-0 mx-auto d-flex flex-column flex-md-row justify-content-evenly justify-content-ld-between align-items-center my-4">
                <div className='col-12 col-md-7 col-lg-6 d-flex flex-column gap-2'>
                    <h2 className="lead fs-3 fw-bold title-primary-2">WHAT WE DO</h2>
                    <h1 className="lead display-6 fw-bold title-primary-1 px-2 ms-3 ms-md-0 border-start border-5">Harinila Textiles, beyond exports we are working as multifunctional company</h1>
                    <div className='d-block d-md-none col-10 col-sm-7 mx-auto p-5'>
                        <img src={aboutImg} alt="About Image" className='img-fluid ' />
                    </div>
                    <p className='lead fs-5 fw-normal'>Active as a knowledge and innovation partner, creations and commercialization partner, marketing and sourcing partner for Textiles and Technical Textiles Value Chain. We are significantly contributing the value chain of the world’s leading brands, <b> textile conglomerates, retailers and manufacturers in more than 30 countries globally. </b>We want to make best use of our experience and knowledge of – Technical Textiles and science behind it.</p>
                </div>
                <div className="col-12 col-md-4 col-lg-4  d-flex justify-content-center align-items-center d-none d-md-block">
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
                                    <div className={`col-12 col-md-7 col-lg-5 col-6 d-flex gap-2 flex-column ${align!=0?"align-items-end align-items-md-start":""}`}>
                                        <h2 className="lead fs-2 fw-bold title-primary-2">{e.title}</h2>
                                        <p className={`lead fs-5 fw-normal ${align!=0?"text-end text-md-start":""}`}>{e.para}</p>
                                        <span className="bg-green px-5 mt-2">Know More</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="row col-12 mx-auto d-flex flex-column flex-md-row justify-content-evenly my-4">
                <div className='col-12 col-md-7 col-lg-5 px-lg-3 d-flex flex-column gap-2'>
                    <h2 className="lead fs-5 fw-bold title-primary-2">ABOUT US</h2>
                    <h1 className="lead fs-1 fw-bold title-primary-1">Discover Deeper Insights into Harinila Textiles</h1>
                    <p className='lead fs-5 fw-normal'>At Harinila Textiles, we transcend traditional exports, serving as a dynamic enterprise. We're collaborative innovators, guiding creation, commercialization, marketing, and sourcing in the Textiles and Technical Textiles Value Chain. Our impact extends globally, enhancing the value chains of leading brands across 30+ countries. Leveraging vast expertise, we optimize Technical Textiles' utilization and scientific principles.</p>
                </div>
                <div className="col-12 col-md-5 py-3 py-md-1 col-lg-5 d-flex flex-column align-items-center align-items-md-start">
                    <div className='col-11 d-flex justify-content-center align-items-center'>
                        <img src={aboutImg1} alt="About Image" className='img-fluid' />
                    </div>
                    <div className='col-12 d-flex gap-2 flex-wrap justify-content-center justify-content-md-start py-md-5 py-3'>
                        {
                            aboutCount.map((e, i) => {
                                return (
                                    <div key={i} className='col-5 p-3 count-box-shadow rounded-3'>
                                        <h2 className="lead fs-3 fw-bolder">{e.num}+</h2>
                                        <p className="lead fs-6 fw-medium">{e.text} </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='row p-0 col-12 py-2 my-3 d-flex gap-2 justify-content-center align-items-center'>
                <h2 className="mb-2 lead display-6 title-primary-2 text-center fw-bold">Get in Touch With Us</h2>
                <div className="row col-12 d-flex flex-wrap gap-2 gap-md-0 justify-content-evenly align-items-">
                    <ContactCard icon={icon1} title="Office Hours" para="Mon - Sat: 9:30 AM to 6:30PM" />
                    <ContactCard icon={icon3} title="Write Us On" para="harinilatextiles@gmail.com" />
                </div>
                <div className='row col-12 d-flex flex-wrap gap-2 gap-md-0 justify-content-evenly'>
                    <ContactCard icon={icon2} title="Reach Us At" para="#12, 1st St Jayabharathi Nagar," para1="Porur, Chennai - 600116, India" class="col-sm-8" />
                </div>
            </div>
            <div className='col-12 mx-auto d-flex justify-content-center justify-content-lg- align-items-center p-2'>
                <div className="col-12 col-sm-10 col-md-5 p-3 row d-flex justify-content-center gap-3">
                    <h2 className="lead fs-2 fw-bold title-primary-5 d-flex">
                        Let's Connect
                        <img src={chainIcon} alt="Chain Icon" height={40} />
                    </h2>
                    <input type="text" className='h-fit col-5 p-1 px-2 rounded-2' placeholder='First Name' />
                    <input type="text" className='h-fit col-5 p-1 px-2 rounded-2' placeholder='Last Name' />
                    <input type="text" className='h-fit col-5 p-1 px-2 rounded-2' placeholder='Phone No.' />
                    <input type="text" className='h-fit col-5 p-1 px-2 rounded-2' placeholder='Location' />
                    <input type="text" className='h-fit col-10 p-1 px-2 rounded-2' placeholder='E-Mail' />
                    <textarea className='col-10 p-1 px-2 rounded-2' placeholder='Your Queries'></textarea>
                    <span className='bg-green col-12 w-75 text-center'>Let's Connect</span>
                </div>
                <div className="col-4 col-sm-5 col-lg-4 row p-lg-3 d-none d-md-flex">
                    <img src={formImg} alt="Form Image" className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default Home



const ContactCard = (props) => {
    return (
        <div className={`col-12 col-sm-5 d-flex gap-2 p-1 justify-content-center align-items-center ${props.class}`}>
            <div>
                <img src={props.icon} alt="Clock Icon" width={80} />
            </div>
            <div className='d-flex flex-column p-0'>
                <h2 className="lead fs-4 fw-bolder title-primary-4 w-fit">{props.title}</h2>
                <p className="lead fs-6 fw-medium">{props.para} </p>
                <p className="lead fs-6 fw-medium">{props.para1} </p>
            </div>
        </div>
    )
}