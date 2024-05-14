import wovenfabrics from '../../scripts/wovenFabricData'
import ProductPage from '../productPage'
function WovenFabrics() {
    return (
        <>
            <ProductPage
                data={wovenfabrics[0]}
            />
        </>
    )
}

export default WovenFabrics