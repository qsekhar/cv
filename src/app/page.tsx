import dynamic from 'next/dynamic';
import { Stylish } from 'next/font/google'
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const MoveingParticles = dynamic(() => import('./components/MoveingParticles'));
const Container = dynamic(() => import('./components/Container'));
const TimeLine = dynamic(() => import('./components/TimeLine'));
const Skills = dynamic(() => import('./components/Skills'));

const stylish = Stylish({
  weight: '400',
  subsets: ['latin'],
});



export default function Home() {
  return (
    <main className="flex min-h-screen">
      <MoveingParticles  />

        <Container>
          <div className={stylish.className}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h2>Full Stack Developer</h2>
              </div>
              <div className='flex justify-center'>
                <h3>Since 2012</h3>
              </div>
              <div>
                <ul>
                  <li><a href='tel:+91 9674540974' className='flex items-center gap-1'> <HiOutlinePhone /> +91 9674540974</a></li>
                  <li><a href='mailto:subhra.php@gmail.com' className='flex items-center gap-1'> <HiOutlineMail />subhra.php@gmail.com</a></li>
                  <li></li>
                </ul>
              </div>
              <div></div>
              <div className='col-span-2'>
                <h1>Subhra Sekhar</h1>
              </div>
              <div>
                <h1>Mukherjee</h1>
              </div>

              <div></div>
              <div></div>
              <div></div>
              <div className='col-span-2'>
                <h3 className='my-4'>Summery</h3>
                <span className='text-lg'>Results-oriented and seasoned Full Stack Developer with over <span className='dottedUnderLine'>12 years</span> of hands-on
                                      experience in <span className='dottedUnderLine'>designing, developing</span>, and implementing innovative <span className='dottedUnderLine'>software solutions.</span> Adept
                                      at collaborating with cross-functional teams to deliver high-quality products that meet and
                                      exceed client expectations. Proven expertise in the entire software development life cycle,
                                      from concept and design to testing and deployment. Possess a strong background in both 
                                      <span className='dottedUnderLine'> front-end and back-end technologies</span>, with a keen ability to leverage a diverse skill set to
                                      tackle complex challenges.
                </span>
              </div>
              <div className='col-span-2 md:col-span-3'>
                <Skills />
              </div>
            </div>
          </div>
        </Container>

    </main>
  );
}
