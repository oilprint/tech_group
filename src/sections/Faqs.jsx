import { Accordion } from "../components";
import { faqs } from "../constants";
import {faqImage} from "../assets/images";
import { useState } from "react";

const Faqs = () => {    
const [accordion, setAccordion] = useState(0);


  
  return (
    <div className="container py-[70px]">
      <h2 className="mb-12 md:text-[58px] text-5xl leading-[1.3] uppercase">
        FAQ: Your Answers to Common Queries
      </h2>
      <div className="flex-1 flex md:flex-row flex-col justify-between items-center gap-8">
        <ul className="flex flex-col md:max-w-[600px] w-full gap-4">
          {faqs.map((item, index) => (
            <Accordion
              key={item.id}
              {...item}
              isOpen={index === accordion}
              onClick={() =>
                (index = accordion ? setAccordion(null) : setAccordion(index))
              }
              isOpen={accordion === index}
            />
          ))}
        </ul>
        <img
          className="object-cover"
          src={faqImage}
          alt="Education Center's Techers"
          width={440}
          height={530}
        />
      </div>
    </div>
  );
}

export default Faqs