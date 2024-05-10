import React from 'react'
import bannerImg from '../../assets/bannerImg/knittedFabric.png'
import wovenfabrics from '../../json/wovenfabric.json'

import img1 from '../../assets/productImages/wovenFabrics/img1.png'
import img2 from '../../assets/productImages/wovenFabrics/img2.png'
import img3 from '../../assets/productImages/wovenFabrics/img3.png'

import ProductPage from '../productPage'

function WovenFabrics() {
    const bannerImgList = [img1, img2, img3]
    return (
        <>
            <ProductPage
                details={wovenfabrics}
                bannerImages={bannerImgList}
                banner={bannerImg}
            />
        </>
    )
}

export default WovenFabrics