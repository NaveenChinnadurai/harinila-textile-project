import {wovenFabricData} from '../scripts/wovenFabricData'
import ProductPage from './productPage'
function WovenFabrics() {
    console.log(wovenfabrics)
    return (
        <>
            <ProductPage
                data={wovenFabricData[0]}
            />
        </>
    )
}

export default WovenFabrics