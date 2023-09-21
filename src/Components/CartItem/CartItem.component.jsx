import { CartItemContainer, CartImage, ItemDetails } from  './CartItem.style.jsx'

const CartItem = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <CartItemContainer>
            <CartImage src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;