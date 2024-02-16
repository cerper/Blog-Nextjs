import getData from '@/sanity/getData'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayoutFour from '../Blog/BlogLayoutFour'

const RecentPost = async () => {
  const data = await getData()

  console.log(data)

  return (
    <section className="w-full mt-32 px-20 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className=" inline-block font-bold capitalize text-4xl">
          Recent Post
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent underline underline-offset-2 text-md"
        >
          View all
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <BlogLayoutFour />
      </div>
    </section>
  )
}
export default RecentPost
export const revalidate = 10
export const dynamic = 'force-dynamic'
