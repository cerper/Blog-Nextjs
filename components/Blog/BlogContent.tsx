import { getSlug } from '@/sanity/getData'
import { PortableText } from '@portabletext/react'
type Props = {
  params: { blog: string }
}
const BlogContent = async ({ params }: Props) => {
  const slug = params.blog
  const blog = await getSlug(slug)
  return (
    <div
      className="col-span-8 font-in text-justify max-w-max mr-10 max-h-max prose prose-headings:my-5 prose-headings:text-2xl prose-p:mb-5 
    prose-leading-7 prose-li:list-disc "
    >
      <PortableText value={blog.content} />
    </div>
  )
}

export default BlogContent
