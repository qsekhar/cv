import { ImageResponse } from 'next/og'

export const runtime = 'edge'
 
export const alt = "SSM's Blog Post"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Function to convert slug to readable title
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
 
export default async function Image({ params }: { params: { slug: string } }) {
  // Convert slug to a readable title
  const title = slugToTitle(params.slug)
  
  // Truncate title if too long
  const displayTitle = title.length > 60 ? title.substring(0, 57) + '...' : title
  
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Inter, system-ui, sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              marginRight: '20px',
            }}
          >
            📖
          </div>
          <div style={{ fontSize: '20px', opacity: '0.9', fontWeight: '500' }}>
            SSM's Blog
          </div>
        </div>
        
        <div style={{ textAlign: 'center', maxWidth: '1000px', display: 'flex', flexDirection: 'column' }}>
          <h1
            style={{
              fontSize: displayTitle.length > 40 ? '36px' : '42px',
              fontWeight: '700',
              margin: '0',
              marginBottom: '20px',
              background: 'linear-gradient(90deg, #ffffff 0%, #f0f9ff 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: '1.2',
            }}
          >
            {displayTitle}
          </h1>
          
          <p
            style={{
              fontSize: '18px',
              fontWeight: '400',
              margin: '0',
              opacity: '0.85',
              lineHeight: '1.4',
              maxWidth: '900px',
            }}
          >
            Tech insights and development tips from a Full Stack Developer
          </p>
        </div>
        
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '32px',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Full Stack Development
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Technical Tutorial
          </div>
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          Subhra Sekhar Mukherjee
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}