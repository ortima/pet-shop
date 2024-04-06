import { useContext } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'
import { AppContext } from '../context/AppContext'
import CartEmpty from '../components/Cart/CartEmpty'

const CartPage = () => {
  const { quantity } = useContext(AppContext)

  return (
    <>
      <Header />
      <main className="container">
        {quantity == 0 ? <CartEmpty /> : <Cart />}
      </main>
      <Footer />
    </>
  )
}
export default CartPage
