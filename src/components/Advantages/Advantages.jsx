import styles from './Advantages.module.scss'
import advantages from '../../Data/advantagesData'

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      {advantages.map((advantage) => (
        <div className={styles.advantages_item} key={advantage.id}>
          <img src={advantage.src} alt="advantages-img" />
          <h2 className="font-bold">{advantage.title}</h2>
          <div className={styles.advantages_description}>
            <p>{advantage.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Advantages
