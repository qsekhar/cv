import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Full Stack Developer | Front & Back-End Expert",
    short_name: 'Subhra Sekhar Mukherjee',
    description: 'Expert Full Stack Developer: Python, PHP, Vue, React, Node.js. Creating responsive, user-friendly web apps with innovative design and clean code for scalable applications.',
    start_url: '/',
    display: 'browser',
    background_color: 'white',
    theme_color: '#6366F1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}