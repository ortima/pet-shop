import styles from './Header.module.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="#">Зоомагазин "Природа"</Link>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/catalog">Товары</Link>
            </li>
            <li>
              <Link to="/blog">Блог</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button className="actions-btn" aria-label="LogIn">
            <TbLogin2 size={30} />
          </button>
          <button className="actions-btn cart" aria-label="cart">
            <Link to="/cart">
              {' '}
              <MdOutlineShoppingBag size={30} />
              <span className={styles.badge}>{quantity}</span>
            </Link>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
