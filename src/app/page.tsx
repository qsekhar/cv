import dynamic from 'next/dynamic';
import { Stylish } from 'next/font/google'
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp, FaDiscord } from "react-icons/fa6";

const MoveingParticles = dynamic(() => import('./components/MoveingParticles'));
const Container = dynamic(() => import('./components/Container'));
const TimeLine = dynamic(() => import('./components/TimeLine'));
const Skills = dynamic(() => import('./components/Skills'));
const Tools = dynamic(() => import('./components/Tools'));
const OtherSkills = dynamic(() => import('./components/OtherSkills'));
const Projects = dynamic(() => import('./components/Projects'));

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
              <div className='flex flex-col items-center justify-center'>
                <h3>Since 2012</h3>
                <a href="./SubhraSekharMukherjeeResume.pdf" download="SubhraSekharMukherjeeResume.pdf" className='border border-primary border-dashed px-4 py-2 rounded hover:underline'>Download CV</a>
              </div>
              <div className='md:flex md:flex-col md:items-end'>
                <ul>
                  <li><a href='tel:+91 9674540974' className='flex items-center gap-2'> <HiOutlinePhone size={20}/> +91 9674 540 974</a></li>
                  <li><a href='mailto:subhra.php@gmail.com' className='flex items-center gap-2'> <HiOutlineMail size={20} />subhra.php@gmail.com</a></li>
                  <li className='flex items-center gap-2 mt-1'>
                    <a target='_blank' href="https://api.whatsapp.com/send?phone=919674540974"><FaWhatsapp size={20}  /></a>
                    <a target='_blank' href='https://www.linkedin.com/in/subhra-sekhar-mukherjee'><CiLinkedin size={20}/></a>
                    <a target='_blank' href='https://github.com/qsekhar'><FaGithub size={20}/></a>
                    <a target='_blank' href='https://discordapp.com/users/trozan7550/'><FaDiscord size={20}/></a>
                  </li>
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
                <h3 className='my-4'>Summary</h3>
                <span className='text-lg'>Full Stack Developer with 12+ years in the game, creating and dropping innovative software solutions. I'm all about teaming up with different squads to deliver fire products that blow clients away. I've got mad skills in every part of the software development cycle, from brainstorming and design to testing and launching. I'm solid in both front-end and back-end tech and love using my diverse skills to tackle tough challenges.
                </span>
              </div>
              <div></div>
              <div className='col-span-2'>
                <h3 className='my-4'>A small selection of my work, enjoy!</h3>
                <Projects />
              </div>
              <div className='col-span-2 md:col-span-3'>
                <Skills />
              </div>
              {/* <div className='col-span-2 md:col-span-3'>
                <Tools />
              </div>
              <div className='col-span-2 md:col-span-3'>
                <OtherSkills />
              </div> */}
              <div></div>
              <div className='col-span-2'>
                <TimeLine />
              </div>
              
            </div>
          </div>
        </Container>

    </main>
  );
}
