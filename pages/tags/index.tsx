import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { getSortedTags } from '../../lib/posts'
import TagTemplate from '../../components/tagTemplate'

import styles from '../../styles/modules/Tags.module.scss'

type Props = {
  tags: [string, number][]
}

const Tags: NextPage<Props> = ({ tags }) => {
  return (
    <>
      <Head>
        <title>태그 - luce.log</title>
      </Head>
      <main className="home__container">
        <div className={styles.wrapper}>
          <div className={styles.tags__wrapper}>
            {tags.map((value, idx: number) => {
              return <TagTemplate key={idx} {...value} />
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = getSortedTags()
  return {
    props: { tags },
  }
}

export default Tags
