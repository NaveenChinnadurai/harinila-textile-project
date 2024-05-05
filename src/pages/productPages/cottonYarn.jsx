import React from 'react'
import Header from '../../components/header'
import bannerImg from '../../assets/bannerImg/cottonBanner.png'
import cottonImg from '../../assets/productImages/Cotton/cottonImage.png'
import img1 from "../../assets/stockImg/img1.png"
import img2 from "../../assets/stockImg/img2.png"
import img3 from "../../assets/stockImg/img3.png"
import img4 from "../../assets/stockImg/img4.png"
import img5 from "../../assets/stockImg/img5.png"
import img6 from "../../assets/stockImg/img6.png"
const features = [
    {
        title: "High-Quality Cotton Yarn",
        img: img1,
        text: "We offer a wide range of cotton yarn options, carefully sourced from reputable manufacturers. Our yarns are known for their superior quality, durability, and consistency, making them ideal for various applications."
    },
    {
        title: "Customization Options",
        img: img2,
        text: "We understand that each customer has unique requirements. That’s why we provide customization options such as yarn count, twist, and color. We work closely with our clients to deliver tailored solutions that match their specifications."
    },
    {
        title: "International Standards",
        img: img3,
        text: "We adhere to stringent quality standards to ensure that our cotton yarns meet international industry norms. Our commitment to quality control guarantees that you receive yarns that are consistent in texture, strength, and color."
    },
    {
        title: "Reliable Supply",
        img: img4,
        text: "We have established strong relationships with reputed cotton yarn manufacturers, enabling us to provide a consistent supply of high-quality yarns. Our efficient logistics ensure timely delivery to any destination worldwide."
    },
    {
        title: "Competitive Pricing",
        img: img5,
        text: "We offer competitive pricing without compromising on quality. Our aim is to provide cost-effective solutions that meet your budget requirements and help you achieve profitability."
    },
    {
        title: "Global Reach",
        img: img6,
        text: "We have a strong presence in the international market, with a network of satisfied customers across different continents. Our export expertise allows us to efficiently handle documentation, shipping, and customs procedures."
    }
]
function CottonYarn() {
    return (
        <div className='row col-12 mx-auto'>
            <div className='row col-md-10 mx-auto d-flex flex-column'>
                <Header textSize="display-1" text="Cotton Yarn" />
                <Header textSize="fs-5" text="Harinila Textiles – Cotton Yarn Spinning" />
                <div className='position-relative pt-3'>
                    <img src={bannerImg} alt="Banner Image" className=' img-fluid' />
                    <div className='position-absolute d-flex flex-column align-items-center text-white w-100 product-banner-text'>
                        <h2 className="fs-1 fw-bold text-center">Welcome to Harinila Textiles! <br /> Sustainable Cotton Yarns & Fabrics</h2>
                        <h2 className="fs-5 text-center">Innovation in your business starts here</h2>
                    </div>
                </div>
                <p className="lead col-md-10 text-center m-auto fw-normal my-4 fs-5">We are a leading supplier of <span className='fw-bold'>premium quality cotton yarn </span>for the global market. With our commitment to excellence and customer satisfaction, we have established ourselves as a trusted partner in the textile industry. Whether you are a garment manufacturer, a wholesaler, or a textile company, <span className='fw-bold'>we have the right cotton yarn to meet your needs.</span></p>
            </div>
            <div className="row col-12 p-0 py-3 my-5 position-relative">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8 mx-auto z-2">
                    <img src={cottonImg} alt="cotton image" className='img-fluid' />
                </div>
                <div className="product-decor d-none d-md-flex product-decor-top position-absolute"></div>
                <div className="product-decor d-none d-md-flex product-decor-bottom position-absolute end-0 "></div>
            </div>
            <p className="lead fs-4 fw-normal text-center col-md-8 mx-auto">Our extensive range of cotton yarns is meticulously crafted to meet the highest industry standards, ensuring superior quality and performance in every strand. <b>From fine counts for delicate fabrics to robust options for durable textiles,</b>we offer versatile solutions tailored to your specific requirements. Partner with us and experience the difference that premium <b>quality cotton yarn can make in your products.</b></p>
            <div className='col-md-11 mx-auto d-flex flex-column gap-md-5 gap-3 p-3'>
                <h2 className="display-5 text-green fw-bold">Benefits of Choosing us </h2>
                <div className='p-md-3 d-flex flex-column gap-5'>
                    {
                        features.map((e, i) => {
                            return (
                                <div key={i} className='col-12 col-md-5 h-fit mx-auto p-2 position-relative feature-card'>
                                    <div className='d-flex flex-column gap-4'>
                                        <h2 className="text-center fs-2 fw-bold lead title-primary-4">{e.title}</h2>
                                        <div className="col-10 mx-auto d-flex justify-content-center">
                                            <img src={e.img} alt={e.title} className=' img-fluid' />
                                        </div>
                                    </div>
                                    <div className='position-absolute opacity-0 feature-info p-md-3 p-2  bg-white h-100 top-0 d-flex align-items-center'>
                                        <p className="lead fs-4 text-center fw-medium title-primary-4">{e.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default CottonYarn