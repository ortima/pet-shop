import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)
const EMPTY_CART = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
}

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(EMPTY_CART.items)
  const [totalPrice, setTotalPrice] = useState(EMPTY_CART.totalPrice)
  const [totalCount, setTotalCount] = useState(EMPTY_CART.totalCount)

  useEffect(() => {
    const totalPrice = sum(cartItems.map((item) => item.price))
    const totalCount = sum(cartItems.map((item) => item.quantity))
    setTotalPrice(totalPrice)
    setTotalCount(totalCount)
  }, [cartItems])

  const sum = (items) => {
    return items.reduce((prevValue, curValue) => prevValue + curValue, 0)
  }

  const addToCart = (product) => {
    const cartItem = cartItems.find((item) => item.product.id === product.id)
    if (cartItem) {
      changeQuantity(cartItem, cartItem.quantity + 1)
    } else {
      setCartItems([
        ...cartItems,
        { product, quantity: 1, price: product.price },
      ])
    }
  }

  const removeFromCart = (productId) => {
    const filteredCartItems = cartItems.filter(
      (item) => item.product.id !== productId
    )
    setCartItems(filteredCartItems)
  }

  const changeQuantity = (cartItem, newQuantity) => {
    const { product } = cartItem

    if (newQuantity === 0) {
      removeFromCart(product.id)
    } else {
      const changedCartItem = {
        ...cartItem,
        quantity: newQuantity,
        price: product.price * newQuantity,
      }

      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id ? changedCartItem : item
        )
      )
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart: { items: cartItems, totalCount, totalPrice },
        removeFromCart,
        changeQuantity,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
