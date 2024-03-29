import getData from '@/sanity/getData'
import Image from 'next/image'
import Link from 'next/link'

const BlogLayoutThree = async () => {
  const data = await getData()
  const blog = data[3]

  return (
    <div className="group grid grid-cols-12 items-center text-dark">
      <Link
        href={`blogs/${blog.slug}`}
        className=" col-span-4  h-full rounded-xl overflow-hidden"
      >
        <div>
          <Image
            src={blog.image}
            alt={blog.alt}
            width={400}
            height={300}
            className="aspect-square w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease-in duration-200 "
          />
        </div>
      </Link>
      <div className="col-span-8 sm:col-span-7 w-full mx-2">
        <Link href={`blogs/${blog.slug}`} className="inline-block my-1 ">
          <h1 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.name}
            </span>
          </h1>
        </Link>
        <span className="text-gray flex flex-col capitalize font-semibold text-base">
          {blog?.tags?.map((tag: any) => (
            <span
              key={tag._id}
              className="text-gray capitalize font-semibold text-base "
            >
              {tag.name}
            </span>
          ))}
          {new Date(blog?.publishedAt).toDateString()}
        </span>
      </div>
    </div>
  )
}
export default BlogLayoutThree
