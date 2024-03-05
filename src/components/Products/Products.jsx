import React, { useState } from 'react'
import styles from './Products.module.scss'
import products from '../../Data/productsData'

const Products = () => {
    const [isHovered, setIsHovered] = useState(null)

    return (
        <section className={styles.products}>
            <h1>
                <span>Хит</span> продаж
            </h1>
            <div className={styles.products_list}>
                {products.map((product) => (
                    <div
                        className={styles.products_item}
                        key={product.id}
                        onMouseEnter={() => setIsHovered(product.id)}
                        onMouseLeave={() => setIsHovered(null)}
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
                        <div className={styles.products_details}>
                            <div>{product.name}</div>
                            <div>{product.price}$</div>
                            <button>Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products
