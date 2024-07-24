import Image from 'next/image';
import { HiOutlineStar } from "react-icons/hi";


//make frontend skills dynamic
const frontendSkills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "less", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Nuxt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
]

const backendSkills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "NodeJs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "fastApi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
  { name: "Php", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Yii", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg" },
  { name: "Ci", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Django Rest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-original.svg" },
  { name: "Lumen", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lumen/lumen-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Drupal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-plain.svg" },
] 

export default function Skills() {
  return (
    <div className='flex flex-col items-center w-full'>
      <h3 className='my-4'>If you disect my brain!</h3>
      <div className='flex justify-center relative w-full gap-10'>
        <div className='w-1/2 sm:w-1/3 flex justify-start sm:justify-end z-10'>
          <ul>
            <span className='text-xl font-bold'>Backend</span>
            {
              backendSkills.map((skill, index) => (
                <li key={index}><span className='text-lg flex gap-2 my-2'><Image className='grayscale hover:filter-none' src={skill.icon} alt={skill.name} width={30} height={30} /> {skill.name}</span></li>
              ))
            }
          </ul>
        </div>
        <div className='opacity-40 sm:opacity-100 w-full sm:w-1/3 absolute top-0 left-0 right-0 z-0 sm:relative flex justify-center'>
          <Image src="./brain.svg" alt="skills" width={396} height={486} />
          </div>
        <div className='w-1/2 sm:w-1/3 flex justify-end sm:justify-start z-10'>
          <ul className='text-right'>
            <span className='text-xl font-bold'>Frontend</span>
            {
              frontendSkills.map((skill, index) => (
                <li key={index}><span className='text-lg text-right flex justify-end gap-2 my-2'>{skill.name} <Image className='grayscale hover:filter-none' src={skill.icon} alt={skill.name} width={30} height={30} /></span></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}