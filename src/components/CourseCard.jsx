import Button from './Button';

const CourseCard = ({ title, subtitle, text, icon, active, id }) => {
  return (
    <li
      className={`card flex-1 flex flex-col justify-between items-center px-5 py-[30px] bg-gray-gradient  mx-auto ${active ? 'active-card' : 'card'}`}>
      <div className="">
        <h3 className="font-tektur sm:text-[44px] text-4xl leading-[1.3] text-center text-accent mb-5">
          {title}
        </h3>
        <img className="mb-5 mx-auto" src={icon} alt="icon" width={78} height={78} />
        <p className="text-xl uppercase text-accent mb-4 ">{subtitle}</p>
        <p className="mb-9">{text}</p>
      </div>
      <Button label="Learn More" href={id} secondary />
    </li>
  );
};

export default CourseCard;
