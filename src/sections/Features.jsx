import { Button, FeaturesCard } from "../components";
import { features } from "../constants";

const Features = () => {
  return (
    <section className="container py-20 flex justify-between gap-5 w-full ">
      <div className="features__info max-w-[500px] ">
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
    </section>
  );
};

export default Features;
