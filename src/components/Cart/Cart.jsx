import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import styles from './Cart.module.scss'
import { MdOutlineDelete } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'

const Cart = () => {
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
    <div className={styles.shopping_cart}>
      <div className={styles.title}>Корзина</div>

      {cartItem.map((item, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.button}>
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
            <span>{item.name}</span>
            <span>{item.description}</span>
            <span>{item.price}$</span>
          </div>

          <div className={styles.quantity}>
            <button
              className={styles.plus}
              type="button"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
            <div style={{ textAlign: 'center' }}>{item.quantity}</div>
            <button
              className={styles.minus}
              type="button"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
          </div>

          <div className={styles.total}>${item.price * item.quantity}</div>
        </div>
      ))}

      <div>Всего товаров в корзине: {quantity}</div>
      <div>Общая сумма: {totalAmount}$</div>
      <button
        onClick={() => {
          setCartItem([]), setQuantity(0)
        }}
      >
        Очистить корзину
      </button>
    </div>
  )
}

export default Cart
