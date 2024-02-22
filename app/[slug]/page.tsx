import { getPages } from '@/sanity/getData'
import { PortableText } from '@portabletext/react'

type Props = {
  params: { slug: string }
}
const page = async ({ params }: Props) => {
  const slug = params.slug
  const page = await getPages(slug)
  console.log(page)
  return (
    <div>
      <div
        className="font-in text-justify max-w-max mr-10 max-h-max prose prose-headings:my-5 prose-headings:text-2xl prose-p:mb-5 
    prose-leading-7 prose-li:list-disc flex flex-col justify-center items-center px-10 mx-10"
      >
        {' '}
        <div>{page.name}</div>
        <PortableText value={page.content} />
      </div>
    </div>
  )
}

export default page
