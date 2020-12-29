import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { getAllPostIds, getPostData } from '../../lib/posts'

type Props = {
  postData: {
    title: string
    id: string
    date: string
    contentHtml: string
  }
}

const Post: NextPage<Props> = ({ postData }) => {
  return (
    <section>
      <Head>
        <title>{postData.title} - luce.log</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></article>
    </section>
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
