import React from 'react'
import styles from './Category.module.scss'
import categories from '../../Data/categoriesData'

const Category = ({}) => {
  return (
    <section className={styles.category}>
      <h1>
        <span>Топовые</span> категории
      </h1>
      <div className={styles.list}>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <img src={category.src} alt="" />
              <a href="#">{category.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Category
