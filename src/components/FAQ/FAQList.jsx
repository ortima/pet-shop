import { useState } from 'react'
import styles from './FAQ.module.scss'
import faqData from '../../Data/faqData'

import logo from '/logo_test.png'

const FAQList = () => {
  const [isOpen, setIsOpen] = useState({})

  const toggleAnswer = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  return (
    <section className={styles.container}>
      <img src={logo} alt="logo" />
      <div className={styles.content}>
        <h1>
          Почему выбирают зоомагазин <span>«Природа»</span>?
        </h1>
        <p className={styles.subtitle}>
          «Природа» – крупнейшая сеть зоомагазинов и интернет-магазин с
          доставкой по всей России. На сайте priroda-zoo.ru представлен широкий
          выбор зоотоваров, акции и бонусы, а также сервисы по подбору кормов и
          полезные статьи о домашних животных. Есть приложение для iOS и
          Android.
        </p>
      </div>
      <div className={styles.faq_list}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles['faq-item']} ${
              isOpen[index] ? styles.open : ''
            }`}
            onClick={() => toggleAnswer(index)}
          >
            <div className={styles.question}>
              <div>{item.question}</div>
              <div
                className={isOpen[index] ? styles['arrow-open'] : styles.arrow}
              >
                ▼
              </div>
            </div>
            <div
              className={`${styles.answer} ${
                isOpen[index] ? styles['answer-open'] : ''
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQList
