import {knittedFabricData} from '../../scripts/knittedFabricData'
import ProductPage from '../productPage'
function KnittedFabric() {
    return (
        <>
            <ProductPage
                data={knittedFabricData[0]}
            />
        </>
    )
}

export default KnittedFabric