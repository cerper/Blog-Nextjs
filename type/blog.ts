import { PortableTextBlock } from 'sanity'

export type Blog = {
  _id: string
  publishedAt: Date
  name: string
  slug: string
  image: string
  url: string
  content: PortableTextBlock[]
  tags: string
}
