import styles from './Advantages.module.scss'
import advantages from '../../Data/advantagesData'

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      {advantages.map((advantage) => (
        <div className={styles.advantages_item} key={advantage.id}>
          <img src={advantage.src} alt="advantages-img" />
          <div className={styles.advantages_description}>
            <h2>{advantage.title}</h2>
            <p>{advantage.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Advantages
