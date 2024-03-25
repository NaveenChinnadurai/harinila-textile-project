import React from 'react'
import iconImg from '../../public/Main_Logo.png'
import { GiHamburgerMenu as BurgerMenu } from "react-icons/gi";
import { IoIosArrowDown as Arrow } from "react-icons/io";


function Navbar() {
  return (
    <div className='box-shadow row col-10 py-md-4 py-1 mx-auto px-md-5 px-2 d-flex justify-content-between align-items-center rounded-4 mt-5'>
      <div className="w-fit d-flex ">
        <img src={iconImg} alt="Icon Images" height={60} width={60}/>
      </div>
      <ul className="m-0 w-fit gap-5 d-none d-md-flex align-items-center justify-content-center">
        <li className='fs-5 px-0 lead fw-normal active-page-text text-green'>Home</li>
        <li className='fs-5 lead fw-normal text-green'>Product <Arrow /></li>
        <li className='fs-5 lead fw-normal text-green'>Updates</li>
        <li className='fs-5 lead fw-normal text-green'>About</li>
        <li className='fs-5 lead fw-normal text-green'>Contact</li>
      </ul>
      <div className="d-md-block  d-none bg-green px-5 rounded-2 py-1 text-white w-fit fs-6">Let's Talk</div>
      <span className="d-block display-6 d-md-none col-2 d-flex justify-content-center align-items-center p-0"><BurgerMenu /></span>
    </div>
  )
}

export default Navbar