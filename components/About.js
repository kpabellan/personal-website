import Typewriter from 'typewriter-effect'

export const About = () => {
  return (
    <div className='py-10'>
      <h1 className='text-left pb-5 text-4xl md:text-6xl lg:text-7xl'>
        <nobr>
          <Typewriter
            options={{
              strings: 'About Me',
              autoStart: true,
              loop: false,
              delay: 75,
            }}
          />
        </nobr>
      </h1>
    </div>
  )
}