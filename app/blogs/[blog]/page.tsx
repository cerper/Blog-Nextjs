import BlogContent from '@/components/Blog/BlogContent'
import BlogDetails from '@/components/Blog/BlogDetails'
import { getSlug } from '@/sanity/getData'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: { blog: string }
}

export default async function Blog({ params }: Props) {
  const slug = params.blog
  const blog = await getSlug(slug)
  return (
    <div className="mb-8 text-center relative w-auto h-auto">
      <h1 className="text-dark text-4xl font-bold underline mb-10 ">
        {blog.name}
      </h1>
      <div className="mx-10">
        <BlogDetails params={params} />
      </div>
      <div className="grid grid-cols-6 gap-16 mt-8 text-justify px-10 ml-10 ">
        <div className="col-span-6">
          <BlogContent params={params} />
        </div>
      </div>
    </div>
  )
}
