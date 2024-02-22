import Link from 'next/link'
import { GithubIcon, LinkedinIcon, SunIcon, TiktokIcon } from '../icon'
import Logo from './Logo'
import { getPage } from '@/sanity/getData'

const Header = async () => {
  const pages = await getPage()

  return (
    <div className="w-full flex p-4 px-10 items-center justify-between  bg-light  ">
      <header className="w-full p-4 px-10 flex  items-center justify-between ">
        <Logo />
        <nav
          className="w-auto py-3  px-8 border border-solid border-dark rounded-full font-semibold capitalize flex items-center 
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-30"
        >
          <Link href={'/'} className="ml-4 text-dark ">
            Home
          </Link>
          {pages.map((page) => (
            <Link key={page._id} href={`/${page.slug}`}>
              <div className="ml-4 text-dark ">{page.name}</div>
            </Link>
          ))}
          <button className="ml-2">
            <SunIcon />
          </button>
        </nav>
        <div>
          <a
            href="https://www.linkedin.com/in/david-lovera-b26bab117/"
            className="mr-2 inline-block"
          >
            <LinkedinIcon className="hover:scale-125 transition-all ease-in duration-100" />
          </a>
          <a href="https://github.com/cerper" className="mx-2 inline-block">
            <GithubIcon className="hover:scale-125 transition-all ease-in duration-100" />
          </a>
          <a
            href="https://www.tiktok.com/@davidlovera367 "
            className="mr-2 inline-block"
          >
            <TiktokIcon className="hover:scale-125 transition-all ease-in duration-100 " />
          </a>
        </div>
      </header>
    </div>
  )
}
export default Header
