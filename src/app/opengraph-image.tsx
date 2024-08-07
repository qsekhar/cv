import { ImageResponse } from 'next/og'
import { AiFillCode } from "react-icons/ai";

// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = "Full Stack Developer | Front & Back-End Expert"
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
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
          <AiFillCode />
          <span style={{ fontSize: 24 }}>{alt}</span>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      headers: { 'cache-control': 'public, max-age=31536000, immutable' }
    }
  )
}