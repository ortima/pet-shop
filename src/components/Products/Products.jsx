import React, { useState } from 'react'
import styles from './Products.module.scss'
import products from '../../Data/productsData'

import { IoBagAddOutline } from 'react-icons/io5'

const Products = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className={styles.products}>
      <h1>
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
              <button className={styles.card_btn}>
                <IoBagAddOutline size={20} className={styles.svg_button} />
              </button>
            </div>
            <div className={styles.products_details}>
              <div>{product.name}</div>
              <div>{product.price}$</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
