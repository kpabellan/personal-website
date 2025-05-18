import Typewriter from 'typewriter-effect';

export const Introduction = () => {
  return (
    <div className='py-10'>
      <h1 className='text-left pb-5 text-4xl md:text-6xl lg:text-7xl'>
        <nobr>
          <Typewriter
            options={{
              strings: "Hello, I'm Kobey.",
              autoStart: true,
              loop: false,
              delay: 75,
            }}
          />
        </nobr>
      </h1>

      <p className='mx-auto text-left text-xl'>
        I&apos;m a Computer Science and Engineering graduate from the <a href='https://www.ucmerced.edu/about' target='_blank' rel='noopener noreferrer' className='underline hover:no-underline hover:text-gray-400'>University of California, Merced</a>. I have a strong interest in technology and enjoy working with systems, solving technical problems, and actively expanding my knowledge of new tools and skills. Feel free to connect with me through my social media profiles.
      </p>
    </div>
  );
};