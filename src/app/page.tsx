import dynamic from 'next/dynamic';


const MoveingParticles = dynamic(() => import('./components/MoveingParticles'));
const Container = dynamic(() => import('./components/Container'));

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <MoveingParticles  />
      <Container>
        <h1 className='text-4xl sm:text-9xl md:text-9xl font-bonanova'>Subhra Sekhar Mukherjee</h1>
      </Container>
    </main>
  );
}
