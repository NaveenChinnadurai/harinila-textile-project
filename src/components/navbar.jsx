import React, { useState } from 'react'
import iconImg from '../../public/Main_Logo.png'
import { GiHamburgerMenu as BurgerMenu } from "react-icons/gi";
import { IoIosArrowDown as ArrowDown, IoIosArrowUp as ArrowTop } from "react-icons/io";
import { Link } from 'react-router-dom';
import { RxCross2 as Cross } from "react-icons/rx";

function Navbar() {
  const screen=window.innerWidth;
  const desktop = "col-lg-7 m-0 gap-md-4 gap-lg-5 d-none d-md-flex align-items-center justify-content-end justify-content-lg-center"
  const mobile = "nav-bg position-absolute w-75 fs-2 end-0 top-0 h-100vh z-3 d-flex align-items-center justify-content-center flex-column gap-3"
  const [navbar, setNavbar] = useState(desktop)
  const [dropdown, setDropdown] = useState(false)
  const handleBurgerClick = () => {
    document.body.style.height = "100vh"
    document.body.style.overflow = "hidden"
    setNavbar(mobile)
  }
  const handleCrossClick = () => {
    document.body.style.height = "fit-contain"
    document.body.style.overflow = "auto"
    setNavbar(desktop)
  }
  const handleProductClick = () => {
    setDropdown(!dropdown);
  }
  return (
    <div className='box-shadow row col-10 py-md-4 py-1 mx-auto px-md-4 px-2 d-flex justify-content-between align-items-center rounded-4'>
      <Link to="/" className="col-1 d-flex p-0">
        <img src={iconImg} alt="Icon Images" height={60} width={60} />
      </Link>
      <ul className={navbar}>
        <li className='position-absolute cross-btn d-md-none' onClick={handleCrossClick}><Cross /></li>
        <li><Link to="/" className='fs-5 lead fw-normal text-green text-decoration-none' onClick={handleCrossClick}>Home</Link></li>
        <li
          onClick={handleProductClick}
          className='position-relative product-dropdown fs-5 w-fit lead fw-normal text-green d-flex gap-1 align-items-center justify-content-center text-decoration-none'
        >
          Product
          {
            dropdown ?
              <>
                <ArrowTop/>
                <ul className={`position-absolute px-4 py-3 pb-2 p-md-4 rounded-3 d-flex flex-column gap-3 ms-5 ms-5 ${screen<=768? "nav-bg":"bg-white"}`}>
                  <li><Link className="text-decoration-none fs-5 lead fw-normal text-green" to="/cottonyarn" onClick={handleCrossClick}>Cotton Yarn</Link></li>
                  <li><Link className="text-decoration-none fs-5 lead fw-normal text-green " to="/knittedfabric" onClick={handleCrossClick}>Knitted Fabric</Link></li>
                  <li><Link className="text-decoration-none fs-5 lead fw-normal text-green " to="/wovenfabric" onClick={handleCrossClick}>Woven Fabric</Link></li>
                </ul></>
              : <ArrowDown/>
          }
        </li>
        <li><Link to="/updates" className='fs-5 lead fw-normal text-green text-decoration-none' onClick={handleCrossClick}>Updates</Link></li>
        <li><Link to="/about" className='fs-5 lead fw-normal text-green text-decoration-none' onClick={handleCrossClick}>About</Link></li>
        <li><Link to="/contactUs" className='fs-5 lead fw-normal text-green text-decoration-none' onClick={handleCrossClick}>Contact</Link></li>
      </ul>
      <span className='d-none d-lg-block bg-green px-lg-4 rounded-2 py-1 text-white fs-6'>Let's Talk</span>
      <span className="d-block display-6 d-md-none col-2 d-flex justify-content-center align-items-center p-0" onClick={handleBurgerClick}><BurgerMenu /></span>
    </div>
  )
}

export default Navbar