import React from 'react'
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
        <title>luce.log</title>
        <meta property="og:url" content="https://www.luce.today/" />
        <meta property="og:title" content="luce.log" />
        <meta property="og:type" content="website" />
        {/* 사이트 이미지 */}
        {/* <meta property="og:image" content="https://devtalk.kakao.com/images/devtalk_.png" /> */}
        <meta property="og:description" content="제가 배우고 생각한 것을 기록하는 공간입니다." />
        <meta name="description" content="제가 배우고 생각한 것을 기록하는 공간입니다." />
        <meta
          name="keywords"
          content="개발자,developer,backend,frontend,devops,api,web,웹,모바일,소프트웨어,엔지니어링,프론트엔드,백엔드,아키텍처,기록"
        />
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
