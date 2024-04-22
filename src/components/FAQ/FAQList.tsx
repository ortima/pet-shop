import React, { useState } from 'react'
import styles from './FAQ.module.scss'
import faqData from '../../Data/faqData'
import { FaqData } from '../../types/types'

import logo from '/logo_test.png'

const FAQList: React.FC = () => {
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({})

  const toggleAnswer = (index: number) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  return (
    <section className={styles.container}>
      <img src={logo} alt="logo" />
      <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[610px]">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-[30px] text-dark mb-4">
          Почему выбирают зоомагазин
          <span className="text-primary">«Природа»</span>?
        </h2>
      </div>
      <div className={styles.content}>
        <p className={styles.subtitle}>
          «Природа» – крупнейшая сеть зоомагазинов и интернет-магазин с
          доставкой по всей России. На сайте priroda-zoo.ru представлен широкий
          выбор зоотоваров, акции и бонусы, а также сервисы по подбору кормов и
          полезные статьи о домашних животных. Есть приложение для iOS и
          Android.
        </p>
      </div>
      <div className={styles.faq_list}>
        {faqData.map((item: FaqData, index: number) => (
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
