import type Author from './author'

type PostType = {
  slug: string
  title: string
  category: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  meta: string[]
  content: string
}

export default PostType
