import { SiGithub, SiLinkedin, SiInstagram, SiDiscord } from 'react-icons/si';
import { ImMail } from 'react-icons/im';

export const Footer = () => {
  return (
    <>
      <hr className='text-gray-400 my-5' />
      <footer className='py-4'>
        <div className='container mx-auto flex items-center justify-between'>
          <div>
            <h1 className='text-left text-sm md:text-md lg:text-lg'> &copy; {new Date().getFullYear()} Kobey Pabellan</h1>
          </div>
          <div className='flex'>
            <a
              href='https://github.com/kpabellan'
              className='px-1 hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiGithub size={24} />
            </a>
            <a
              href='https://www.linkedin.com/in/kobey-pabellan-484b46257/'
              className='px-1 hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiLinkedin size={24} />
            </a>
            <a
              href='https://www.instagram.com/kpabellan'
              className='px-1 hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiInstagram size={24} />
            </a>
            <div
              className='px-1 hover:text-gray-400'
              onClick={() => {
                navigator.clipboard.writeText('kepsta');
                alert('Copied Discord To Clipboard');
              }}
            >
              <SiDiscord size={24} />
            </div>
            <a
              href='mailto:kp@kpabellan.com'
              className='px-1 hover:text-gray-400'
            >
              <ImMail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};