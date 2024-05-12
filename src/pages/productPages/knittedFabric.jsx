import knittedFabric from '../../scripts/knittedFabricData'
import ProductPage from '../productPage'
function KnittedFabric() {
    return (
        <>
            <ProductPage
                data={knittedFabric}
            />
        </>
    )
}

export default KnittedFabric