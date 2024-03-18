import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../context/AppContext'
import styles from './Cart.module.scss'
import { MdOutlineDelete } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'

const Cart = React.forwardRef((props, ref) => {
  const { cartItem, setCartItem, quantity, setQuantity } =
    useContext(AppContext)

  const increaseQuantity = (id) => {
    setCartItem((prevCartItem) =>
      prevCartItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = (id) => {
    setCartItem((prevCartItem) => {
      const updatedCart = prevCartItem.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )

      const removedItem = prevCartItem.find(
        (item) => item.id === id && item.quantity === 1
      )

      if (removedItem) {
        removeItem(id, removedItem.quantity)
      } else {
        setQuantity((prevQuantity) => prevQuantity - 1)
      }

      return updatedCart
    })
  }

  const removeItem = (id, quantityToRemove) => {
    setCartItem((prevCartItem) => prevCartItem.filter((item) => item.id !== id))
    setQuantity((prevQuantity) => prevQuantity - quantityToRemove)
  }

  const totalAmount = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <section className={styles.shopping_cart} tabIndex={-1} ref={ref}>
      <div className={styles.title}>Корзина товаров</div>

      {cartItem.map((item, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.actions}>
            <span
              className={styles.delete_btn}
              onClick={() => removeItem(item.id, item.quantity)}
            >
              <MdOutlineDelete />
            </span>
            <span className={styles.like_btn}>
              <AiOutlineLike />
            </span>
          </div>

          <div className={styles.image}>
            <img src={item.imageSrc} alt={item.name} />
          </div>

          <div className={styles.description}>
            <p className={styles.name}>{item.name}</p>
            <span>{item.price}$</span>
          </div>

          <div className={styles.quantity}>
            <button
              className={styles.minus}
              type="button"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>

            <div className={styles.counter}>{item.quantity}</div>
            <button
              className={styles.plus}
              type="button"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
          </div>

          <div className={styles.total}>{item.price * item.quantity}$</div>
        </div>
      ))}
      <div className={styles.check}>
        <div className={styles.check_text}>
          <p>Количество товаров:</p>
          <p>Общая сумма:</p>
        </div>
        <div className={styles.sum}>
          <p>{quantity}</p>
          <p>{totalAmount}$</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.btn_actions}
          onClick={() => {
            setCartItem([]), setQuantity(0)
          }}
        >
          Очистить корзину
        </button>
        <button type="button" className={styles.btn_actions}>
          Оформить заказ
        </button>
      </div>
    </section>
  )
})

export default Cart
