import getData from '@/sanity/getData'
import { Blog } from '@/type/blog'

import Image from 'next/image'
import Link from 'next/link'

const BlogLayoutFour = async () => {
  const blog = await getData()
  return (
    <div className="grid grid-cols-3 grid-rows-1 mt-16 gap-10">
      {blog.slice(4, 7).map((blog: Blog, _id: number) => {
        return (
          <div className="group flex flex-col items-center justify-center  text-dark">
            <article className="col-span-1 row-span-1 relative" key={blog._id}>
              <Link
                href={`blogs/${blog.slug}`}
                className=" h-full rounded-xl overflow-hidden"
              >
                <div>
                  <Image
                    src={blog.image}
                    alt={blog.alt}
                    width={500}
                    height={300}
                    className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease-in duration-300 "
                  />
                </div>
              </Link>
              <div className="flex flex-col w-full mt-4">
                <Link
                  href={`blogs/${blog.slug}`}
                  className="inline-block my-1 "
                >
                  <h1 className="font-semibold capitalize text-lg">
                    <span
                      className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
                    >
                      {blog.name}
                    </span>
                  </h1>
                </Link>
                <span className="uppercase text-accent font-semibold text-sm">
                  {blog?.tags?.map((tag: any) => (
                    <div
                      className="text-gray capitalize font-semibold text-base "
                      key={tag._id}
                    >
                      {tag.name}
                    </div>
                  ))}
                </span>
              </div>
            </article>
          </div>
        )
      })}
    </div>
  )
}
export default BlogLayoutFour
