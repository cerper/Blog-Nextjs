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
    <div>
      <div
        className="px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium 
    mx-10 rounded-lg"
      >
        <span className="m-3">10views</span>
        {blog?.tags?.map((tag: any) => (
          <div className="text-light capitalize font-semibold text-base ">
            {tag.name}
          </div>
        ))}
      </div>
      <div className="max-w-3xl text-center mt-12 text-xl mx-auto ">
        <PortableText value={blog.content} />
      </div>
    </div>
  )
}
