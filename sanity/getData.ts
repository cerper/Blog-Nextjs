import {createClient} from '@sanity/client'
import {client} from '../app/lib/sanity'
import clientConfig from '../config/config'
import {groq} from 'next-sanity'
import {Blog} from '../type/blog'

export default async function getData(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'blog']| order(_createdAt asc) {
            _id,
            _createdAt,
            name,
            'slug':slug.current,
            'image':image.asset->url,
              content,
              description,

              tags[]->{
      _id,
      slug,
      name
    }
}`,
  )
}

export async function getSlug(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'blog' && slug.current == $slug][0] {
  _id,
            _createdAt,
            name,
            'slug':slug.current,
            'image':image.asset->url,
              content,
              description,

              tags[]->{
      _id,
      slug,
      name
    }
}`,
    {slug},
  )
}

export const revalidate = 10
export const dynamic = 'force-dynamic'
