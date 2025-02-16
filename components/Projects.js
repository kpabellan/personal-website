import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const projects = [
  {
    title: 'Stellar AIO Websocket Server',
    description: 'A websocket server made for StellarAIO monitors that sends product inventory alerts.',
    repository: 'https://github.com/kpabellan/stellaraio-websocket-server'
  },
  {
    title: 'Adafruit Bot',
    description: 'A request based Adafruit bot that is geared to acquiring Raspberry Pis.',
    repository: 'https://github.com/kpabellan/adafruit-bot'
  },
  {
    title: 'Target In-Store PS5 Monitor',
    description: 'A Target in-store inventory monitor for PS5 consoles that sends alerts to SMS and Discord webhook.',
    repository: 'https://github.com/kpabellan/target-in-store-ps5-monitor'
  },
  {
    title: 'Arduino Gate Opener',
    description: 'A personal project that opens a gate with an Arduino remotely through a webpage.',
    repository: 'https://github.com/kpabellan/arduino-gate-opener'
  },
  {
    title: 'Krispy Kreme Generator',
    description: 'Generates Krispy Kreme accounts with next day birthday, allowing users to get free donuts.',
    repository: 'https://github.com/kpabellan/krispy-kreme-generator'
  },
  {
    title: 'Personal Website (This one!)',
    description: 'A personal website made with Next.js and Tailwind CSS.',
    repository: 'https://github.com/kpabellan/personal-website'
  },
];

export const Projects = () => {
  return (
    <div className='pb-10'>
      <div className='pb-5'>
        <h1 className='text-left pb-5 text-2xl md:text-3xl lg:text-5xl'>
          Projects 👨‍💻
        </h1>
        <p className='mx-auto text-left text-xl'>Here are some projects that I have created. There are more on my Github page <a href='https://github.com/kpabellan' className='underline hover:no-underline hover:text-gray-400' target='_blank' rel='noopener noreferrer'>here</a>.</p>
      </div>
      <div className='flex flex-wrap -mx-4'>
        {projects.map((project) => (
          <div
            key={project.title}
            className='w-full px-4 lg:w-1/2 lg:px-2.5 pb-5'
          >
            <div className='rounded-lg overflow-hidden bg-gray-400 shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col h-full'>
              <div className='px-3 py-4 flex-1'>
                <div className='text-xl mb-2'>{project.title}</div>
                <p className='text-gray-700 text-base flex-1'>
                  {project.description}
                </p>
              </div>
              <div className='px-3 pb-3'>
                <a href={project.repository} target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-gray-500 flex items-center'>
                  <span>Link to repository</span>
                  <BsArrowUpRightCircleFill className='inline-block ml-1' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};