import { NextPage } from 'next'
import fs from 'fs/promises'
import Markdown from 'markdown-to-jsx'
import { notFound } from 'next/navigation';
import GetBlogPostMetadata from '../../../components/utils/GetBlogPostMetadata'
import { Metadata, Slug } from "../../../components/interfaces/Post";

interface Props {
   params: {
       slug: Slug
   }
}

const folder : string = process.env.POST_FOLDER || ''

if (!folder) {
  throw new Error('POST_FOLDER environment variable is not defined.');
}


const getPostContent = async (slug: Slug) => {
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
  const postMetadata: Metadata[] = await GetBlogPostMetadata();
  return postMetadata.map((meta: Metadata) => ({ slug: meta.slug }));
}

const Post: NextPage<Props> = async (props: Props) => {
  const { slug } = props.params  
  const content = await getPostContent(slug)
  //
  return  <article className="prose dark:prose-invert lg:prose-xl w-full"><Markdown key={slug} className="w-full">{content}</Markdown></article>
}

export default Post