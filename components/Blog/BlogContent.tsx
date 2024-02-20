import { getSlug } from '@/sanity/getData'
import { PortableText } from '@portabletext/react'
type Props = {
  params: { blog: string }
}
const BlogContent = async ({ params }: Props) => {
  const slug = params.blog
  const blog = await getSlug(slug)
  return (
    <div className="col-span-8 font-in  text-justify mr-10">
      <PortableText value={blog.content} />
    </div>
  )
}
export default BlogContent
