import {wovenFabricData} from '../scripts/wovenFabricData'
import ProductPage from './productPage'
function WovenFabrics() {
    return (
        <>
            <ProductPage
                data={wovenFabricData[0]}
            />
        </>
    )
}

export default WovenFabrics