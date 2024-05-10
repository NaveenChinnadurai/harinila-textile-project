import knittedFabric from '../../json/knittedFabric.json'
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