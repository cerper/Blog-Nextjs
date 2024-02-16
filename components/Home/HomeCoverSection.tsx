import getData from '@/sanity/getData'
import Image from 'next/image'
import Link from 'next/link'

const HomeCoverSection = async () => {
  const data = await getData()
  const blog = data[0]
  console.log(blog)

  return (
    <div className=" w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[70vh] mb-4">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 h-full
       bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-0"
        />
        <Image
          src={blog.image}
          alt={blog.alt}
          fill
          className="w-full h-full object-cover object-center rounded-3xl -z-10"
        />
        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
          <div>
            {blog?.tags?.map((tag: any) => (
              <Link href={`categories/all`}>
                <div
                  key={tag._id}
                  className="inline-block py-3 px-10 bg-dark/95 text-light rounded-full ml-4 mb-8 capitalize font-semibold border-2 border-solid border-light hover:scale-90 transition-all duration-200 "
                >
                  {tag.name}
                </div>
              </Link>
            ))}
          </div>
          <Link href={`blogs/${blog.slug}`} key={blog._id}>
            <h1 className="font-bold capitalize text-light text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
              hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {blog.name}
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-8 text-xl font-in text-light z-0">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  )
}
export default HomeCoverSection
