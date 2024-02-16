import getData from '@/sanity/getData'
import Image from 'next/image'
import Link from 'next/link'

const BlogLayoutTwo = async () => {
  const data = await getData()
  const blog = data[1]
  return (
    <div className="group grid grid-cols-12  items-center text-dark">
      <Link
        href={`blogs/${blog.slug}`}
        className=" col-span-4  h-full rounded-xl overflow-hidden"
      >
        {' '}
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

      <div className="col-span-8 w-full mx-2">
        <Link href={`blogs/${blog.slug}`} className="inline-block my-1 ">
          <h1 className="font-semibold capitalize text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.name}
            </span>
          </h1>
        </Link>
        <span className="text-gray capitalize font-semibold text-base">
          {blog?.tags?.map((tag: any, _id: number) => (
            <div
              className="text-gray capitalize font-semibold text-base "
              key={blog._id}
            >
              {tag.name}
            </div>
          ))}
        </span>
      </div>
    </div>
  )
}
export default BlogLayoutTwo
