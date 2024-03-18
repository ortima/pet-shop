import React, { useContext, useRef, useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'
import { AppContext } from '../context/AppContext'
import CartEmpty from '../components/Cart/CartEmpty'

const CartPage = () => {
  const { quantity } = useContext(AppContext)
  const cartRef = useRef(null)

  useEffect(() => {
    if (cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      <Header />
      <main className="container">
        {quantity == 0 ? <CartEmpty /> : <Cart ref={cartRef} />}
      </main>
      <Footer />
    </>
  )
}
export default CartPage
