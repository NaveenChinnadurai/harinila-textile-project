import React from 'react'
import bannerImg from '../../assets/bannerImg/knittedFabric.png'
import knittedFabric from '../../json/knittedFabric.json'

import img1 from '../../assets/productImages/knittedFabrics/img1.png'
import img2 from '../../assets/productImages/knittedFabrics/img2.png'
import img3 from '../../assets/productImages/knittedFabrics/img3.png'
import ProductPage from '../productPage'
function KnittedFabric() {
    const bannerImgList = [img1, img2, img3]
    return (
        <>
            <ProductPage
                details={knittedFabric}
                bannerImages={bannerImgList}
                banner={bannerImg}
            />
        </>
    )
}

export default KnittedFabric