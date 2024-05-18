import wovenFabric from '../assets/productImages/wovenFabric.png'
import cottonYarn from '../assets/productImages/cottonYarn.png'
import knittedFabric from '../assets/productImages/knittedFabric.png'

import poster1 from "../assets/posters/poster1.png"
import poster2 from "../assets/posters/poster2.png"
import poster3 from "../assets/posters/poster3.png"

import { LuPhoneCall as Phone } from "react-icons/lu";
import { IoMailOutline as Mail } from "react-icons/io5";
import { FaLocationDot as Location } from "react-icons/fa6";

export const productInfo = [
    {
        img: wovenFabric,
        to:"/wovenfabric",
        title: " WOVEN FABRICS",
        para: "we weave excellence into every thread. Our high-quality fabrics blend durability with timeless elegance, crafted by skilled artisans in state-of-the-art facilities."
    },
    {
        img: cottonYarn,
        to:"/cottonyarn",
        title: "COTTON YARN",
        para: "Elevate your textile creations with our premium cotton yarn, trusted by industry leaders worldwide. From garment manufacturers to wholesalers, we have the perfect yarn to meet your specific needs, ensuring excellence in every thread."
    },
    {
        img: knittedFabric,
        to:"/knittedfabric",
        title: "KNITTED FABRICS",
        para: "Knitting Division, we excel in crafting premium knit fabrics for diverse industries. Our state-of-the-art machinery and skilled team ensure exceptional quality tailored to your specific requirements."
    },
]
export const aboutCount = [
    {
        num: 25,
        text: "Years in the industry"
    },
    {
        num: 50,
        text: "Varieties of Products"
    },
    {
        num: 30,
        text: "Exports Countries"
    },
    {
        num: 5000,
        text: "Containers"
    },
]


export const posters = [
    {
        imgPath: poster1,
        title: "DHAKA YARN & FABRIC SHOW'2022",
        date: "18",
        month: "Aug",
        year:"2022"
    },
    {
        imgPath: poster2,
        title: "PREVIEW IN DAEGU FAIR,KOREA",
        date: "06",
        month: "March",
        year:"2023"
    },
    {
        imgPath: poster3,
        title: "DHAKA INTERNATIONAL YARN & FABRIC SHOW' 2022",
        date: "07",
        month: "Sep",
        year:"2023"
    },
]

export const bussinessModel=[
    {
        num:150,
        headerText:"We work as agents",
        para:"Working as agents for sourcing to Overseas buyer from Indian suppliers. Selling from top Mills in India like Ramco, Nahar, sintex & Premier, etc"
    },
    {
        num:50,
        headerText:"We do our Own Merchant Export",
        para:"We do Own Export by sourcing from PAN India suppliers & Doing Direct export to USA, Poland, Bangladesh & Portugal"
    },
    {
        num:15,
        headerText:"Our Own Export",
        para:"We are making Innovative& Value added textile products like Special Dyed yarns and special development Knitted Fabrics"
    }
]


export const contactDetails=[
    {
        text:"+91 44 35652474",
        icon:Phone
    },
    {
        text:"marketing@harinilatextiles.com",
        icon:Mail
    },
    {
        text:"12, 1st St Jayabharathi Nagar, Porur,Chennai - 600116, India",
        icon:Location
    }
]