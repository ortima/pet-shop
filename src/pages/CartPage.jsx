import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'

const CartPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Cart />
      </main>
      <Footer />
    </>
  )
}
export default CartPage
