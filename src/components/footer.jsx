import React from 'react'
import iconImg from '../../public/favicon.png'
import { FaPhoneAlt as Phone} from "react-icons/fa";
import { MdEmail as Mail} from "react-icons/md";
import { FaLocationDot as Location } from "react-icons/fa6";
import { LiaCopyrightSolid as Copyrights} from "react-icons/lia";
function Footer() {
    return (
        <div className='row col-10 mx-auto mt-4 d-flex justify-content-between px-2  px-md-5 pt-4 pb-2 rounded-bottom rounded-5 footer-bg'>
            <div className='d-flex flex-column justify-content-between'>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <img src={iconImg} alt="Icon Images" height={120} width={120} />
                </div>
                <ul className="col-2 d-flex flex-column justify-content-center">
                    <li className='fs-6 lead fw-normal'>Home</li>
                    <li className='fs-6 lead fw-normal'>Product</li>
                    <li className='fs-6 lead fw-normal'>About</li>
                    <li className='fs-6 lead fw-normal'>Contact</li>
                </ul>
                <ul className="col-3 d-flex flex-column justify-content-center">
                    <li className='fs-6 lead fw-normal'>Cotton White Yarns</li>
                    <li className='fs-6 lead fw-normal'>Cotton Dyed Yarns</li>
                    <li className='fs-6 lead fw-normal'>Woven Fabrics</li>
                    <li className='fs-6 lead fw-normal'>Knitted Fabrics</li>
                </ul>
                <ul className="col-4 d-flex flex-column justify-content-center">
                    <li className='fs-6 lead fw-normal d-flex align-items-center gap-1'><Phone/>+91 4565 45454 84</li>
                    <li className='fs-6 lead fw-normal d-flex align-items-center gap-1'><Mail/>harinilatextiles@gmail.com</li>
                    <li className='fs-6 lead fw-normal gap-1'><Location/>12, 1st St Jayabharathi Nagar, <br /> Porur,Chennai - 600116, India</li>
                </ul>
            </div>
            <p className="lead fs-5 fw-normal mt-3 d-flex align-items-center justify-content-center"><Copyrights className='fw-bold fs-4'/>2024 All rights are Reserved by Harinila Textiles</p>
        </div>
    )
}

export default Footer