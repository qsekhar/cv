import { ImageResponse } from 'next/og'

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
          background: 'linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '64px',
              marginRight: '32px',
            }}
          >
            💻
          </div>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <h1
              style={{
                fontSize: '48px',
                fontWeight: '700',
                margin: '0',
                marginBottom: '8px',
                background: 'linear-gradient(90deg, #ffffff 0%, #e0f2fe 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Subhra Sekhar Mukherjee
            </h1>
            <p
              style={{
                fontSize: '28px',
                fontWeight: '400',
                margin: '0',
                opacity: '0.9',
              }}
            >
              Full Stack Developer | Front & Back-End Expert
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            marginTop: '32px',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '12px 24px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '500',
            }}
          >
            13+ Years Experience
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '12px 24px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '500',
            }}
          >
            100+ Projects
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '12px 24px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '500',
            }}
          >
            Full Stack Expert
          </div>
        </div>
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