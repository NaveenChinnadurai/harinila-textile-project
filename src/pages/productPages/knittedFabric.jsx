import React from 'react'
import Header from '../../components/header'
import bannerImg from '../../assets/bannerImg/knittedFabric.png'
import decorImg from '../../assets/productImages/knittedFabrics/decorImg1.png'
function KnittedFabric() {
    return (
        <div className='row mx-0'>
            <div className='row col-md-10 mx-auto d-flex flex-column'>
                <Header textSize="display-1" text="Knitted Fabrics" />
                <Header textSize="fs-5" text="Harinila Textiles – Knitted fabric Spinning" />
                <div className='position-relative pt-3'>
                    <img src={bannerImg} alt="Banner Image" className=' img-fluid' />
                    <div className='position-absolute d-flex flex-column align-items-center text-white w-100 product-banner-text'>
                        <h2 className="fs-1 fw-bold text-center">Future of Textiles industry <br />begin Here  to Knitted Fabric Division Comfort</h2>
                        <h2 className="fs-5 text-center">Future of Textiles industry begin Here</h2>
                    </div>
                </div>

            </div>
            <p className="lead fs-4 fw-normal text-center col-md-8 mx-auto my-5">Explore top-tier<b> knitted fabrics at Harinila Textiles</b> your premier destination for quality textiles. Our commitment to excellence and customer satisfaction makes us your reliable partner in the textile industry. Whether you're a garment manufacturer, wholesaler, or textile company, <b>find the perfect knitted fabrics to meet your needs effortlessly</b></p>
            <div className="row col-12 p-0 py-0 my-5 d-flex flex-column knitted-fabric position-relative">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8 mx-auto z-2">
                    <img src={decorImg} alt="cotton image" className='img-fluid' />
                </div>
                <div className="product-decor d-none d-md-flex product-decor-top position-absolute"></div>
                <div className="product-decor d-none d-md-flex product-decor-bottom end-0 align-self-end position-absolute"></div>
            </div>
        </div>
    )
}

export default KnittedFabric