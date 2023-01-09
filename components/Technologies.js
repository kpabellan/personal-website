import {
  SiVisualstudiocode,
  SiGithub,
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiGo,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPostman
} from 'react-icons/si'

export const Technologies = () => {
  return (
    <div className='pb-10'>
      <h1 className='text-left pb-5 text-2xl md:text-3xl lg:text-5xl'>
        Technologies I use 💻
      </h1>

      <ul className='grid grid-cols-3 gap-4 sm:grid-cols-4'>
        <li className='flex items-center space-x-2'>
          <span><SiVisualstudiocode /></span>
          <span>VS Code</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiGithub /></span>
          <span>Github</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiPython /></span>
          <span>Python</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiJavascript /></span>
          <span>Javascript</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiCplusplus /></span>
          <span>C/C++</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiGo /></span>
          <span>Golang</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiNodedotjs /></span>
          <span>Node.js</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiNextdotjs /></span>
          <span>Next.js</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiTailwindcss /></span>
          <span>Tailwind CSS</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiPostman /></span>
          <span>Postman</span>
        </li>
      </ul>

    </div>
  )
}