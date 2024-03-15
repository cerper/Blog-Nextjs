import Link from 'next/link'
import { GithubIcon, LinkedinIcon, SunIcon, TiktokIcon } from '../icon'
import Logo from './Logo'

import PageComponent from './PageComponent'

const Header = () => {
  return (
    <div className="w-full flex p-4 px-5 sm:px-10 items-center justify-between  bg-light  ">
      <header className="w-full p-4 px-2 sm:px-10 flex  items-center justify-between ">
        <Logo />
        <button className="inline-block sm:hidden z-50">
          <div className="w-6 cursor-pointer transition-all ease-in duration-300">
            <div className="relative">
              <span className="absolute t-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease-in duration-200">
                &nbsp;
              </span>
              <span className="absolute t-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease-in duration-200">
                &nbsp;
              </span>
              <span className="absolute t-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease-in duration-200">
                &nbsp;
              </span>
            </div>
          </div>
        </button>
        <nav
          className="w-auto py-3  px-8 border border-solid border-dark rounded-full font-semibold capitalize  
          items-center flex  sm:hidden
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-30"
        >
          <Link href={'/'} className=" text-dark ">
            Home
          </Link>
          <PageComponent />
          <button className="ml-2">
            <SunIcon />
          </button>
        </nav>
        <nav
          className="w-auto py-3  px-8 border border-solid border-dark rounded-full font-semibold capitalize  
          items-center hidden sm:flex
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-30"
        >
          <Link href={'/'} className=" text-dark ">
            Home
          </Link>
          <PageComponent />
          <button className="ml-2">
            <SunIcon />
          </button>
        </nav>
        <div className="hidden sm:flex items-center">
          <a
            href="https://www.linkedin.com/in/david-lovera-b26bab117/"
            className="mr-2 inline-block"
          >
            <LinkedinIcon className="hover:scale-125 transition-all ease-in duration-100" />
          </a>
          <a href="https://github.com/cerper" className="mx-2 inline-block">
            <GithubIcon className="hover:scale-125 transition-all ease-in duration-100 dark:fill-light" />
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
