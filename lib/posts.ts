import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
// @ts-ignore
import prism from 'remark-prism'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedTags() {
  const fileNames = fs.readdirSync(postsDirectory)

  const allTags = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    const data = matterResult.data

    const tags = data.tags

    return tags
  })

  const allSortedTags: [string, number][] = []

  allTags.forEach((allTag: string[]) => {
    allTag.forEach((tag) => {
      const idx = allSortedTags.findIndex((element) => {
        return element[0] === tag
      })

      if (idx === -1) {
        allSortedTags.push([tag, 1])
      } else {
        allSortedTags[idx][1] += 1
      }
    })
  })

  allSortedTags.sort((a, b) => b[1] - a[1])

  return allSortedTags
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    const content = matterResult.content

    return {
      id,
      content,
      ...(matterResult.data as {
        date: string
        title: string
        thumbnail: string
        description: string
        tags: string[]
      }),
    }
  })

  return allPostsData.sort((a, b) => {
    if (a < b) {
      return -1
    } else {
      return 1
    }
  })
}

type Params = {
  params: {
    id: string
  }
}

export function getAllPostIds(): Params[] {
  const fileNames = fs.readdirSync('posts')

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

type ParamsTag = {
  params: {
    tag: string
  }
}

export function getTags(): ParamsTag[] {
  const tagNames = getSortedTags()

  return tagNames.map((tagName) => {
    return {
      params: {
        tag: tagName[0],
      },
    }
  })
}

type TagPostData = {
  id: string
  title: string
  date: string
  thumbnail: string
  description: string
  tags: string[]
}

export async function getTagPostsData(tag: string): Promise<TagPostData[]> {
  const postsData = getSortedPostsData()

  return postsData.filter((value) => {
    return value.tags.find((element) => element === tag)
  })
}

type PostData = {
  id: string
  contentHtml: string
  date: string
  title: string
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join('posts', `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).use(prism).process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      date: string
      title: string
      tags: string[]
      description: string
      thumbnail: string
    }),
  }
}
