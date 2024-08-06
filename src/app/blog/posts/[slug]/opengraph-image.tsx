import { ImageResponse } from 'next/og'
import { AiFillCode } from "react-icons/ai";

export const runtime = 'edge'
 
export const alt = "Subhra's Blog"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: { slug: string } }) {
  
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          color: '#6366F1',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AiFillCode /> Subhra's Blog
      </div>
    ),
    {
      ...size,
    }
  )
}