import cottonyarn from '../../scripts/cottonYarnData'
import ProductPage from '../productPage'
function CottonYarn() {
    console.log(typeof(cottonyarn))
    return (
        <>
            <ProductPage
                data={cottonyarn}
            />
        </>
    )
}

export default CottonYarn