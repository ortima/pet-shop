import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Cart from '../components/Cart/Cart'
import CartEmpty from '../components/Cart/CartEmpty'

const CartPage = () => {
  const { quantity } = useContext(AppContext)

  return <>{quantity == 0 ? <CartEmpty /> : <Cart />}</>
}
export default CartPage
