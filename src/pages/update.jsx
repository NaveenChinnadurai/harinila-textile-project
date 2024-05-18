import React from 'react'
import Header from '../components/header'
import { posters } from '../scripts/data'
import updates from '../assets/Icons/updateSoon.png'
import updateDecor1 from '../assets/decors/updatesDecor1.png'
import updateDecor2 from '../assets/decors/updatesDecor2.png'

import poster1 from '../assets/posters/poster4.png'
import poster2 from '../assets/posters/poster5.png'
import poster3 from '../assets/posters/poster6.png'
import poster4 from '../assets/posters/poster7.png'
import ContactSection from '../components/contactCard'
function Update() {
    const postersImage = [poster1, poster2, poster3]
    return (
        <div>
            <Header textSize="display-1" text="Updates" />

            <div className='row my-3 my-md-5 flex flex-column gap-3 gap-md-5'>
                {
                    posters.map((e, i) => {
                        return (
                            <div className='row col-12 d-flex justify-content-evenly align-items-start' key={i}>
                                <div className='col-9 col-sm-8 col-md-6 col-lg-5'>
                                    <img src={e.imgPath} alt={e.title} className='col-12 rounded-4' />
                                </div>
                                <div className='col-3 d-flex flex-column align-items-center justify-content-center'>
                                    <p className="lead display-3 fw-bold">{e.date}</p>
                                    <p className="lead fs-2 fw-medium d-flex gap-sm-1 flex-wrap w-fit p-0 align-items-center justify-content-center">
                                        <span>{e.month}</span>
                                        <span>{e.year}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="d-flex justify-content-center my-3 gap-1 align-items-center">
                <h2 className="lead display-6 fw-medium  title-primary-7">New Updates Soon</h2>
                <div>
                    <img src={updates} alt="Updates Icon" width={50} height={50} />
                </div>
            </div>

            <div className='d-flex flex-nowrap px-5 gap-3 overflow-x-scroll scrollbar-horizontal scrollbar-variant-primary align-items-center'>
                <div className='col-12 col-sm-5'>
                    <img src={poster1} alt="Poster Image" className=' img-fluid rounded-4' />
                </div>
                <div className='col-12 col-sm-5'>
                    <img src={poster2} alt="Poster Image" className=' img-fluid rounded-4' />
                </div>
                <div className='col-11 col-sm-5'>
                    <img src={poster3} alt="Poster Image" className=' img-fluid rounded-4' />
                </div>
                <div className='col-6 col-sm-3'>
                    <img src={poster4} alt="Poster Image" className=' img-fluid rounded-4' />
                </div>
            </div>
            <ContactSection />
        </div>
    )
}

export default Update