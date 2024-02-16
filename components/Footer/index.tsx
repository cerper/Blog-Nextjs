'use client'
import { useForm } from 'react-hook-form'
import { GithubIcon, LinkedinIcon, TiktokIcon } from '../icon'
import Link from 'next/link'

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)
  console.log(errors)
  return (
    <footer className="mt-4 rounded-2xl bg-dark m-10 text-light flex flex-col items-center justify-center">
      <h3 className="font-medium mt-10 text-2xl capitalize text-center ">
        Interesting Stories | Updates | Guides
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8  min-w-[384px] flex items-stretch bg-light p-2 rounded-2xl mx-3"
      >
        <input
          type="email"
          placeholder="enter your email"
          {...register('email', { required: true })}
          className="w-full pl-0 bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 p-1"
        />

        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>
      <p className="font-light mt-10 text-base text-center ">
        Subscribe to learn about new technology and updates.
      </p>
      <div className="flex items-center justify-center mt-8">
        <a
          href="https://www.linkedin.com/in/david-lovera-b26bab117/"
          className="mr-2 inline-block"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease-in duration-100" />
        </a>

        <a
          href="https://www.tiktok.com/@davidlovera367 "
          className="mr-2 inline-block"
        >
          <TiktokIcon className="hover:scale-125 transition-all ease-in duration-100 " />
        </a>
      </div>
      <div className="mt-16 w-full relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row  items-center justify-between">
        <span className="text-center underline">
          &copy; 2024 davidlovera5634. All rights reserved.
        </span>

        <Link href="/sitemap.xml" className="text-center">
          sitemap.xml
        </Link>

        <div className="text-center">
          Made with &hearts; by{' '}
          <a href="htpp://" className="underline">
            David Lovera
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
