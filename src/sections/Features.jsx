import { Button, FeaturesCard } from '../components';
import { features } from '../constants';

const Features = () => {
  return (
    <section className="container md:py-[70px] py-10" id="features">
      <div className="flex-1 flex  justify-between md:items-start items-center md:gap-5 gap-9  w-full md:flex-row flex-col ">
        <div className="relative flex flex-col items-center md:items-start md:max-w-[500px] w-full ">
          <div className="absolute z-[3] -left-[200%] top-0 w-[150%] h-[120%] rounded-full  blue-gradient" />
          <div className="relative z-10">
            <h2 className="md:mb-12 mb-6 md:text-4xl   text-3xl leading-[1.3] uppercase">
              Discover the Advantages: Elevate Your Skills with Our Courses
            </h2>
            <Button href="courses" label="Choose Your Course" />
          </div>
        </div>
        <ul className="shrink-0 max-w-[600px] w-full flex flex-col gap-[30px]">
          {features.map((item) => (
            <FeaturesCard key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
