import React from 'react'
import styles from './Cart.module.scss'

import { MdOutlineDelete } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'

const Cart = () => {
  return (
    <div className={styles.shopping_cart}>
      <div className={styles.title}>Shopping Bag</div>

      <div className={styles.item}>
        <div className={styles.button}>
          <span className={styles.delete_btn}>
            <MdOutlineDelete />
          </span>
          <span className={styles.like_btn}>
            <AiOutlineLike />
          </span>
        </div>

        <div className={styles.image}>
          <img src="src\assets\products\product-1.jpg" />
        </div>

        <div className={styles.description}>
          <span>Common Projects</span>
          <span>Bball High</span>
          <span>White</span>
        </div>

        <div className={styles.quantity}>
          <button className={styles.plus} type="button" name="button">
            +
          </button>
          <input type="text" name="name" value="1" />
          <button className={styles.minus} type="button" name="button">
            -
          </button>
        </div>

        <div className={styles.total}>$549</div>
      </div>
    </div>
  )
}

export default Cart
