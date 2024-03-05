import React from 'react'
import styles from './Banner.module.scss'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div>Высокое качество</div>

                    <p>По лучшим ценам!</p>

                    <a href="#" className={styles.banner_link}>
                        Посмотреть
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Banner
