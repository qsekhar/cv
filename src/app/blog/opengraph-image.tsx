import { ImageResponse } from 'next/og'

export const runtime = 'edge'
 
export const alt = "SSM's Blog - Tech Insights & Development Tips"
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
          background: 'linear-gradient(135deg, #0ea5e9 0%, #d946ef 50%, #f97316 100%)',
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
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              marginRight: '24px',
            }}
          >
            📝
          </div>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <h1
              style={{
                fontSize: '56px',
                fontWeight: '700',
                margin: '0',
                marginBottom: '8px',
                background: 'linear-gradient(90deg, #ffffff 0%, #e0f2fe 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              SSM's Blog
            </h1>
            <p
              style={{
                fontSize: '24px',
                fontWeight: '400',
                margin: '0',
                opacity: '0.9',
              }}
            >
              Tech Insights & Development Tips
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '24px',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '10px 20px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Full Stack Development
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '10px 20px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Tech Tutorials
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '10px 20px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Industry Insights
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}