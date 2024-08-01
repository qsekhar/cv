import fs from 'fs/promises';
import Link from 'next/link';

type Slug = string;
type Post = { slug: Slug }
type Posts = Post[]
const getBlogPostMetadata = async () : Promise<Posts> => {
    const folder = "src/posts";

    const isDirectory = await fs.stat(folder).then((stat) => stat.isDirectory());
    if (!isDirectory) {
        throw new Error(`Folder ${folder} does not exist or is not a directory`);
    }
    const files = await fs.readdir(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    // get the blog post slug from the markdown file name
    return markdownPosts.map((file) => {
        const slug = file.replace(".md", "");
        return { slug };
    })
}

export default async function Blog() {
  const postMetadata : Posts = await getBlogPostMetadata();
  const postLinks = postMetadata && postMetadata.map((post: Post) => (
      <li key={post.slug}>
          <Link href={`/blog/posts/${post.slug}`}>{post.slug}</Link>
      </li>
  ))
  return (
      <div>
          <h1>Blog</h1>
          <ul>
              {postLinks}
          </ul>
      </div>
  )
}