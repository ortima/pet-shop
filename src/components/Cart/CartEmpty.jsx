import React from 'react'
import styles from './Cart.module.scss'
import EmptyCart from '/empty_cart.png'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <section className={styles.cart_empty}>
      <h1 className="text-2xl">Корзина пустая</h1>
      <div className={styles.cart_empty_content}>
        <p>Вероятнее всего, вы еще ничего не положили в корзину</p>
        <p>Для того чтобы оформить заказ, перейдите на главную страницу</p>
        <img src={EmptyCart} alt="cart-empty" />
        <Link to="/">
          <button type="button">Вернуться на главную</button>
        </Link>
      </div>
    </section>
  )
}

export default CartEmpty
