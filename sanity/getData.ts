import {client} from '../app/lib/sanity'

export default async function getData() {
  const sanity = `*[_type == 'blog'] | order(_createdAt asc) {
    _id,
    _createdAt,
    name,
    description,
    'slug':slug.current,
    'image':image.asset->url,
    content,
    tags[]->{
      _id,
      slug,
      name,
    }
}`
  const data = await client.fetch(sanity)
  return data
}

export const dynamic = 'force-dynamic'
