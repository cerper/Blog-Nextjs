import getData from '@/sanity/getData'

import BlogLayoutFour from '../Blog/BlogLayoutFour'

const RecentPost = async () => {
  const data = await getData()
  const blog = data
  console.log(data)

  return (
    <section className="w-full mt-32 px-10 sm:px-20 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className=" inline-block font-bold text-dark capitalize text-2xl sm:text-4xl">
          Recent Post
        </h2>
      </div>
      <div className="flex flex-col sm:flex justify-center items-center">
        <BlogLayoutFour />
      </div>
    </section>
  )
}
export default RecentPost
export const revalidate = 10
export const dynamic = 'force-dynamic'
