import dynamic from 'next/dynamic';
import { Cormorant } from 'next/font/google'

const MoveingParticles = dynamic(() => import('./components/MoveingParticles'));
const Container = dynamic(() => import('./components/Container'));
const TimeLine = dynamic(() => import('./components/TimeLine'));

const cormorant = Cormorant({
  weight: '400',
  subsets: ['latin'],
});


export default function Home() {
  return (
    <main className="flex min-h-screen">
      <MoveingParticles  />
      <Container>
        <div className='flex justify-between'>
          <div className={cormorant.className}>
            <h1 className='text-4xl sm:text-9xl md:text-9xl'>Subhra Sekhar Mukherjee</h1>
          </div>
          <TimeLine />
        </div>
        
      </Container>
    </main>
  );
}
