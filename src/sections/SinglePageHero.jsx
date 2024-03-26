import { Button } from '../components';

const SinglePageHero = ({ subtitle, photo, title, description, duration, price }) => {
  return (
    <section className="container pt-[100px] pb-12">
      <h1 className="max-w-[970px] w-full mx-auto font-tektur md:text-[56px] text-3xl block md:mb-12 mb-8 text-center leading-[1.3]">
        {subtitle}
      </h1>
      <div className="flex flex-1 gap-[30px] mb-10 md:flex-row flex-col">
        <div className="min-w-[200px] max-h-[300px] overflow-hidden rounded-[24px]">
          <img
            className=" w-full h-full
              object-cover "
            src={photo}
            alt={title}
            width={470}
            height={300}
          />
        </div>

        <div className="flex flex-col justify-between max-w-[670px] w-full ">
          <div className="mb-8">
            <div className="text-accent text-xl font-medium mb-4">
              Duration: <span className="font-normal text-primary">{duration}</span>
            </div>
            <p>{description}</p>
          </div>
          <div>
            <div className="text-accent text-xl font-medium mb-2">
              Price: <span className="font-normal text-primary">$</span>
              <span className="font-normal text-primary">{price}</span>
            </div>
            <Button label="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePageHero;
