import BlogContent from '@/components/Blog/BlogContent'
import BlogDetails from '@/components/Blog/BlogDetails'
import { siteMetaData } from '@/components/utils/metaSiteMap'
import { getSlug } from '@/sanity/getData'

type Props = {
  params: { blog: string }
}
export async function generateMetadata({ params }: Props) {
  const slug = params.blog
  const blog = await getSlug(slug)
  if (!blog) {
    return
  }

  const publishedAt = new Date(blog.publishedAt).toDateString()
  let imageList = [siteMetaData.socialBanner]
  if (blog.image) {
    imageList =
      typeof blog.image === 'string'
        ? [siteMetaData.siteUrl + blog.image]
        : blog.image
  }

  const ogImages = imageList.map((img) => {
    return { url: img.includes('http') ? img : siteMetaData.siteUrl + img }
  })

  return {
    title: blog.name,
    description: blog.description,
    openGraph: {
      title: blog.name,
      description: blog.description,
      url: siteMetaData + blog.slug,
      siteName: siteMetaData.title,
      locale: 'en-us',
      type: 'article',
      publishedTime: publishedAt,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.name,
      description: blog.description,
      images: ogImages, // Must be an absolute URL
    },
  }
}

export default async function Blog({ params }: Props) {
  const slug = params.blog
  const blog = await getSlug(slug)
  return (
    <div className="mb-8 text-center relative w-auto h-auto">
      <h1 className="text-dark text-4xl font-bold underline mb-10 ">
        {blog.name}
      </h1>
      <div className="mx-10 ">
        <BlogDetails params={params} />
      </div>
      <div className="grid grid-cols-8 gap-16 mt-8 text-justify px-10 mx-10 ">
        <div className="col-span-7">
          <BlogContent params={params} />
        </div>
      </div>
    </div>
  )
}
