import React from 'react'
import styles from './AlertAddCart.module.scss'

const AlertAddCart = () => {
  return (
    <div className={styles.alert_container}>
      <h2>Товар добавлен в корзину</h2>
      <div>
        <button>Перейти в корзину</button>
        <button>Продолжить покупки</button>
      </div>
    </div>
  )
}

export default AlertAddCart
