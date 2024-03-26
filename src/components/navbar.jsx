import React from 'react'
import iconImg from '../../public/Main_Logo.png'
import { GiHamburgerMenu as BurgerMenu } from "react-icons/gi";
import { IoIosArrowDown as Arrow } from "react-icons/io";

function Navbar() {
  return (
    <div className='box-shadow row col-10 py-md-4 py-1 mx-auto px-md-4 px-2 d-flex justify-content-between align-items-center rounded-4'>
      <div className="col-1 d-flex p-0 ">
        <img src={iconImg} alt="Icon Images" height={60} width={60} />
      </div>
      <ul className="col-10 col-lg-7 m-0 gap-sm-4 gap-lg-5 d-none d-md-flex align-items-center justify-content-end justify-content-lg-center">
        <li className='fs-5 px-0 lead fw-normal text-orange text-green'>Home</li>
        <li className='fs-5 lead fw-normal text-green d-flex gap-1 align-items-center justify-content-center'>Product <Arrow /></li>
        <li className='fs-5 lead fw-normal text-green'>Updates</li>
        <li className='fs-5 lead fw-normal text-green'>About</li>
        <li className='fs-5 lead fw-normal text-green'>Contact</li>
      </ul>
      <span className='d-none d-lg-block bg-green px-lg-4 rounded-2 py-1 text-white fs-6'>Let's Talk</span>
      <span className="d-block display-6 d-md-none col-2 d-flex justify-content-center align-items-center p-0"><BurgerMenu /></span>
    </div>
  )
}

export default Navbar