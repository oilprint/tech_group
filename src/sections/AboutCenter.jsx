import { aboutCenter } from "../constants";
import bgHero from "../assets/images/bg-hero.jpg";
import { Button } from "../components";

const AboutCenter = () => {
  return (
    <section
      id="aboutCenter"
      className="relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: ` linear-gradient(0deg, rgba(0,4,15,1) 0%, rgba(0,4,15,0.5) 18%, rgba(0,4,15,0) 41%), linear-gradient(0deg, rgba(0,4,15,0) 0%, rgba(0,4,15,0.5) 80%, rgba(0,4,15,1) 100%), url(${bgHero})`,
      }}
    >
      <div className=" container relative min-h-[55vh] flex flex-end items-center">
        <div className="absolute bg-face top-0 bottom-0 w-[80%] bg-contain bg-no-repeat bg-center -left-[40%] ss:block hidden"></div>
        <div className="md:max-w-[660px] max-w-[400px] w-full ml-auto ">
          <h2 className="text-[42px] leading-[1.3] mb-5 uppercase">
            {aboutCenter.title}
          </h2>
          <p className="mb-[50px]">{aboutCenter.text}</p>
          <Button label="About Us" />
        </div>
      </div>
    </section>
  );
}

export default AboutCenter