import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

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
      ...(matterResult.data as { date: string; title: string }),
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
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  }
}
