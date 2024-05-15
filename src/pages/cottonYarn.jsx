import {cottonData} from '../scripts/cottonYarnData'
import ProductPage from './productPage'
function CottonYarn() {
    return (
        <>
            <ProductPage
                data={cottonData[0]}
            />
        </>
    )
}

export default CottonYarn