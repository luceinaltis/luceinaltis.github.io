import Date from '../components/date'

import styles from '../styles/modules/components/homeTemplate.module.scss'

const HomeTemplate = ({
  title,
  content,
  date,
}: {
  title: string
  content: string
  date: string
}): JSX.Element => {
  return (
    <div className={styles.post__wrapper}>
      <div className={styles.post__thumbnail}>이미지</div>
      <div className={styles.post__info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>
          <p>{content}</p>
          <div className={styles.date}>
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTemplate
