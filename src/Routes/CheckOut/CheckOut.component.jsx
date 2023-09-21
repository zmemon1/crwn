import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckOutItem from '../../Components/CheckoutItem/CheckOutItem.component';
import {CheckoutContainer, HeaderBlock , CheckoutHeader, Total } from './CheckOut.style';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const cartTotal = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.quantity * currentValue.price)
  }, 0)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default Checkout;