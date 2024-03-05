import getData from '@/sanity/getData'
import Image from 'next/image'
import Link from 'next/link'

const HomeCoverSection = async () => {
  const data = await getData()
  const blog = data[0]

  return (
    <div className=" w-full inline-block">
      <article className=" w-full flex flex-col items-start justify-end mr-8 sm:mr-14 relative h-[60vh] sm:h-[70vh] mb-4">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 h-full
       bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-10"
        />
        <Image
          src={blog.image}
          alt={blog.alt}
          fill
          className="w-auto h-auto object-cover object-center rounded-3xl z-0"
        />
        <div className="w-full lg:w-4/5 p-5  sm:p-10 flex flex-col items-start justify-center z-10 text-light">
          <span>
            {blog?.tags?.map((tag: any) => (
              <span
                key={tag._id}
                className="inline-block py-0.5 px-3 mr-2 sm:py-2 sm:inline-block sm:px-10 bg-dark/95 text-light rounded-full ml:2 sm:ml-4 mb-4 capitalize font-semibold border-2 border-solid border-light hover:scale-90 transition-all duration-200 "
              >
                {tag.name}
              </span>
            ))}
          </span>
          <Link href={`blogs/${blog.slug}`} key={blog._id}>
            <h1 className="font-bold capitalize text-light md:text-3xl lg:text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
              hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {blog.name}
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-8 text-base sm:text-xl font-in text-light z-0">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  )
}
export const dynamic = 'force-dynamic'
export default HomeCoverSection
