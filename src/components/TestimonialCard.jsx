import { decor } from "../assets/icons";

const TestimonialCard = ({id, text, studentName, course, userPhoto, index }) => {
  return (
    <li
      id={id}
      className={`card flex-1 flex flex-col justify-between items-center px-10 py-[60px] bg-gray-gradient  mx-auto ${index === 0 ? "active-card" : ""}`}
    >
      <blockquote className="flex flex-col justify-between h-full">
        <div>
          <img
            className="mb-10"
            src={decor}
            alt="icon"
            width={42}
            height={27}
          />
          <p className="mb-10 leading-[1.8] text-lg">{text}</p>
        </div>
        <div className="flex gap-4 flex-start">
          <img
            className="block rounded-full object-cover w-[64px] h-[64px]"
            src={userPhoto}
            alt={studentName}
            width={64}
            height={64}
          />
          <div>
            <p className="text-2xl mb-1">{studentName}</p>
            <p className="opacity-50">{course}</p>
          </div>
        </div>
      </blockquote>
    </li>
  );
}

export default TestimonialCard