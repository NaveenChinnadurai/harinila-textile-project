import React from 'react'
import iconImg from '../../public/favicon.png'
import { FaPhoneAlt as Phone} from "react-icons/fa";
import { MdEmail as Mail} from "react-icons/md";
import { FaLocationDot as Location } from "react-icons/fa6";
import { LiaCopyrightSolid as Copyrights} from "react-icons/lia";
import { IoIosArrowForward  as Arrow } from "react-icons/io";

function Footer() {
    return (
        <div className='row col-11 col-md-10 mx-auto d-flex justify-content-between px-md-5 pt-4 pt-md-5 pb-1 rounded-4 footer-bg'>
            <div className=' d-flex flex-wrap justify-content-between'>
                <div className="col-12 col-lg-2 d-flex justify-content-lg-center align-items-center">
                    <img src={iconImg} alt="Icon Images" height={120} width={120} />
                </div>
                <ul className="col-3 col-lg-2 my-3 mx-0 p-0 px-lg-4 my-md-0 d-flex flex-column">
                    <li className='fs-6 lead fw-normal'>Home</li>
                    <li className='fs-6 lead fw-normal d-flex align-items-center'>Product <Arrow/></li>
                    <li className='fs-6 lead fw-normal'>About</li>
                    <li className='fs-6 lead fw-normal'>Contact</li>
                </ul>
                <ul className="col-12 col-sm-6 col-sm-6 col-lg-4 p-0 px-lg-4 d-flex flex-column justify-content-center">
                    <li className='fs-6 lead fw-normal'>Cotton White Yarns</li>
                    <li className='fs-6 lead fw-normal'>Cotton Dyed Yarns</li>
                    <li className='fs-6 lead fw-normal'>Woven Fabrics</li>
                    <li className='fs-6 lead fw-normal'>Knitted Fabrics</li>
                </ul>
                <ul className="col-12 col-lg-4 p-0 mt-3 d-flex flex-column justify-content-center">
                    <li className='fs-6 lead fw-normal d-flex align-items-center gap-1'><Phone/>+91 4565 45454 84</li>
                    <li className='fs-6 lead fw-normal d-flex align-items-center gap-1'><Mail/>harinilatextiles@gmail.com</li>
                    <li className='fs-6 lead fw-normal gap-1'><Location/>12, 1st St Jayabharathi Nagar, <br /> Porur,Chennai - 600116, India</li>
                </ul>
            </div>
            <p className="lead fs-6 fw-normal mt-3 d-flex align-items-md-center justify-content-center"><Copyrights className='fw-bold fs-5'/>2024 All rights are Reserved by Harinila Textiles</p>
        </div>
    )
}

export default Footer