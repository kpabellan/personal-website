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
      I&apos;m a recent computer science and engineering graduate at <a href='https://www.ucmerced.edu/about' target='_blank' rel='noopener noreferrer' className='underline hover:no-underline hover:text-gray-400'> University of California, Merced</a>. From building to breaking, I have a strong passion for both software development and cybersecurity. In my free time, I&apos;m often working on projects or learning new skills and technologies. Outside the digital realm, I enjoy hiking and spending my time outdoors. For any inquiries, please don&apos;t hesitate to reach out to me on my social media profiles.
      </p>
    </div>
  );
};