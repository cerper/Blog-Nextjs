import Image from 'next/image'
import { client } from './lib/sanity'
import FeaturedPost from '@/components/Home/FeaturedPost'

import HomeCoverSection from '@/components/Home/HomeCoverSection'
import blog from '@/sanity/schemas/post'
import getData from '@/sanity/getData'
import RecentPost from '@/components/Home/RecentPost'

export default async function Home() {
  const data = await getData()
  const blog = data
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeCoverSection />
      <FeaturedPost />
      <RecentPost />
    </main>
  )
}
