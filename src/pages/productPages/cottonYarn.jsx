import cottonyarn from '../../scripts/cottonYarnData'
import ProductPage from '../productPage'
function CottonYarn() {
    return (
        <>
            <ProductPage
                data={cottonyarn[0]}
            />
        </>
    )
}

export default CottonYarn