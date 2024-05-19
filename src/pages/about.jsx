import React from 'react';
import Header from '../components/header';

import goal from '../assets/aboutImg/illustration_1.png';
import mission from '../assets/aboutImg/illustration_2.png';
import banner1 from '../assets/aboutImg/banner1.png';
import banner2 from '../assets/aboutImg/banner2.png';
import banner3 from '../assets/aboutImg/banner3.png';
import founderImg from '../assets/aboutImg/founderImg.png';
import iconImg from '../../public/favicon.png';
import { CounterCard } from '../pages/home';
import { aboutCount, productInfo, bussinessModel } from '../scripts/data';
import { Link } from 'react-router-dom';

const About = () => {
  const img = [banner1, banner2, banner3];
  return (
    <div className='row'>
      <Header textSize="display-1" text="About Us" />
      <Header
        textSize="fs-5 text-black col-12 col-sm-11 col-md-6 mx-auto"
        text="This captures the essence of Harinila Textiles' focus on quality and its core business of exporting 
              cotton yarn and fabrics"
      />

      <div className='row d-flex gap-0 px-0 py-3 p-md-5 flex-nowrap overflow-auto'>
        {img.map((e, i) => (
          <div className='col-12 col-sm-5 col-md-4' key={i}>
            <img src={e} alt="About Banner Image" className='img-fluid' />
          </div>
        ))}
      </div>

      <div className='col-11 mx-auto  d-flex gap-3 my-4 my-md-0 flex-wrap justify-content-evenly align-content-center gap-md-5 about-bg1 about-card-border'>
        {aboutCount.map((e, i) => (
          <CounterCard
            data={e}
            key={i}
            style="col-10 col-sm-5 col-md-5 col-lg my-0 gap-2 gap-md-0 d-flex flex-column align-items-center align-items-sm-start"
          />
        ))}
      </div>

      <Paragraph
        title="Our Commitment to Textile Excellence"
        style="text-center align-items-center mx-auto my-5 col-12 col-sm-10 col-md-7"
        para="Our commitment to quality, innovation, and sustainability sets us apart in the 
              industry driven by a passion for textiles, our team of experts works tirelessly to ensure 
              that every product that bears the Harinila name reflects our values of integrity, 
              reliability, and customer satisfaction."
      />

      <div className='col-11 row d-flex justify-content-center align-items-center about-bg py-5 rounded-5 mx-auto'>
        <div className='col-12 col-md-7 d-flex flex-column gap-3'>
          <h2 className='lead fs-1 title-primary-4 fw-bolder'>Our Mission and Vision</h2>
          <div className='col-12 d-flex d-md-none justify-content-center'>
            <img src={mission} alt="Mission Image" className='img-fluid' />
          </div>
          <p className='lead fs-4 fw-normal'>
            Leading sustainable textile production through innovation and ethics, delivering quality while supporting communities and minimizing environmental impact. Setting the global standard for sustainable textile manufacturing, enriching lives, and fostering a positive impact on the world.
          </p>
        </div>
        <div className='d-none d-md-flex col-md-4 col-lg-5 justify-content-center'>
          <img src={mission} alt="Mission Image" className='img-fluid' />
        </div>
      </div>

      <div className='row d-flex about-bg py-3 p-md-5 col-12 col-md-10 rounded-md-5 mx-auto align-items-center justify-content-between my-3'>
        <div className='col-12 col-md-8 rounded-5 h-fit d-flex flex-column justify-content-center align-items-center py-3 px-4 bg-white'>
          <div className="col-12 d-flex flex-column-reverse flex-lg-row gap-2 py-2 justify-content-between">
            <div className='col-12 col-md-10'>
              <h2 className="lead fs-1 fw-bold title-primary-1">SIVANESAN KANDASAMY</h2>
              <p className="lead fs-5 fw-medium title-primary-4">DIRECTOR, HARINILA TEXTILES OPC PRIVATE LIMITED</p>
            </div>
            <div className='col-2 d-flex'>
              <img src={iconImg} alt="favicon" className='img-fluid' />
            </div>
          </div>
          <p className="lead fs-5 fw-medium mt-md-5 col-12">22 Years of Techno commercial knowledge & Experience</p>
          <p className="lead fs-5 fw-medium mt-4">Travelled 15 Global countries like Spain, Portugal, Poland, Egypt, China, Vietnam, Korea, Iran & Bangladesh.</p>
          <p className="lead fs-5 fw-medium mt-3">Doing business with 30+ countries on and off with good network and strong presence in 5 countries with partners</p>
          <span className='bg-green px-5 my-4'>Let's Talk</span>
        </div>
        <div className='col-3 d-none d-lg-flex justify-content-end'>
          <img src={founderImg} alt="Founder Image" className='img-fluid' />
        </div>
      </div>

      <h2 className='lead fs-1 fw-bold title-primary-4 text-center mt-5'>Our Business Model</h2>
      <div className='container-fluid gap-3 gap-md-5 py-4 row d-flex justify-content-center'>
        {bussinessModel.map((e, i) => (
          <ModelCard data={e} key={i} />
        ))}
      </div>

      <div className="row d-flex flex-column gap-4 my-3">
        <h2 className="col-12 col-md-5 mx-auto lead fs-1 fw-bold title-primary-4 text-center">Opportunities We See in Textiles in general</h2>
        <div className='col-12 col-md-10 row d-flex justify-content-around align-items-center about-bg py-sm-5 px-md-3 pb-4 rounded-5 mx-auto'>
          <div className='col-12 col-sm-5 col-md-4 p-5 p-sm-0 '>
            <img src={goal} alt="Mission Image" className='img-fluid' />
          </div>
          <p className='col-12 col-sm-6 col-md-7 lead fs-4 fw-normal'>
            India is the Major producer of medium Staple cotton Top exporter of cotton yarn in the world Indian Companies are having Vertical setup with diversified portfolio.
          </p>
        </div>
      </div>

      <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
        <Paragraph
          title="Our Product & Service"
          style="text-center align-items-center mx-auto mt-5"
          para="We are fulfilling Raw material needs Global textile supply chain 
                with Custom requirements. Our products are sold to Knit garment industry, 
                Woven Industry, Denim, Sweater industry, Towel industry, Socks & Technical Textiles"
        />
        <div className='row d-flex px-3 py-4 justify-content-md-center flex-nowrap overflow-auto'>
          {productInfo.map((e, i) => (
            <div className='col-12 col-sm-7 col-md-5 col-lg-3 d-flex flex-grow mx-auto about-product-card position-relative' key={i}>
              <img src={e.img} alt={e.title} className='w-100 about-product-img' />
              <div className='about-product-text position-absolute start-0 top-0 h-100 w-100 d-flex flex-column justify-content-center align-items-center'>
                <p className='text-white lead fs-4 fw-medium title-primary-1'>{e.title}</p>
                <Link to={e.to} className="text-decoration-none d-flex gap-2 justify-content-center align-items-center bg-green px-3 py-1 mx-auto my-2 fs-6">Know More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

const Paragraph = ({ title, style, para }) => (
  <div className={`col-md-7 d-flex flex-column gap-3 ${style}`}>
    <h2 className='lead fs-1 title-primary-4 fw-bolder'>{title}</h2>
    <p className='lead fs-4 fw-normal'>{para}</p>
  </div>
);

const ModelCard = React.memo(({ data }) => (
  <div className='col-12 col-sm-5 mx-0 mx-md-0 col-md-3 d-flex flex-column about-bg py-5 px-4 rounded-4' style={{ minWidth: '280px' }}>
    <h2 className='lead fs-2 title-primary-4 fw-bolder'>{data.num} fcls/year</h2>
    <h2 className='lead fs-5 title-primary-4 fw-medium'>{data.headerText}</h2>
    <p className='lead fs-4 fw-normal mt-3'>{data.para}</p>
  </div>
));