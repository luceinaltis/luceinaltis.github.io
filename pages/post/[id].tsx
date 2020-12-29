import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

import { getAllPostIds, getPostData } from '../../lib/posts'

type Props = {
  postData: {
    title: string
  }
}

const Post: NextPage<Props> = ({ postData }) => {
  return <section>{postData.title}</section>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export default Post
