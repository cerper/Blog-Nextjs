import Link from 'next/link'
import { getPage } from '@/sanity/getData'

const PageComponent = async () => {
  const pages = await getPage()
  return (
    <div className="flex">
      {pages.map((page) => (
        <Link key={page._id} href={`/${page.slug}`}>
          <div className="ml-4 text-dark ">{page.name}</div>
        </Link>
      ))}
    </div>
  )
}
export default PageComponent
