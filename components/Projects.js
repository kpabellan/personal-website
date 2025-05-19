import { useEffect, useState } from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { TbStar, TbGitFork } from "react-icons/tb";

const projects = [
  {
    title: 'Adafruit Bot',
    description: 'A request based Adafruit bot that is geared to acquiring Raspberry Pis.',
    repository: 'https://github.com/kpabellan/adafruit-bot'
  },
  {
    title: 'Arduino Gate Opener',
    description: 'A personal project that opens a gate with an Arduino remotely through a webpage.',
    repository: 'https://github.com/kpabellan/arduino-gate-opener'
  },
  {
    title: 'Campster',
    description: 'A campsite reservation helper that monitors and secures available campsites on recreation.gov.',
    repository: 'https://github.com/kpabellan/campster'
  },
  {
    title: 'Stellar AIO Websocket Server',
    description: 'A websocket server made for StellarAIO monitors that sends product inventory alerts.',
    repository: 'https://github.com/kpabellan/stellaraio-websocket-server'
  },
  {
    title: 'Target In-Store PS5 Monitor',
    description: 'A Target in-store inventory monitor for PS5 consoles that sends alerts to SMS and Discord webhook.',
    repository: 'https://github.com/kpabellan/target-in-store-ps5-monitor'
  },
];

const fetchRepoData = async (repoUrl) => {
  try {
    const apiUrl = repoUrl.replace('https://github.com/', 'https://api.github.com/repos/');
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('GitHub API request failed');
    return await response.json();
  } catch (error) {
    console.error('Error fetching repository data:', error);
    return null;
  }
};

export const Projects = () => {
  const [repoStats, setRepoStats] = useState({});

  useEffect(() => {
    const fetchAllRepoStats = async () => {
      const stats = {};
      for (const project of projects) {
        const repoData = await fetchRepoData(project.repository);
        if (repoData) {
          stats[project.repository] = {
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
          };
        }
      }
      setRepoStats(stats);
    };
    fetchAllRepoStats();
  }, []);

  return (
    <div className='pb-10'>
      <div>
        <h1 className='text-left pb-5 text-2xl md:text-3xl lg:text-5xl'>
          Projects 👨‍💻
        </h1>
        <p className='text-left text-xl'>
          Here are some projects that I have worked on.
        </p>
      </div>

      <div className='divide-y divide-gray-300'>
        {projects.map((project) => {
          const repoInfo = repoStats[project.repository] || { stars: null, forks: null };

          return (
            <div key={project.title} className='py-4'>
              <span className='font-semibold text-lg'>{project.title}</span>

              <p className='mt-2 mb-2'>{project.description}</p>

              <div className='flex items-center space-x-4 text-sm'>
                <div className='flex items-center space-x-1'>
                  <TbStar />
                  <span className={`inline-block min-w-[10x] text-right transition-opacity duration-300 ${repoInfo.stars === null ? 'opacity-0' : 'opacity-100'}`}>
                    {repoInfo.stars !== null ? repoInfo.stars : '0'}
                  </span>
                </div>

                <div className='flex items-center space-x-1'>
                  <TbGitFork />
                  <span className={`inline-block min-w-[10px] text-right transition-opacity duration-300 ${repoInfo.stars === null ? 'opacity-0' : 'opacity-100'}`}>
                    {repoInfo.forks !== null ? repoInfo.forks : '...'}
                  </span>
                </div>

                <a
                  href={project.repository}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center'
                >
                  <span>Repository</span>
                  <BsArrowUpRightCircleFill className='ml-1' />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <p className='text-left text-xl'>
        There are more projects on my GitHub page{' '}
        <a
          href='https://github.com/kpabellan'
          className='underline hover:no-underline hover:text-gray-400'
          target='_blank'
          rel='noopener noreferrer'
        >
          here
        </a>.
      </p>
    </div>
  );
};
