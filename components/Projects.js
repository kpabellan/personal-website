import { useEffect, useState } from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { TbStar, TbGitFork } from "react-icons/tb";

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
    title: 'Campster',
    description: 'A campsite reservation helper that monitors and secures available campsites on recreation.gov.',
    repository: 'https://github.com/kpabellan/campster'
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
      <div className='pb-5'>
        <h1 className='text-left pb-5 text-2xl md:text-3xl lg:text-5xl'>
          Projects 👨‍💻
        </h1>
        <p className='mx-auto text-left text-xl'>Here are some projects that I have created. There are more on my Github page <a href='https://github.com/kpabellan' className='underline hover:no-underline hover:text-gray-400' target='_blank' rel='noopener noreferrer'>here</a>.</p>
      </div>
      <div className='flex flex-wrap -mx-4'>
        {projects.map((project) => {
          const repoInfo = repoStats[project.repository] || { stars: '...', forks: '...' };
          return (
            <div key={project.title} className='w-full px-4 lg:w-1/2 lg:px-2.5 pb-5'>
              <div className='rounded-lg overflow-hidden bg-gray-400 shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col h-full'>
                <div className='px-3 pt-3 flex-1'>
                  <div className='text-xl mb-2'>{project.title}</div>
                  <p className='text-gray-700 text-base flex-1'>{project.description}</p>
                </div>

                <div className='px-3 pb-3'>
                  <div className="text-sm text-gray-800 py-2 flex items-center">
                    {repoInfo.stars > 0 && (
                      <>
                        <TbStar className="mr-1" />
                        {repoInfo.stars}
                      </>
                    )}

                    {repoInfo.forks > 0 && (
                      <>
                        <TbGitFork className="ml-3 mr-1" />
                        {repoInfo.forks}
                      </>
                    )}
                  </div>

                  <a href={project.repository} target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-gray-500 flex items-center'>
                    <span>Link to repository</span>
                    <BsArrowUpRightCircleFill className='inline-block ml-1' />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};