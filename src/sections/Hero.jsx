import { Button } from "../components";

const Hero = () => {
  return (
    <section id="hero">
      <h1>Unleash Your Tech Potential</h1>
      <p>
        Navigate through coding, software development, cybersecurity, and other
        cutting-edge topics with the support of our knowledgeable instructors.
      </p>
      <div className="hero__bottom">
        <Button href="#" label="Get Started" />
        <Button href="#" label="Learn More" secondary={true} />
      </div>
    </section>
  );
};

export default Hero;
