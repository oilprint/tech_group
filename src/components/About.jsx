
import Button from './Button';

const About = () => {
  return (
    <section className="bg-dark  bg-no-repeat bg-contain bg-center h-[600px]">
      {/* <div className="absolute  bg-face bg-[left_-250px_bottom_0] bg-no-repeat bg-contain h-[80%] w-[60%]" /> */}
      <div className="container">
        <div className="relative flex items-center">
          <div className="absolute  bg-face bg-[left_-250px_bottom_0] bg-no-repeat bg-contain h-[80%] w-[60%]" />
          <div className="py-[190px]">
            <h2>Unrivaled Cybersecurity Excellence</h2>
            <p>
              At [Your Company Name], we redefine cybersecurity, ensuring
              impenetrable digital defense. With a commitment to excellence, we
              lead the industry with expert solutions. Our cutting-edge
              technologies and personalized approach guarantee optimal
              protection for your digital assets. Partner with us for
              unparalleled cybersecurity expertise and fortified peace of mind."
            </p>
            <Button text="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About