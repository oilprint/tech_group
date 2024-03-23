import { NavLink } from 'react-router-dom';
import { Button } from '../components';
import bgHero from '../assets/images/bg-hero.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: ` linear-gradient(0deg, rgba(0,4,15,1) 0%, rgba(0,4,15,0.48783263305322133) 18%, rgba(0,4,15,0.011642156862745057) 41%), url(${bgHero})`,
      }}>
      {/* <div className="absolute hero__image bg-wave bg-no-repeat bg-cover bg-center h-[250px] bottom-0 left-0 right-0"></div> */}
      <div className="container flex flex-1 justify-center items-center min-h-[85vh]">
        <div className="hero__inner flex flex-1 flex-col justify-center items-center max-w-[900px] w-full text-center ">
          <h1 className="font-tektur md:text-8xl text-6xl pt-10 mb-6">
            Unleash Your <span className="text-accent">Tech Potential</span>
          </h1>
          <p className="md:text-2xl text-xl md:mb-12 mb-6">
            Navigate through coding, software development, cybersecurity, and other cutting-edge
            topics with the support of our knowledgeable instructors.
          </p>
          <div className="hero__bottom flex flex-1 gap-[30px]">
            <Button href="courses" label="Get Started" />
            <Button href="about" label="Learn More" secondary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
