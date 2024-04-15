import React from 'react'
import chainIcon from '../assets/Icons/chainIcon.png'
import { ContactCard } from './home'
import icon1 from '../assets/Icons/icon1.png'
import icon2 from '../assets/Icons/icon2.png'
import icon3 from '../assets/Icons/icon3.png'
import { FaFacebookSquare as FB, FaInstagram as IG, FaLinkedin as LinkedIn } from "react-icons/fa";
import { FaXTwitter as X, FaWhatsapp as WA } from "react-icons/fa6";
import { TiSocialGooglePlus as GPlus } from "react-icons/ti";
import { Link } from 'react-router-dom'
import formImg from '../assets/stockImg/contactBg.png'
import product2 from '../assets/productImages/knittedFabrics/knittedFabric.jpg'
import product3 from '../assets/productImages/wovenFabrics/wovenFabric.jpg'
const logo = [
  {
    icon: <FB />,
    url: ""
  },
  {
    icon: <IG />,
    url: ""
  },
  {
    icon: <GPlus />,
    url: ""
  },
  {
    icon: <LinkedIn />,
    url: ""
  },
  {
    icon: <X />,
    url: ""
  },
  {
    icon: <WA />,
    url: ""
  },
]
function Contact() {
  return (
    <div className='p-0 pt-5'>
      <div className='d-flex flex-column align-item-center justify-content-center contact-banner py-5'>
        <div className='col-10 mx-auto py-5 d-flex flex-column gap-2 text-white'>
          <h2 className="lead display-5 fw-bold text-center">We're Here to Help!</h2>
          <p className='lead fs-5 fw-medium text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, incidunt! Dolorem architecto totam libero earum officiis fuga, consequuntur optio necessitatibus.</p>
          <div className="w-fit p-2 d-flex flex-column flex-sm-row gap-4 gap-md-5 mx-auto">
            <span className='btn btn-outline-light px-4 py-2 rounded-2 fw-medium'>Product Support</span>
            <span className='btn btn-outline-light px-4 py-2 rounded-2 fw-medium'>Customer Support</span>
          </div>
        </div>
      </div>
      <div className='row p-0 col-12 py-2 my-3 d-flex gap-2 justify-content-center align-items-center'>
        <h2 className="mb-2 lead display-6 title-primary-2 text-center fw-bold">Get in Touch With Us</h2>
        <div className="row col-12 d-flex flex-wrap justify-content-evenly gap-2 gap-md-3">
          <ContactCard icon={icon1} title="Office Hours" para="Mon - Sat: 9:30 AM to 6:30PM" />
          <ContactCard icon={icon3} title="Write Us On" para="harinilatextiles@gmail.com" />
          <ContactCard icon={icon2} title="Reach Us At" para="#12, 1st St Jayabharathi Nagar," para1="Porur, Chennai - 600116, India" className="col-12 col-sm-10" />
        </div>
      </div>
      <div className='col-12 m-0 mx-auto d-flex flex-column flex-md-row justify-content-evenly justify-content-sm-start align-items-center p-2 contact-bg px-md-5 my-3'>
        <div className="col-12 col-sm-8 col-md-6 py-3 px-1 px-md-0 row d-flex justify-content-center gap-2">
          <h2 className="lead fs-1 fw-bold d-flex align-items-center title-primary-5 d-flex">
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
              <label htmlFor="floatingTextarea2" >Your Queries Here</label>
            </div>
            <div className='bg-green col-12 text-center mt-4 mx-auto w-50 p-2 fs-5 '>Let's Connect</div>
          </div>
        </div>
        <div className="col-5 d-flex justify-content-center align-items-center d-none d-lg-flex">
          <img src={formImg} alt="Form Image" className=' img-fluid' />
        </div>
      </div>
      <div className="d-flex flex-column col-10 mx-auto gap-2 py-4">
        <h2 className="lead display-6 fw-medium text-center">Connect With Us Through Social Media</h2>
        <p className="lead fs-4 fs-medium text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, quasi nobis velit sed consequatur laborum labore vitae animi ducimus fugit, ut a unde, nisi nemo.</p>
        <div className='d-flex gap-3 justify-content-center'>
          {
            logo.map((e, i) => {
              return (
                <Link className='fs-1 text-dark' key={i}>{e.icon}</Link>
              )
            })
          }
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center p-3 gap-4">
        {
          products.map((e, i) => {
            return (
              <div className="col-10 col-sm-5 col-md-3 d-flex flex-column justify-content-center align-items-center gap-3 border border-1 p-2">
                <img src={e.img} alt={e.title} className='img-fluid' />
                <h2 className="lead fs-3 fw-medium text-center pb-3">{e.title}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
const products = [
  {
    img: product3,
    title: "Cotton yarn"
  },
  {
    img: product2,
    title: "Knitted Fabrics"
  },
  {
    img: product3,
    title: "Woven Fabrics"
  },
]
export default Contact