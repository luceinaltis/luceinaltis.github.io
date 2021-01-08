import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'

import { getAllPostIds, getPostData } from '../../lib/posts'

import styles from '../../styles/modules/Log.module.scss'

type Props = {
  postData: {
    title: string
    id: string
    date: string
    content: string
    contentHtml: string
    tags: string[]
    thumbnail: string
  }
}

const Post: NextPage<Props> = ({ postData }) => {
  const date = parseISO(postData.date)
  return (
    <>
      <Head>
        <title>{postData.title} - luce.log</title>
      </Head>
      <section className="log__container">
        <div className={styles.head__wrapper}>
          <h1>{postData.title}</h1>
          <div className={styles.date}>
            <time dateTime={postData.date}>{format(date, 'yyyy년 MM월 dd일')}</time>
          </div>
          <div className={styles.tags}>
            {postData.tags.map((value, index) => {
              return (
                <a key={index} href="#">
                  {value.toUpperCase()}
                </a>
              )
            })}
          </div>
          <img className={styles.thumbnail} src={postData.thumbnail} alt="article thumbnail" />
        </div>
        <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></article>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string)
  return {
    props: {
      postData,
    },
  }
}

export default Post
