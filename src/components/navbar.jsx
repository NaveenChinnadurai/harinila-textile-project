import React from 'react'
import iconImg from '../../public/favicon.png'
import { GiHamburgerMenu as BurgerMenu} from "react-icons/gi";
import { IoIosArrowDown as Arrow} from "react-icons/io";


function Navbar() {
  return (
    <div className='row col-12 py-md-4 py-2 d-flex justify-content-between align-items-center align-items-md-end  px-md-5 px-2'>
        <div className="col-1 d-flex justify-content-md-center">
            <img src={iconImg} alt="Icon Images" />
        </div>
        <ul className="col-5 col-sm-8 col-lg-6 justify-content-between d-none d-md-flex">
            <li className='fs-5 px-0 lead fw-normal active-page-text text-green'>Home</li>
            <li className='fs-5 lead fw-normal text-green'>Product <Arrow/></li>
            <li className='fs-5 lead fw-normal text-green'>Updates</li>
            <li className='fs-5 lead fw-normal text-green'>About</li>
            <li className='fs-5 lead fw-normal text-green'>Contact</li>
        </ul>
        <span className="d-block display-6 d-md-none col-2 d-flex justify-content-center align-items-center p-0"><BurgerMenu /></span>
    </div>
  )
}

export default Navbar