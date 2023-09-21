import { prettyDOM } from "@testing-library/react";
import { createContext, useState } from "react";

const defaultValues = {
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems:[],
    addItem : () => {},
    removeItem : () => {},
    deleteItem : () => {}
}
export const CartContext = createContext(defaultValues)

const addItemToCart = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem?.id === productToAdd.id)
    if(existingCartItem){
        return cartItems.map(cartItem => (
            cartItem?.id == productToAdd.id ? 
            {...cartItem, quantity : (cartItem.quantity + 1)} : 
            cartItem
        ))
    }
    return [...cartItems, {...productToAdd, quantity : 1}]
}
const removeItemFromCart = (cartItems, productToRemove) => { 
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
}

const decreaseQuantity = (cartItems, productItem) => {
    const existingItem = cartItems.filter(cartItem => cartItem.id === productItem.id)
    if(existingItem[0].quantity > 1){
        console.log('EXISTING =>', existingItem)
        console.log('EXISTING =>', existingItem[0].quantity)
        return cartItems.map(cartItem => (
            cartItem.id === productItem.id && cartItem.quantity > 0 ? {...cartItem, quantity : (cartItem.quantity - 1)} : cartItem
        ))
    }
    return removeItemFromCart(cartItems, productItem)
}


export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    
    const addItem = (productToAdd) => {
        setCartItems(addItemToCart(cartItems, productToAdd))
    }
    const removeItem = (productToRemove) => {
        setCartItems(decreaseQuantity(cartItems,productToRemove))
    }
    const deleteItem = (productToRemove) => {
        setCartItems(removeItemFromCart(cartItems,productToRemove))
    }
    
    const value = {isCartOpen, setIsCartOpen, cartItems, addItem, removeItem,deleteItem}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider >
    )
}