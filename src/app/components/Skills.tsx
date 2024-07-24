import Image from 'next/image';

export default function Skills() {
  return (
    <div className='flex flex-col items-center w-full'>
      <h3 className='my-4'>Skills</h3>
      <div className='flex justify-center relative w-full gap-10'>
        <div className='w-1/2 sm:w-1/3 flex justify-start sm:justify-end z-10'>
          <ul>
            <span className='text-xl font-bold'>Analytical / Backend</span>
            <li><span className='text-lg'>Python</span></li>
            <li><span className='text-lg'>NodeJs</span></li>
            <li><span className='text-lg'>NextJs</span></li>
            <li><span className='text-lg'>Php</span></li>
            <li><span className='text-lg'>Yii</span></li>
            <li><span className='text-lg'>Ci</span></li>
            <li><span className='text-lg'>Laravel</span></li>
            <li><span className='text-lg'>Django</span></li>
            <li><span className='text-lg'>Lumen</span></li>
            <li><span className='text-lg'>FastApi</span></li>
            <li><span className='text-lg'>ExpressJs</span></li>
          </ul>
        </div>
        <div className='opacity-40 sm:opacity-100 w-full sm:w-1/3 absolute top-0 left-0 right-0 z-0 sm:relative flex justify-center'>
          <Image src="./brain.svg" alt="skills" width={300} height={340} />
          </div>
        <div className='w-1/2 sm:w-1/3 flex justify-end sm:justify-start z-10'>
          <ul className='text-right'>
            <span className='text-xl font-bold'>Design / Frontend</span>
            <li><span className='text-lg'>Javascript</span></li>
            <li><span className='text-lg'>Tailwind</span></li>
            <li><span className='text-lg'>HTML</span></li>
            <li><span className='text-lg'>CSS 3</span></li>
            <li><span className='text-lg'>Vue</span></li>
            <li><span className='text-lg'>React</span></li>
            <li><span className='text-lg'>Figma</span></li>
            <li><span className='text-lg'>JQuery</span></li>
            <li><span className='text-lg'>Angular</span></li>
            <li><span className='text-lg'>Bootstrap</span></li>
            <li><span className='text-lg'>Photoshop</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}