import { Button, FeaturesCard } from "../components";
import { features } from "../constants";

const Features = () => {
  return (
    <section className="container py-[70px] ">
      <div className="flex-1 flex  justify-between md:items-start items-center md:gap-5 gap-9  w-full md:flex-row flex-col ">
        <div className="flex flex-col items-center md:items-start md:max-w-[500px] w-full  ">
          <h2 className="mb-12 text-4xl leading-[1.3] uppercase">
            Discover the Advantages: Elevate Your Skills with Our Courses
          </h2>
          <Button label="Choose Your Course" href="#" />
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
