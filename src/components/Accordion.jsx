import { useState } from "react";
import { Chevron } from "../assets/icons";

const Accordion = ({id, question, answer, index}) => {
  
const [accordion, setAccordion] = useState(0 );

const accordionToggle = (index) => {
  if (accordion===index){
    setAccordion(null)
  }else {
    setAccordion(index)
  }
}
  return (
    <li
      className={`px-5 rounded-[20px] ${accordion === index ? "bg-gray-gradient py-5" : ""}`}
      key={id}
    >
      <div
        className="flex justify-between items-center gap-8 cursor-pointer "
        onClick={() => accordionToggle(index)}
      >
        <h3
          className={`text-2xl mb-2 ${accordion === index ? "text-accent" : ""}`}
        >
          {question}
        </h3>
        <div
          className={`shrink-0 w-12 h-12 ${accordion === index ? "rotate-180" : ""}`}
        >
          <Chevron />
        </div>
      </div>
      <div
        className={`0 transition duration-300 ease-in-out ${accordion === index ? "visible opacity-100 h-auto" : "h-0 invisible opacity-"}`}
      >
        <p className="overflow-hidden w-[90%]">{answer}</p>
      </div>
    </li>
  );
}

export default Accordion