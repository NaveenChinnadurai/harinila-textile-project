import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'


import { contactDetails,socialAccounts } from '../scripts/data'

function Contact() {
  return (
    <div className='p-0'>
      <Header textSize="display-1" text="Contact Us" />
      <Header
        textSize="fs-5 text-black col-12 col-sm-11 col-md-6 mx-auto mt-0"
        text="Any question or remarks? Just write us a message!"
      />
      <div className='col-11 mx-auto row contact-banner position-relative h-100vh w-100vw text-white rounded-5 p-3 pb-5 p-sm-5 my-4'>
        <div className="ps-sm-4 border-start border-5 col-12 col-sm-8 col-md-6 d-flex flex-column gap-2 align-self-end">
          <h2 className="lead display-6 fw-medium ">Get in Touch</h2>
          <p className="lead fs-4 fw-normal">contact us using the form below or through any of our contact methods. We’re here to help and look forward to hearing from you!!</p>
        </div>
      </div>

      <div className='col-11 mx-auto row d-flex flex-column flex-md-row mt-5'>
        <div className="col-md-6 col-lg-5 d-flex flex-column gap-3 gap-md-5 bg-primary-1 p-3 p-md-4 p-lg-5 text-white rounded-4">
          <h2 className="lead fs-3 fw-medium mb-3">Contact Information</h2>
          <div className="d-flex flex-column gap-4">
            {
              contactDetails.map((e, i) => {
                const Icon = e.icon
                return (
                  <div className='d-flex gap-2 col-12 col-lg-8' key={i}>
                    <span className='fs-5'><Icon /></span>
                    <p className="lead fs-5 fw-normal">{e.text}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='col-11 mx-auto col-md-6 col-lg-7 row py-4 p-sm-5 d-flex justify-content-end'>
          <div className='col-12 col-sm-6  d-flex flex-column gap-1 mb-3'>
            <label htmlFor="first-name" className='lead fs-5 fw-medium'>First Name</label>
            <input type="text" name="First Name" id="first-name" className='lead border-none fs-6 p-2 border-0 bg-transparent border-bottom border-secondary fw-normal' />
          </div>
          <div className='col-12 col-sm-6 d-flex flex-column gap-1 mb-3'>
            <label htmlFor="first-name" className='lead fs-5 fw-medium'>Last Name</label>
            <input type="text" name="First Name" id="first-name" className='lead border-none fs-6 p-2 border-0 bg-transparent border-bottom border-secondary fw-normal' />
          </div>
          <div className='col-12 col-sm-6 d-flex flex-column gap-1 mb-3'>
            <label htmlFor="first-name" className='lead fs-5 fw-medium'>Email</label>
            <input type="text" name="First Name" id="first-name" className='lead border-none fs-6 p-2 border-0 bg-transparent border-bottom border-secondary fw-normal' />
          </div>
          <div className='col-12 col-sm-6 d-flex flex-column gap-1 mb-3'>
            <label htmlFor="first-name" className='lead fs-5 fw-medium'>Phone Number</label>
            <input type="text" name="First Name" id="first-name" className='lead border-none fs-6 p-2 border-0 bg-transparent border-bottom border-secondary fw-normal' />
          </div>
          <div className='col-12 d-flex flex-column gap-1 mb-3'>
            <label htmlFor="first-name" className='lead fs-5 fw-medium'>Phone Number</label>
            <input type="text" name="First Name" id="first-name" className='lead border-none fs-6 p-2 border-0 bg-transparent border-bottom border-secondary fw-normal' />
          </div>
          <div className='col-10 d-flex justify-content-end mt-5'>
            <span className='btn-bg w-fit h-fit px-4 py-2 text-white rounded-1 justify-self-end'>Send Messege</span>
          </div>
        </div>
      </div>
      <div className='row col-12 mt-5 d-flex justify-content-between about-bg'>
        <div className='col-md-6'>d</div>
        <div className='col-md-6 bg-white p-4 rounded-5'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0858433527073!2d80.15470157388758!3d13.030205213593108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260e2aec0daa9%3A0xee3c2d6c04b9479f!2sHARINILA%20TEXTILES%20OPC%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1716020906033!5m2!1sen!2sin"
            height={400}
            style={{border:"0"}}
            allowFullScreen={false}
            loading="lazy"
            aria-hidden="false"
            tabIndex="0"
            className='rounded-5 col-12 col-md-12'
            referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </div>
      <div className="d-flex flex-column col-10 mx-auto gap-2 py-4">
        <h2 className="lead display-6 fw-medium text-center">Connect With Us Through Social Media</h2>
        <div className='d-flex gap-5 justify-content-center'>
          {
            socialAccounts.map((e, i) => {
              return (
                <Link className='fs-1 text-dark' key={i}>
                  <img src={e.icon} alt="Contact Icon" height={50} width={50} />
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Contact