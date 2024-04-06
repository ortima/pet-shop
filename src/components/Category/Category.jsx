import styles from './Category.module.scss'
import categories from '../../Data/categoriesData'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <section className={styles.category}>
      <h1 className="text-2xl">
        <span>Топовые</span> категории
      </h1>
      <div className={styles.list}>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <img src={category.src} alt="" />
              <Link to="#">{category.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Category
