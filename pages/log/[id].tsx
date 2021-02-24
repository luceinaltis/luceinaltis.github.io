import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import { useEffect, useLayoutEffect, useRef } from 'react'

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
    description: string
  }
}

const Post: NextPage<Props> = ({ postData }) => {
  const date = parseISO(postData.date)

  useEffect(() => {
    const scriptTagFirst = document.createElement('script')
    scriptTagFirst.src = '/prism.js'

    document.body.appendChild(scriptTagFirst)
    const scriptTagSecond = document.createElement('script')
    const anchor = document.getElementById('comments')
    scriptTagSecond.setAttribute('src', 'https://utteranc.es/client.js')
    scriptTagSecond.setAttribute('crossorigin', 'anonymous')
    scriptTagSecond.setAttribute('async', 'true')
    scriptTagSecond.setAttribute('repo', 'luceinaltis/blog-comments')
    scriptTagSecond.setAttribute('issue-term', 'pathname')
    scriptTagSecond.setAttribute('theme', 'github-light')
    if (anchor) {
      anchor.appendChild(scriptTagSecond)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta property="og:url" content={`https://www.luce.today/log/${postData.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={postData.thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.description} />
        <meta name="twitter:image" content={postData.thumbnail} />
        <meta name="keywords" content={postData.tags.join(',')} />
      </Head>
      {/* <meta name="keywords" content={postData.tags.map((value) => value)} /> */}
      <section className="log__container">
        <div className={styles.head__wrapper}>
          <h1>{postData.title}</h1>
          <div className={styles.date}>
            <time dateTime={postData.date}>{format(date, 'yyyy년 MM월 dd일')}</time>
          </div>
          <div className={styles.tags}>
            {postData.tags.map((value, index) => {
              return (
                <a key={index} href={`/tags/${value}`}>
                  {value.toUpperCase()}
                </a>
              )
            })}
          </div>
          <img className={styles.thumbnail} src={postData.thumbnail} alt="article thumbnail" />
        </div>
        <article>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <div id="comments"></div>
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
