import wovenfabrics from '../../json/wovenfabric.json'
import ProductPage from '../productPage'
function WovenFabrics() {
    return (
        <>
            <ProductPage
                data={wovenfabrics}
            />
        </>
    )
}

export default WovenFabrics