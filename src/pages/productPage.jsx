import React from 'react'
import Header from '../components/header'
import ContactSection from '../components/contactCard'
function ProductPage(props) {
    const data=props.data
    return (
        <div className='row col-12 mx-auto'>
            <div className='row col-md-10 mx-auto d-flex flex-column'>
                <Header
                    textSize="display-1"
                    text={data.headerTitle1}
                />
                <Header
                    textSize="fs-5"
                    text={data.headerTitle2}
                />
                <div className='position-relative pt-3'>
                    <img src={data.bannerImg} alt="Banner Image" className=' img-fluid' />
                    <div className='position-absolute d-flex flex-column align-items-center text-white w-100 product-banner-text gap-2'>
                        <h2 className="fs-1 fw-bold text-center col-12 col-md-8">{data.bannerText}</h2>
                        <h2 className="fs-5 text-center">{data.bannerSubText}</h2>
                    </div>
                </div>
                <p className="lead col-md-10 text-center m-auto fw-normal fs-4 my-3">{data.para1}</p>
            </div>
            <div className='d-flex p-0 row px-2 gap-3 my-3 flex-nowrap justify-content-center overflow-auto'>
                {
                    data.bannerImages.map((e, i) => {
                        return (
                            <div className='col-6 col-md-3' key={i}>
                                <img src={e} alt="banner Image" className='img-fluid' />
                            </div>
                        )
                    })
                }
            </div>
            <p className="lead fs-4 fw-normal text-center col-md-8 mx-auto">{data.para2}</p>
            <div className='col-md-11 mx-auto d-flex flex-column gap-md-4 gap-2 p-3'>
                <h2 className="display-5 text-green fw-bold" style={{color:data.color}}>Benefits of Choosing us </h2>
                <div className='px-md-3 py-0 d-flex flex-column gap-5'>
                    {
                        data.feature.map((e, i) => {
                            return (
                                <div key={i} className='col-12 col-lg-10 h-fit mx-auto p-2 position-relative feature-card d-flex flex-column flex-md-row gap-2 features-card p-4 rounded-5'>
                                    <div className='col-10 col-sm-6 col-lg-4 '>
                                        <img src={e.path} alt={e.title} className='img-fluid' />
                                    </div>
                                    <div className='col-12 col-md-7 d-flex flex-column gap-3 justify-content-center'>
                                        <h2 className="fs-2 fw-bold lead" style={{color:data.color}}>{e.title}</h2>
                                        <p className="lead fs-5 fw-medium">{e.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='p-3'>
                <p className="lead fs-5 col-12 col-md-10 mx-auto text-center fw-normal my-3">{data.contactText}</p>
                <ContactSection/>
            </div>
        </div >
    )
}

export default ProductPage