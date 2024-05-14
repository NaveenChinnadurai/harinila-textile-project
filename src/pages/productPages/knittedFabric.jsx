import knittedFabric from '../../scripts/knittedFabricData'
import ProductPage from '../productPage'
function KnittedFabric() {
    return (
        <>
            <ProductPage
                data={knittedFabric[0]}
            />
        </>
    )
}

export default KnittedFabric