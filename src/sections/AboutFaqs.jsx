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
        <h2 className="title">Values and Advantages of Our Center</h2>
        <div className="flex-1 flex md:flex-row flex-col justify-between items-start md:gap-8 gap-4">
          <ul className="flex flex-col md:max-w-[600px] w-full gap-4">
            {aboutFaqs.map((item) => (
              <li
                className="rounded-[20px] p-5 pl-10 bg-gray-gradient before:block before:absolute before:top-[30px] before:left-5 before:w-3 before:h-3 before:rounded-full  before:bg-accent relative"
                key={item.id}>
                <h3 className="text-2xl mb-1 text-accent ">{item.question}</h3>
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
