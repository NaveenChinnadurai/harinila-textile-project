import React from 'react'
import bannerImg from '../../assets/bannerImg/cottonBanner.png'
import cottonyarn from '../../json/cotton.json'
import img1 from '../../assets/productImages/Cotton/img1.png'
import img2 from '../../assets/productImages/Cotton/img2.png'
import img3 from '../../assets/productImages/Cotton/img3.png'
import ProductPage from '../productPage'
function CottonYarn() {
    const bannerImgList = [img1, img2, img3]
    return (
        <>
            <ProductPage
                details={cottonyarn}
                bannerImages={bannerImgList}
                banner={bannerImg}
            />
        </>
    )
}

export default CottonYarn