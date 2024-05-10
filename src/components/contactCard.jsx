import icon1 from '../assets/Icons/icon1.png'
import icon2 from '../assets/Icons/icon2.png'
import icon3 from '../assets/Icons/icon3.png'

function ContactSection() {
    return (
        <div className="row col-12 d-flex flex-wrap justify-content-evenly gap-2 gap-md-3">
            <ContactCard icon={icon1} title="Office Hours" para="Mon - Sat: 9:30 AM to 6:30PM" class="" />
            <ContactCard icon={icon3} title="Write Us On" para="harinilatextiles@gmail.com" class="" />
            <ContactCard icon={icon2} title="Reach Us At" para="#12, 1st St Jayabharathi Nagar," para1="Porur, Chennai - 600116, India" class="col-12 col-sm-10" />
        </div>
    )
}

function ContactCard(props) {
    return (
        <div className={`col-5 col-sm-5 d-flex flex-column flex-md-row gap-2 p-1 justify-content-center align-items-center ${props.class}`}>
            <div>
                <img src={props.icon} alt="Clock Icon" width={80} />
            </div>
            <div className='d-flex flex-column p-0 align-items-center align-items-md-start'>
                <h2 className="lead fs-4 fw-bolder title-primary-4 w-fit text-center">{props.title}</h2>
                <p className="lead fs-6 fw-medium w-fit text-center d-none d-sm-flex">{props.para} {props.para1} </p>
            </div>
        </div>
    )
}

export default ContactSection