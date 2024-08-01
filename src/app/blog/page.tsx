import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import fs from 'fs/promises';

type Slug = string;
type Post = { slug: Slug }
type Posts = Post[]

export const getStaticProps = (async () => {
  const markDownFolder = 'src/posts';

  const files = await fs.readdir(markDownFolder);
  const posts = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace('.md', '');
      return {
        slug,
      };
    })
  );
  return {
    props: {
      posts
    }
  };
}) satisfies GetStaticProps<{
  posts : Posts
}> 



export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts)
  return (
      <div>
          <h1>Blog</h1>
          <ul>

          </ul>
      </div>
  )
}