import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { TbLogin2 } from 'react-icons/tb'

const Header = ({ quantity }) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const Scroll = () => {
      window.scrollY > 500 ? setIsSticky(true) : setIsSticky(false)
    }

    window.addEventListener('scroll', Scroll)

    return () => {
      window.removeEventListener('scroll', Scroll)
    }
  }, [])

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#">Зоомагазин "Природа"</a>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Товары</a>
            </li>
            <li>
              <a href="#">Блог</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button className="actions-btn" aria-label="LogIn">
            <TbLogin2 size={30} />
          </button>
          <button className="actions-btn cart" aria-label="cart">
            <MdOutlineShoppingBag size={30} />
            <span className={styles.badge}>{quantity}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
