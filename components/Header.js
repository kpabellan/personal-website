import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

export const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const navigations = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
    { label: 'Resume', path: '/resume.pdf' }
  ];

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button
          className='bg-transparent text-white-400 font-semibold hover:text-yellow-400'
          onClick={() => setTheme('light')}
        >
          <BsFillSunFill className='cursor-pointer text-xl' />
        </button>
      );
    } else {
      return (
        <button
          className='bg-transparent text-white-400 font-semibold hover:text-yellow-400'
          onClick={() => setTheme('dark')}
        >
          <BsMoonFill className='cursor-pointer text-xl' />
        </button>
      );
    }
  };

  return (
    <header className='h-16 flex items-center justify-between'>
      <ul className='flex gap-4 lg:gap-28'>
        {navigations.map((navigation) => (
          <li key={navigation.path} className={router.pathname === navigation.path ? 'underline' : ''}>
            {navigation.label === 'Resume' ? (
              <Link href={navigation.path} target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-gray-500'>
                {navigation.label}
              </Link>
            ) : (
              <Link href={navigation.path} className='text-gray-400 hover:text-gray-500'>
                {navigation.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      {renderThemeChanger()}
    </header>
  );
};