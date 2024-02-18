import { Accordion } from "../components";
import { faqs } from "../constants";
import { faqImage, bgHero  } from "../assets/images";
import { useState } from "react";


const Faqs = () => {    
const [accordion, setAccordion] = useState(0);

  return (
    <section
      className="md:py-[70px] py-10  bg-cover bg-no-repeat bg-center"
      id="faqs"
      style={{
        backgroundImage: ` linear-gradient(0deg, rgba(0,4,15,1) 0%, rgba(0,4,15,0.5) 18%, rgba(0,4,15,0) 41%), linear-gradient(0deg, rgba(0,4,15,0) 0%, rgba(0,4,15,0.5) 80%, rgba(0,4,15,1) 100%), url(${bgHero})`,
      }}
    >
      <div className="container ">
        <h2 className="mb-12 md:text-[58px] text-5xl leading-[1.3] uppercase">
          FAQ: Your Answers to Common Queries
        </h2>
        <div className="flex-1 flex md:flex-row flex-col justify-between  gap-8">
          <ul className="flex flex-col md:max-w-[600px] w-full gap-4">
            {faqs.map((item, index) => (
              <Accordion
                key={item.id}
                {...item}
                isOpen={index === accordion}
                onClick={() =>
                  (index = accordion ? setAccordion(null) : setAccordion(index))
                }
                
              />
            ))}
          </ul>
          <img
            className="object-contain"
            src={faqImage}
            alt="Education Center's Techers"
            width={440}
            height={530}
          />
        </div>
      </div>
    </section>
  );
}

export default Faqs