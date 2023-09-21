import {CheckoutItemContainer, ImageContainer, RemoveButton} from './CheckOutItem.style.jsx';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CheckOutItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;

    const { addItem,removeItem,deleteItem } = useContext(CartContext)
    const removeItemHandler = () => {
        removeItem(cartItem)
    }
    const addItemHandler = () => {
        addItem(cartItem)
    }
    
    const clearItemHandler = () => {
        deleteItem(cartItem)
    }
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'> {price}</span>
            <RemoveButton onClick={clearItemHandler}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckOutItem;