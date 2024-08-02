import { NextPage } from 'next'
import fs from 'fs/promises'
import Markdown from 'markdown-to-jsx'
interface Props {
   params: {
       slug: string
   }
}

const folder : string = process.env.POST_FOLDER || ''

const getPostContent = async (slug: string) => {
  const file = `${folder}/${slug}.md`
  const content = await fs.readFile(file, 'utf8')

  return content
}

const Post: NextPage<Props> = async (props: Props) => {
  const { slug } = props.params  
  const content = await getPostContent(slug)
  return  <article className="prose dark:prose-invert lg:prose-xl"><Markdown key={slug}>{content}</Markdown></article>
}

export default Post