const FeaturesCard = ({ id, icon, title, text }) => {
  return (
    <li
      key={id}
      id={id}
      className="flex-1 flex items-start gap-5 p-5 rounded-[20px]  hover:bg-gray-gradient w-full"
    >
      <img src={icon} alt="icon" width={48} height={48} />
      <div>
        <h3 className="text-accent text-2xl uppercase mb-2"> {title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default FeaturesCard;
