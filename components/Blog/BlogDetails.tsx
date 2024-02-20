import { getSlug } from '@/sanity/getData'
type Props = {
  params: { blog: string }
}
const BlogDetails = async ({ params }: Props) => {
  const slug = params.blog
  const blog = await getSlug(slug)
  return (
    <div
      className="px-8 bg-accent text-light  py-2 flex items-center justify-around flex-wrap text-xl font-medium 
    mx-10 rounded-lg"
    >
      <span className="m-3">10views</span>
      <span>{new Date(blog?.publishedAt).toDateString()}</span>
      {blog?.tags?.map((tag: any) => (
        <div
          key={tag._id}
          className="text-light capitalize font-semibold text-base "
        >
          #{tag.name}
        </div>
      ))}
    </div>
  )
}
export default BlogDetails
