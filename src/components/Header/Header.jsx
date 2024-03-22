import styles from './Header.module.scss'
import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

import { MdOutlineShoppingBag } from 'react-icons/md'
import { TbLogin2 } from 'react-icons/tb'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const { quantity } = useContext(AppContext)
  console.log(quantity)

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
          <Link to="#">Зоомагазин &quot;Природа&quot;</Link>
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
          <Link to="/cart" className="actions-btn cart" aria-label="cart">
            <MdOutlineShoppingBag size={30} />
            {quantity > 0 && <span className={styles.badge}>{quantity}</span>}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
