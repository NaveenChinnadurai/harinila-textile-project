import ProductPage from '../productPage'

import mainBanner from "../../assets/banners/knittedFabric.png"
import banner1 from "../../assets/banners/knittedBanner/img1.png"
import banner2 from "../../assets/banners/knittedBanner/img2.png"
import banner3 from "../../assets/banners/knittedBanner/img3.png"

import img1 from '../../assets/stocks/knittedStocks/img1.png'
import img2 from "../../assets/stocks/knittedStocks/img2.png"
import img3 from "../../assets/stocks/knittedStocks/img3.png"
import img4 from "../../assets/stocks/knittedStocks/img4.png"
import img5 from "../../assets/stocks/knittedStocks/img5.png"
import img6 from "../../assets/stocks/knittedStocks/img6.png"

function KnittedFabric() {
    return (
        <>
            <ProductPage
                data={knittedFabricData[0]}
            />
        </>
    )
}

const knittedFabricData = [
    {
        headerTitle1: " Knitted Fabric ",
        headerTitle2: "Harinila Textiles - Knitted fabric Spinning",
        bannerImg: mainBanner,
        bannerText: "Future of Textiles industry begin Here Welcome to Knitted Fabric Division Comfort",
        bannerImages: [banner1, banner2, banner3],
        bannerSubText: "Future of Textiles industry begin Here",
        para1: "Explore top-tier knitted fabrics at Harinila Textiles, your premier destination for quality textiles. Our commitment to excellence and customer satisfaction makes us your reliable partner in the textile industry. Whether you're a garment manufacturer, wholesaler, or textile company, find the perfect knitted fabrics to meet your needs effortlessly.",
        para2: "where innovation meets excellence in the world of knitted fabrics. Our extensive range of knitted fabrics is meticulously crafted to meet the highest industry standards, ensuring superior quality and performance in every stitch. From delicate weaves for intricate designs to durable textures for lasting textiles, we offer versatile solutions tailored to your specific requirements. Partner with us and experience the difference that premium quality knitted fabrics can make in your products.",
        feature: [
            {
                title: "Premium Knitted Fabric Selection",
                path: img1,
                text: "Discover our extensive range of knitted yarn options, meticulously curated from trusted manufacturers renowned for their quality craftsmanship. Our selection of knitted yarns is tailored to meet your diverse needs and preferences, ensuring exceptional quality, durability, and consistency in every strand."
            },
            {
                title: "Customization Options",
                path: img2,
                text: "we recognize that every customer has distinct requirements. That's why we offer a range of customization options to ensure your knitted fabric meets your exact specifications. From yarn count and twist to color selection, we work closely with our clients to deliver personalized solutions that align with their unique needs and preferences."
            },
            {
                title: "International Standards",
                path: img3,
                text: "we prioritize stringent quality control measures to ensure that our fabric yarns meet international industry norms. Our unwavering commitment to quality guarantees that you receive yarns that adhere to the highest standards of consistency in texture, strength, and color."
            },
            {
                title: "Reliable Supply",
                path: img4,
                text: "we have forged robust partnerships with esteemed knitted fabric manufacturers, ensuring a reliable and consistent supply of premium-quality fabrics. Our strong relationships within the industry enable us to maintain a steady flow of high-quality knitted fabrics to meet your demands."
            },
            {
                title: "Competitive Pricing",
                path: img5,
                text: "Quality meets affordability with our fabric yarns. We prioritize competitive pricing without compromising on quality, ensuring cost-effective solutions that meet your budget while upholding the highest standards. Our aim is to provide fabric yarns that not only meet your production needs but also enhance your profitability."
            },
            {
                title: "Global Reach",
                path: img6,
                text: "We're everywhere you need us to be. With our extensive reach across continents, we serve a satisfied clientele worldwide. Our export expertise ensures smooth handling of documentation, shipping, and customs procedures, guaranteeing efficient delivery of our premium fabric yarns to your doorstep, wherever you are."
            }
        ],
        color: "#f3c553",
        contactText: "Get in touch with us today to explore your knitted fabric needs or to request samples. We're excited about the opportunity to collaborate with you and provide top-tier quality yarn perfectly suited for your knitting projects."
    }
]

export default KnittedFabric