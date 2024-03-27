import bgHero from '../assets/images/bg-hero.jpg';
import bgVideo from '../assets/video/about-1.mp4';

const AboutHero = () => {
  return (
    <section
      id="about"
      className="relative bg-cover bg-no-repeat bg-center h-[80vh] "
      style={{
        backgroundImage: ` linear-gradient(0deg, rgba(0,4,15,1) 0%, rgba(0,4,15,0.48783263305322133) 18%, rgba(0,4,15,0.011642156862745057) 41%), url(${bgHero})`,
      }}>
      <div className="absolute z-10 -bottom-5 left-0 right-0 w-fullh-[50vh]bg-black-gradient-2"></div>

      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        className="video-hero absolute -z-1 bottom-0 left-0 right-0 top-0 w-full h-[80vh] object-cover  opacity-75"
      />
      <div className="container flex flex-1 justify-center items-center min-h-[80vh]md:h-[80vh] h-[60vh] z-10 relative">
        <div className="flex flex-1 flex-col justify-center items-center max-w-[900px] text-center bg-gray-gradient bg-opacity-20 rounded-3xl py-5 active-card">
          <h1 className="font-tektur md:text-7xl text-3xl block mb-6 ">
            Educational Center of<span className="text-accent"> Success:</span>
          </h1>
          <p className="md:text-2xl text-xl md:mb-12 mb-6">
            Developing the potential of each student: creating the future together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
