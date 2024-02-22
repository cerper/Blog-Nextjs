import { PortableTextBlock } from 'sanity'

export type Page = {
  _id: string
  name: string
  slug: string
  image: string
  content: PortableTextBlock[]
}
