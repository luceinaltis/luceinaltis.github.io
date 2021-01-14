import React, { useEffect } from 'react'
import Head from 'next/head'

import { GetStaticProps } from 'next'

import { getSortedPostsData } from '../lib/posts'
import HomeTemplate from '../components/homeTemplate'
import styles from '../styles/modules/Home.module.scss'

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    content: string
    id: string
    thumbnail: string
    description: string
    tags: string[]
  }[]
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>마이 프레셔스</title>
      </Head>
      <main className="home__container">
        <div className={styles.wrapper}>
          <div className={styles.posts__wrapper}>
            {allPostsData.map((value, idx: number) => {
              return <HomeTemplate key={idx} {...value} />
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Home
