import { getTag } from '@/sanity/getData'

const page = async () => {
  const tag = await getTag()
  console.log(tag)
  return <div>{tag.name}</div>
}
export default page
