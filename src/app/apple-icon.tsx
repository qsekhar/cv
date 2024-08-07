import { ImageResponse } from 'next/og'
import { AiFillCode } from "react-icons/ai";

type Size = {
  width: number;
  height: number;
}

const sizesForIos = [57, 60, 72, 76, 114, 120, 144, 152, 167, 180, 1024];

const iosIcons = sizesForIos.map((size) => ({
  id: `apple-touch-icon-${size}x${size}.png`,
  size: { width: size, height: size },
  contentType: 'image/png',
}))

 
// Route segment config
export const runtime = 'edge'
 
export function generateImageMetadata() {
  return [
    ...iosIcons
  ]
}
 
 
export default function Icon({ id }: { id: string }) {
  const size : Size = iosIcons.find((icon) => icon.id === id)?.size || { width: 512, height: 512 }
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: size.height / 2,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6366F1',
        }}
      >
        <AiFillCode />
      </div>
    ),{
      ...size,
      headers: { 'cache-control': 'public, max-age=31536000, immutable' }
    }
    
  )
}