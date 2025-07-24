import Image from 'next/image';
import FadeInWhenVisible from './animations/FadeInWhenVisible';

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
  { name: "Less", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Nuxt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
]

const backendSkills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "NodeJs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Yii", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg" },
  { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Django REST", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-original.svg" },
  { name: "Lumen", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lumen/lumen-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Drupal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-plain.svg" },
]

const databaseSkills = [
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
]

const toolsSkills = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
]

// Combine all skills for ticker tape
const allSkills = [...frontendSkills, ...backendSkills, ...databaseSkills, ...toolsSkills];

export default function Skills() {
  return (
    <div className='flex flex-col items-center w-full'>
      <FadeInWhenVisible delay={0.1}>
        <p className='text-center text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl'>
          A comprehensive showcase of technologies, frameworks, and tools I've mastered throughout my development journey
        </p>
      </FadeInWhenVisible>      {/* Ticker Tape Animation */}

      <div className='w-full mx-auto'>
        <FadeInWhenVisible delay={0.2}>
          <div className="w-full max-w-full overflow-hidden bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-700 py-6 md:py-8 rounded-2xl shadow-lg opacity-90">          <div 
              className="flex animate-scroll-mobile sm:animate-scroll hover:animation-paused space-x-4 md:space-x-8"
              style={{ 
                width: 'max-content',
                willChange: 'transform',
              }}
            >
              {/* First set of skills */}
              {allSkills.map((skill, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center space-x-2 md:space-x-3 bg-white dark:bg-neutral-800 px-3 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap flex-shrink-0 border border-neutral-100 dark:border-neutral-700"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={20}
                    height={20}
                    className="md:w-6 md:h-6 flex-shrink-0 filter hover:filter-none transition-all duration-300"
                  />
                  <span className="text-xs md:text-sm font-medium text-neutral-700 dark:text-neutral-200">
                    {skill.name}
                  </span>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {allSkills.map((skill, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center space-x-2 md:space-x-3 bg-white dark:bg-neutral-800 px-3 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap flex-shrink-0 border border-neutral-100 dark:border-neutral-700"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={20}
                    height={20}
                    className="md:w-6 md:h-6 flex-shrink-0 filter hover:filter-none transition-all duration-300"
                  />
                  <span className="text-xs md:text-sm font-medium text-neutral-700 dark:text-neutral-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>

      </div>

      
    </div>
  )
}