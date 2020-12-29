import React from 'react'
import Head from 'next/head'

import { GetStaticProps } from 'next'

import { getSortedPostsData } from '../lib/posts'
import HomeTemplate from '../components/homeTemplate'
import styles from '../styles/Home.module.css'

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}): JSX.Element => {
  return (
    <div>
      <Head>
        <title>마이 프레셔스</title>
      </Head>
      <main>
        <section>
          {allPostsData.map((value, idx: number) => {
            return <HomeTemplate key={idx} {...value} />
          })}
        </section>
      </main>
    </div>
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
