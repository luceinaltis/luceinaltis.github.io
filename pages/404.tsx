import { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/modules/404.module.scss'

const Page404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - luce.log</title>
      </Head>
      <section className={styles.wrapper}>
        <div className={styles.background_404}>404</div>
        <div className={styles.emoji}></div>
        <div className={styles.desc}>찾는게 없네요..</div>
      </section>
    </>
  )
}

export default Page404
