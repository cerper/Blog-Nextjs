import getData from '@/sanity/getData'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayoutOne from '../Blog/BlogLayoutOne'
import BlogLayoutTwo from '../Blog/BlogLayoutTwo'
import BlogLayoutThree from '../Blog/BlogLayoutThree'

const FeaturedPost = async () => {
  return (
    <section className="w-full mt-32 px-20 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        Featured Post
      </h2>
      <div className="grid grid-cols-2 grid-rows-2  gap-6 mt-16">
        <article className="col-span-1 row-span-2 relative">
          <BlogLayoutOne />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutThree />
        </article>
      </div>
    </section>
  )
}
export const dynamic = 'force-dynamic'

export default FeaturedPost
