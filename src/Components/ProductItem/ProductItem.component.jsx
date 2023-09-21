
import { ProductContainer, ProductButton, Image, Footer} from './ProductItem.style.jsx';

import Button from "../Button/Button.Components"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const ProductItem = ({ product }) => {
    const { imageUrl, name, price } = product
    const {addItem} = useContext(CartContext)
    const addProduct = () => addItem(product)

    return (
        <ProductContainer>
            <Image src={imageUrl} alt={`${name}`} />
            <Footer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </Footer>
            <ProductButton buttonType='inverted' onClick={addProduct}>Add to card</ProductButton>
        </ProductContainer>
    )
}

export default ProductItem