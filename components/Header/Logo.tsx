import React from 'react'
import Image from 'next/image'
import profileImg from '@/public/profile-img.png'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/" className="flex items-center  text-dark">
      <div className="w-14 md:w-18 rounded-full overflow-hidden border border-solid border-dark mr-2 md:mr-4 ">
        <Image
          src={profileImg}
          alt="david perfil"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <span className="font-bold hidden md:flex lg:text-xl  ">
        David Lovera
      </span>
    </Link>
  )
}
export default Logo
