import React from 'react'
import { IoIosArrowForward as Arrow } from "react-icons/io";

function Home() {
    return (
        <div className='m-0 row d-flex flex-column'>
            <div className="col-10 p-3 p-sm-4 p-md-5 py-4 mx-auto my-2 row d-flex-justify-content-left banner-wrapper">
                <div className='p-1 p-sm-2 p-md-5'>
                    <h1 className="lead fs-4 fw-normal px-0">Future of Textiles industry begin Here</h1>
                    <h2 className="lead display-4 fw-normal px-0">Welcome to Knitted Fabric Division Comfort</h2>
                    <p className="lead fs-6 col-12 col-lg-10 fw-normal px-0 text-light my-3">at Harinila Textiles - Knitting Division, we specialize in producing high-quality knit fabrics for a wide range of industries. With our state-of-the-art machinery and a team of skilled professionals, we are committed to delivering exceptional fabrics that meet the unique needs of our customers.</p>
                    <span className="btn d-flex mt-4 justify-content-center align-items-center gap-1 bg-green w-fit px-5">Get Started <Arrow /></span>
                </div>
            </div>
        </div>
    )
}

export default Home