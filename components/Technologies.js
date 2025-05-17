import {
  SiCplusplus,
  SiDocker,
  SiGit,
  SiJavascript,
  SiLinux,
  SiPostman,
  SiPython,
  SiSplunk,
  SiVmware,
  SiVirtualbox,
  SiVisualstudiocode,
  SiWireshark,
} from 'react-icons/si';

export const Technologies = () => {
  return (
    <div className='pb-10'>
      <h1 className='text-left pb-5 text-2xl md:text-3xl lg:text-5xl'>
        Technologies I use 💻
      </h1>

      <ul className='grid grid-cols-3 gap-4 sm:grid-cols-4'>

        <li className='flex items-center space-x-2'>
          <span><SiCplusplus /></span>
          <span>C/C++</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiDocker /></span>
          <span>Docker</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiGit /></span>
          <span>Git</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiJavascript /></span>
          <span>Javascript</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiLinux /></span>
          <span>Linux</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiPostman /></span>
          <span>Postman</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiPython /></span>
          <span>Python</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiSplunk /></span>
          <span>Splunk</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiVmware /></span>
          <span>VMware</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiVirtualbox /></span>
          <span>VirtualBox</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiVisualstudiocode /></span>
          <span>VS Code</span>
        </li>

        <li className='flex items-center space-x-2'>
          <span><SiWireshark /></span>
          <span>Wireshark</span>
        </li>

      </ul>
    </div>
  );
};