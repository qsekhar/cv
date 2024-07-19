import dynamic from 'next/dynamic';

const MoveingParticles = dynamic(() => import('./components/MoveingParticles'));

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <MoveingParticles  />
    </main>
  );
}
