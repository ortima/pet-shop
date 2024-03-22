import styles from './Articles.module.scss'
import articles from '../../Data/articlesData'

const Articles = () => {
  return (
    <section className={styles.article_block}>
      {articles.map((article, index) => (
        <div key={index} className={styles.article}>
          <img src={article.src} alt="" />
          <div className={styles.article_text}>
            <span>{article.subTitle}</span>
            <h2 className={styles.article_title}>{article.title}</h2>
            <a href="#" className={styles.article_btn}>
              {article.btnText}
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Articles
