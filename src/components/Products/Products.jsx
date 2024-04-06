import { useState, useContext } from 'react'
import styles from './Products.module.scss'
import products from '../../Data/productsData'
import { AppContext } from '../../context/AppContext'

import toast, { Toaster } from 'react-hot-toast'
import { IoBagAddOutline } from 'react-icons/io5'

const Products = () => {
  const { cartItem, setCartItem, quantity, setQuantity } =
    useContext(AppContext)

  const [isHovered, setIsHovered] = useState(false)

  const addToCart = (product) => {
    setQuantity(quantity + 1)
    toast.success(`${product.name} добавлен в вашу корзину!`)
    const existingItem = cartItem.find((item) => item.id === product.id)
    if (existingItem) {
      const updatedCart = cartItem.map((item) =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      setCartItem(updatedCart)
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }])
    }
    console.log('Товар добавлен в корзину!', product)
  }

  return (
    <section className={styles.products}>
      <h1 className="text-2xl">
        <span>Хит</span> продаж
      </h1>
      <div className={styles.products_list}>
        {products.map((product) => (
          <div className={styles.products_item} key={product.id}>
            <div
              className={styles.image_container}
              onMouseEnter={() => setIsHovered(product.id)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                className={styles.products_image}
                src={
                  isHovered === product.id
                    ? product.hoverImageSrc
                    : product.imageSrc
                }
                alt={product.name}
              />
              <button
                className={styles.card_btn}
                onClick={() => {
                  addToCart(product)
                }}
              >
                <IoBagAddOutline size={20} className={styles.svg_button} />
              </button>
              <div className={styles.products_details}>
                <div>{product.name}</div>
                <div>{product.price}$</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  )
}

export default Products
