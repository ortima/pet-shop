import React, { useState, useEffect } from 'react'
import styles from './Header.module.scss'
import Banner from '../Banner/Banner'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            if (offset > 100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={`${styles.container} ${
                isScrolled ? styles.scrolled : ''
            }`}
        >
            <nav className={styles.nav}>
                <ul>
                    <li>Kitter</li>
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

                <ul>
                    <li>auth</li>
                    <li>trash</li>
                </ul>
            </nav>
            <Banner />
        </header>
    )
}

export default Header
