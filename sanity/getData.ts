import {createClient} from '@sanity/client'
import {client} from '../app/lib/sanity'
import clientConfig from '../config/config'
import {groq} from 'next-sanity'
import {Blog} from '../type/blog'
import {Page} from '../type/page'

export default async function getData(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'blog']| order(_createdAt asc) {
            _id,
            _createdAt,
            publishedAt,
            name,
            'slug':slug.current,
            'image':image.asset->url,
             
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
            publishedAt,
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

export async function getPage(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page']{
      _id,
      name,
      'slug':slug.current,
    }`,
  )
}

export async function getPages(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page'  && slug.current == $slug][0]{
      _id,
      name,
      'slug':slug.current,
      content
    }`,
    {slug},
  )
}
export const revalidate = 10
export const dynamic = 'force-dynamic'
