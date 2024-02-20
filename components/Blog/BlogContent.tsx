import { getSlug } from '@/sanity/getData'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
type Props = {
  params: { blog: string }
}
const BlogContent = async ({ params }: Props) => {
  const slug = params.blog
  const blog = await getSlug(slug)
  return (
    <div
      className="col-span-8 font-in text-justify max-w-max mr-10 max-h-max prose prose-headings:my-5 prose-headings:text-2xl prose-p:mb-5 
    prose-leading-7 prose-li:list-disc  "
    >
      <PortableText
        value={blog.content}
        components={myPortableTextComponents}
      />
    </div>
  )
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value).url()}
        alt="Blog"
        width={700}
        height={700}
      />
    ),
  },
}
export default BlogContent
export const revalidate = 10
export const dynamic = 'force-dynamic'
