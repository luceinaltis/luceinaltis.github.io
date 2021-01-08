import Date from '../components/date'

import styles from '../styles/modules/components/homeTemplate.module.scss'

const HomeTemplate = ({
  title,
  date,
  thumbnail,
  // tags,
  description,
  id,
}: {
  title: string
  date: string
  thumbnail: string
  tags: string[]
  description: string
  id: string
}): JSX.Element => {
  return (
    <div className={styles.post__wrapper}>
      <a href={`/log/${id}`} className={styles.post__thumbnail}>
        <div>
          <img src={thumbnail} alt={title} />
        </div>
      </a>
      <div className={styles.post__info}>
        <a href={`/log/${id}`}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </a>
        <div className={styles.date}>
          <Date dateString={date} />
        </div>
      </div>
    </div>
  )
}

export default HomeTemplate
