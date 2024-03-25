import { aboutFaqs } from '../constants';
import { aboutFaqsPhoto, bgHero } from '../assets/images';

const AboutFaqs = () => {
  return (
    <section
      className="md:py-[70px] py-10  bg-cover bg-no-repeat bg-center"
      id="faqs"
      style={{
        backgroundImage: ` linear-gradient(0deg, rgba(0,4,15,1) 0%, rgba(0,4,15,0.5) 18%, rgba(0,4,15,0) 41%), linear-gradient(0deg, rgba(0,4,15,0) 0%, rgba(0,4,15,0.5) 80%, rgba(0,4,15,1) 100%), url(${bgHero})`,
      }}>
      <div className="container ">
        <h2 className="md:mb-12 mb-6 md:text-[52px] text-[36px] leading-[1.3] uppercase">
          Values and Advantages of Our Center
        </h2>
        <div className="flex-1 flex md:flex-row flex-col justify-between items-start  gap-8">
          <ul className="flex flex-col md:max-w-[600px] w-full gap-4">
            {aboutFaqs.map((item) => (
              <li
                className="rounded-[20px] p-5 pl-12 bg-gray-gradient before:block before:absolute before:top-8 before:left-5 before:w-4 before:h-4 before:rounded-full  before:bg-accent relative"
                key={item.id}>
                <h3 className="text-3xl mb-2 text-accent">{item.question}</h3>
                <p>{item.answer}</p>
              </li>
            ))}
          </ul>
          <img
            className="object-contain"
            src={aboutFaqsPhoto}
            alt="Education Center's Techers"
            width={454}
            height={663}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutFaqs;
