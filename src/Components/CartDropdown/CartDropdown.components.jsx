import Button from '../Button/Button.Components'
import CartItem from '../CartItem/CartItem.component'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

import {CartDropdownContainer, CartItems, CheckOutButton} from './CartDropdown.style.jsx'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)) :
                    (<span>No Cart Items Found</span>)  
                }  
            </CartItems>
            <CheckOutButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CheckOutButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown;