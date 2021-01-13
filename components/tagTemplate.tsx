import Link from 'next/link'

import styles from '../styles/modules/components/tagTemplate.module.scss'

const TagTemplate = (value: [string, number]): JSX.Element => {
  const name = value[0]
  const count = value[1]

  return (
    <div className={styles.tag__wrapper}>
      <div className={styles.tag__info}>
        <div className={styles.title__wrapper}>
          <Link href={`/tags/${name}`}>
            <a>
              <h1>{name}</h1>
            </a>
          </Link>
        </div>
        <div className={styles.desc__log}>{count}개의 기록</div>
      </div>
    </div>
  )
}

export default TagTemplate
