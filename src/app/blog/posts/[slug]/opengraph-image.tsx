'use server'
import { ImageResponse } from 'next/og'
import matter from "gray-matter";
import { AiFillCode } from "react-icons/ai";
import fs from "fs/promises";

const runtime = 'edge'
 
const alt = "Subhra's Blog"
const size = {
  width: 1200,
  height: 630,
}
const contentType = 'image/png'

const folder: string = process.env.POST_FOLDER || "";

if (!folder) {
    throw new Error("POST_FOLDER environment variable is not defined.");
}


const getPostContent = async (slug: string) => {
  const file = `${folder}/${slug}.md`;

  try {
    const content = await fs.readFile(file, "utf8");
    return matter(content) 
  } catch (err) {
    throw new Error("File is missing");
  }
};
 
export default async function Image({ params }: { params: { slug: string } }) {
  const meta = await getPostContent(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 30,
          background: 'white',
          color: '#6366F1',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AiFillCode /> {meta.data.title}
      </div>
    ),
    {
      ...size,
    }
  )
}