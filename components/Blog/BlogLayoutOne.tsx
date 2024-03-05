import Image from 'next/image'
import getData from '@/sanity/getData'
import Link from 'next/link'
import { Blog } from '@/type/blog'
const BlogLayoutOne = async () => {
  const data = await getData()
  const blog = data[2]
  return (
    <div className="group inline-block overflow-hidden rounded-2xl h-full w-full">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 h-full
       bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl "
      />
      <Link href={`blogs/${blog.slug}`}>
        <Image
          src={blog.image}
          alt={blog.alt}
          width={600}
          height={400}
          className="w-full h-full  object-cover object-center cursor-pointer rounded-3xl group-hover:scale-105 text-dark transition-all ease-in duration-200"
        />
      </Link>
      <div className="w-full absolute bottom-0 p-5 sm:p-10 z-10">
        <div>
          {blog?.tags?.map((tag: any) => (
            <span
              key={tag._id}
              className="inline-block text-sm sm:text-lg py-0.5 sm:py-2 px-4 sm:px-10 bg-dark/95 text-light rounded-full ml-4 mb-1 sm:mb-4 capitalize font-semibold border-2 border-solid border-light hover:scale-90 transition-all duration-200 "
            >
              {tag.name}
            </span>
          ))}

          <Link href={`blogs/${blog.slug}`} className="mt-2 sm:mt-4 ">
            <h1 className="font-bold  capitalize text-light text-xs sm:text-2xl">
              <span
                className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {blog.name}
              </span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default BlogLayoutOne
