import styles from './Products.module.scss'

import toast, { Toaster } from 'react-hot-toast'
import { IoBagAddOutline } from 'react-icons/io5'
import { useCart } from '../../context/CartContext'
import { useCatalog } from '../../context/CatalogContext'

import { Link } from 'react-router-dom'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'

const Products = () => {
  const { addToCart } = useCart()
  const { items, loading } = useCatalog()
  const handleAddToCart = (item) => {
    addToCart(item)
    toast.success(`${item.name} добавлен в корзину`)
  }
  const hitItems = items.filter((item) => item.hit)

  return (
    <section className={styles.products}>
      <h1 className="text-2xl">
        <span>Хит</span> продаж
      </h1>
      <LoadingSpinner isLoading={loading} />
      {!loading && (
        <div className={styles.products_list}>
          {hitItems.map((item) => (
            <div className={styles.products_item} key={item.id}>
              <div className={styles.image_container}>
                <Link to={`/catalog/${item.id}`}>
                  <img
                    className={styles.products_image}
                    src={item.imageSrc}
                    alt={item.name}
                  />
                </Link>
                <button
                  className={styles.card_btn}
                  onClick={() => handleAddToCart(item)}
                >
                  <IoBagAddOutline size={20} className={styles.svg_button} />
                </button>
                <div className={styles.products_details}>
                  <div>{item.name}</div>
                  <div>{item.price}₽</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  )
}

export default Products
