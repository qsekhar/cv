import { NextPage } from 'next'
import fs from 'fs/promises'
import Markdown from 'markdown-to-jsx'
import { notFound } from 'next/navigation';
interface Props {
   params: {
       slug: string
   }
}

const folder : string = process.env.POST_FOLDER || ''

const getPostContent = async (slug: string) => {
  const file = `${folder}/${slug}.md`

  try {
    await fs.stat(file)
  } catch (err) {
    notFound()
  }
  const content = await fs.readFile(file, 'utf8')

  return content
}

export async function generateStaticParams() {
  const files = await fs.readdir(folder)
  const slugs = files.map((file) => file.replace('.md', ''))
  return slugs.map((slug) => ({ slug }))
}

const Post: NextPage<Props> = async (props: Props) => {
  const { slug } = props.params  
  const content = await getPostContent(slug)
  //
  return  <article className="prose dark:prose-invert lg:prose-xl w-full"><Markdown key={slug} className="w-full">{content}</Markdown></article>
}

export default Post