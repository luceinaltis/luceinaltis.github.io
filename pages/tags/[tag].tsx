import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { getTags, getTagPostsData } from '../../lib/posts'
import Date from '../../components/date'

import styles from '../../styles/modules/Tag.module.scss'

type Props = {
  tagPostsData: {
    title: string
    id: string
    date: string
    content: string
    contentHtml: string
    tags: string[]
    thumbnail: string
    description: string
  }[]
  tag: string
}

const TagPosts: NextPage<Props> = ({ tagPostsData, tag }) => {
  const capitalize = (s: string): string => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <>
      <Head>
        <title>{`#${capitalize(tag)} - luce.log`}</title>
      </Head>
      <section className="tag__container">
        <div className={styles.tag__header}>#{tag}</div>
        <div>
          {tagPostsData.map((value, index) => {
            return (
              <div key={index} className={styles.post__wrapper}>
                <Link href={`/log/${value.id}`}>
                  <a>
                    <div className={styles.image__wrapper}>
                      <img src={value.thumbnail} alt="Thumbnail" />
                    </div>
                  </a>
                </Link>
                <div>
                  <Link href={`/log/${value.id}`}>
                    <a>
                      <h1 className={styles.post__title}>{value.title}</h1>
                    </a>
                  </Link>
                  <p className={styles.post__desc}>{value.description}</p>
                  <Link href={`/log/${value.id}`}>
                    <a className={styles.post__read_more}>더 보기</a>
                  </Link>
                  <div className={styles.date_tags__wrapper}>
                    <div className={styles.date}>
                      <Date dateString={value.date} />
                    </div>
                    <div className={styles.tags}>
                      {value.tags.map((value, index) => {
                        return (
                          <Link href={`/tags/${value}`} key={index}>
                            <a>
                              <span>{value}</span>
                            </a>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getTags()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tagPostsData = await getTagPostsData(params!.tag as string)
  return {
    props: {
      tagPostsData,
      tag: params!.tag,
    },
  }
}

export default TagPosts
