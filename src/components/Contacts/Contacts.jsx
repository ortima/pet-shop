import styles from './Contacts.module.scss'
import { BsGeoAltFill, BsTelephone } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { IoShareSocialOutline } from 'react-icons/io5'
import { FaInstagram, FaPinterest } from 'react-icons/fa'

const Contacts = () => {
  return (
    <>
      <div className={styles.container_title}>
        <h1>Наши контакты</h1>
        <h2>Тут какой-то текст</h2>
      </div>

      <div className={styles.contacts}>
        <div className={styles.contacts_info}>
          <div className={styles.block}>
            <BsGeoAltFill />
            <div className={styles.title}>Адрес:</div>
            <div className={styles.description}>
              <p>ул. Кабардинская, 9-11,</p>
              <p>г.Нальчик, КБР</p>
            </div>
          </div>
          <div className={styles.block}>
            <IoIosMail />
            <div className={styles.title}>email:</div>
            <div className={styles.description}>
              <p>zoo-priroda@mail.ru</p>
              <p>account.net@mail.ru</p>
            </div>
          </div>
          <div className={styles.block}>
            <BsTelephone />
            <div className={styles.title}>Телефон:</div>
            <div className={styles.description}>
              <p>+7 (777)-777-77-77</p>
              <p>+7 (777)-777-77-77</p>
            </div>
          </div>
          <div className={styles.block}>
            <IoShareSocialOutline />
            <div className={styles.title}>Ссылки:</div>
            <div className={styles.description}>
              <div className={styles.social}>
                <FaInstagram />
                <FaPinterest />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1447.5621939146147!2d43.606724453515135!3d43.47887444634698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405a06939208617d%3A0x1b1575813402db6d!2z0JfQvtC-0LzQsNCz0LDQt9C40L0g0J_RgNC40YDQvtC00LA!5e0!3m2!1sru!2sru!4v1710956206141!5m2!1sru!2sru"
            width="600"
            height="500"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Contacts
