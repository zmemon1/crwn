import {ExportIconContainer, ShoppingIcon, ItemCount} from './CartIcon.style.jsx'
import {ReactComponent as CartIconSVG} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
const CartIcon = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const cartCount = cartItems.reduce((accumulator, currentValue)=> accumulator + currentValue.quantity, 0)
    return (
        <ExportIconContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </ExportIconContainer>
    )
}

export default CartIcon;