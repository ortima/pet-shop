import styles from './Products.module.scss'

import toast, { Toaster } from 'react-hot-toast'
import { IoBagAddOutline } from 'react-icons/io5'
import { useCart } from '../../context/CartContext'
import { useCatalog } from '../../context/CatalogContext'

import { Link } from 'react-router-dom'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

import Slider from 'react-slick'

const Products = () => {
  const { addToCart } = useCart()
  const { items, loading } = useCatalog()
  const handleAddToCart = (item) => {
    addToCart(item)
    toast.success(`${item.name} добавлен в корзину`)
  }
  const hitItems = items.filter((item) => item.hit)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 800,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    focusOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  function SampleNextArrow(props) {
    const { onClick } = props

    return (
      <MdNavigateNext
        size={40}
        className="-right-10 top-[40%] absolute cursor-pointer text-orange-500 hover:text-orange-600 hover:scale-125"
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <MdNavigateBefore
        size={40}
        className="-left-10 top-[40%] absolute cursor-pointer text-orange-500 hover:text-orange-600 hover:scale-125"
        onClick={onClick}
      />
    )
  }

  return (
    <section className={styles.products}>
      <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-[30px] text-dark mb-4">
          <span className="text-primary">Хит</span> продаж
        </h2>
      </div>
      <LoadingSpinner isLoading={loading} />
      {!loading && (
        <div className="mt-8">
          <Slider {...settings}>
            {hitItems.map((item) => (
              <div key={item.id}>
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
          </Slider>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  )
}

export default Products
