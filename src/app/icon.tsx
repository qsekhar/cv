import { ImageResponse } from 'next/og'
import { AiFillCode } from "react-icons/ai";

type Size = {
  width: number;
  height: number;
}

const sizesForAndriod = [72, 96, 128, 144, 152, 192, 384, 512]

const androidIcons = sizesForAndriod.map((size) => ({
  id: `android-chrome-${size}x${size}.png`,
  size: { width: size, height: size },
  contentType: 'image/png',
}))

 
// Route segment config
export const runtime = 'edge'
 
export function generateImageMetadata() {
  return [
    ...androidIcons
  ]
}
 
// Image generation
export default function Icon({ id }: { id: string }) {
  const size : Size = androidIcons.find((icon) => icon.id === id)?.size || { width: 512, height: 512 }
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
    ),
    {
      ...size
    }
  )
}