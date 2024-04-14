import React from 'react'
import formImg from '../assets/formImg.png'
import chainIcon from '../assets/Icons/chainIcon.png'
import { ContactCard } from './home'
import icon1 from '../assets/Icons/icon1.png'
import icon2 from '../assets/Icons/icon2.png'
import icon3 from '../assets/Icons/icon3.png'
import worldImg from "../assets/world.jpg"
function Contact() {
  return (
    <div className='p-0'>
      <div className='row p-0 col-12 py-2 my-3 d-flex gap-2 justify-content-center align-items-center'>
        <h2 className="mb-2 lead display-6 title-primary-2 text-center fw-bold">Get in Touch With Us</h2>
        <div className="row col-12 d-flex flex-wrap justify-content-evenly gap-2 gap-md-3">
          <ContactCard icon={icon1} title="Office Hours" para="Mon - Sat: 9:30 AM to 6:30PM" />
          <ContactCard icon={icon3} title="Write Us On" para="harinilatextiles@gmail.com" />
          <ContactCard icon={icon2} title="Reach Us At" para="#12, 1st St Jayabharathi Nagar," para1="Porur, Chennai - 600116, India" className="col-12 col-sm-10" />
        </div>
      </div>
      <div className='col-12 m-0 mx-auto d-flex align-items-center p-2 contact-bg px-md-5 my-3'>
        <div className="col-12 col-sm-8 col-md-6 py-3 row d-flex justify-content-center gap-2">
          <h2 className="lead fs-1 fw-bold title-primary-5 d-flex">
            Let's Connect
            <img src={chainIcon} alt="Chain Icon" height={40} />
          </h2>
          <div className='col-12 col-lg-10 p-2'>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className='d-flex gap-3 justify-content-between'>
              <div className="col form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Mobile No.</label>
              </div>
              <div className="col form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Location</label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="Email" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Email address</label>
            </div>
            <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
              <label htmlFor="floatingTextarea2">Your Queries Here</label>
            </div>
            <div className='bg-green col-12 text-center mt-4 mx-auto w-50 p-2 fs-5 '>Let's Connect</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact