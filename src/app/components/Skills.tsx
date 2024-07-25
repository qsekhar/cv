import Image from 'next/image';
import { HiOutlineStar } from "react-icons/hi";


//make frontend skills dynamic
const frontendSkills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",rating: 5 },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", rating: 5 },
  { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", rating: 5 },
  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", rating: 5 },
  { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", rating: 3 },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", rating: 5 },
  { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", rating: 4 },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", rating: 5 },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", rating: 3 },
  { name: "less", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg", rating: 2 },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", rating: 5 },
  { name: "Nuxt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg", rating: 3 },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", rating: 3 },
  { name: "ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg", rating: 3 },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", rating: 2 },
]

const backendSkills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", rating: 5 },
  { name: "NodeJs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", rating: 5 },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", rating: 5 },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", rating: 4 },
  { name: "fastApi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", rating: 5 },
  { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg", rating: 4 },
  { name: "Php", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", rating: 5 },
  { name: "Yii", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg", rating: 5 },
  { name: "Ci", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg", rating: 5 },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", rating: 5 },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", rating: 5 },
  { name: "Rest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-original.svg", rating: 5 },
  { name: "Lumen", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lumen/lumen-original.svg", rating: 5 },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", rating: 3 },
  { name: "Drupal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-plain.svg", rating: 5 },
] 

export default function Skills() {
  return (
    <div className='flex flex-col items-center w-full'>
      <h3 className='my-4'>If you disect my brain!</h3>
      <div className='flex justify-center relative w-full gap-10'>
        <div className='w-1/2 sm:w-1/3 flex justify-start sm:justify-end z-10'>
          <ul>
            <span className='text-xl'>Backend</span>
            {
              backendSkills.map((skill, index) => (
                <li key={index}>
                  <span className='text-lg flex gap-2 my-1 items-center'>
                    <Image className='grayscale hover:filter-none' src={skill.icon} alt={skill.name} width={20} height={20} /> 
                    <span>{skill.name}</span>
                    <span className='flex opacity-50 items-center'>
                      {
                        Array.from({ length: skill.rating }).map((_, index) => (
                          <HiOutlineStar key={index} size={10} />
                        ))
                      }
                    </span>
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='opacity-40 sm:opacity-100 w-full sm:w-1/3 absolute top-0 left-0 right-0 z-0 sm:relative flex justify-center'>
          <Image src="./brain.svg" alt="skills" width={396} height={486} />
          </div>
        <div className='w-1/2 sm:w-1/3 flex justify-end sm:justify-start z-10'>
          <ul className='text-right'>
            <span className='text-xl'>Frontend</span>
            {
              frontendSkills.map((skill, index) => (
                <li key={index}>
                  <span className='text-lg text-right flex justify-end gap-2 my-1 items-center'>
                    <span className='flex opacity-50'>
                      {
                        Array.from({ length: skill.rating }).map((_, index) => (
                          <HiOutlineStar key={index} size={10} />
                        ))
                      }
                    </span>
                    <span>{skill.name}</span>
                    <Image className='grayscale hover:filter-none' src={skill.icon} alt={skill.name} width={20} height={20} />
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}