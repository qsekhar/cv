import Image from 'next/image';

export default function Skills() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='my-4'>Skills</h3>
      <div className='flex justify-center'>
        <div>
          <ul>
            <span className='text-lg font-bold'>Banckend</span>
            <li><span className='text-lg'>Python</span></li>
            <li><span className='text-lg'>NodeJs</span></li>
            <li><span className='text-lg'>Php</span></li>
          </ul>
        </div>
        <div><Image src="./brain.svg" alt="skills" width={300} height={400} /></div>
        <div>
          <ul>
            <span className='text-lg font-bold'>Frontend</span>
            <li><span className='text-lg'>HTML</span></li>
            <li><span className='text-lg'>CSS 3</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}