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
        I&apos;m a student at <a href='https://www.ucmerced.edu/about' target='_blank' rel='noopener noreferrer' className='underline hover:no-underline hover:text-gray-400'>University of California, Merced</a> majoring in computer science and engineering. I have a strong interest for software development and enjoy working on projects in my own time. My projects often focus on streamlining processes, automating tasks, and learning new technologies. Feel free to take a look at my Github projects or reach out to me on one of my socials.
      </p>
    </div>
  );
};