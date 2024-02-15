const FeaturesCard = ({ id, icon, title, text, active }) => {
  
  return (
    <li
      key={id}
      id={id}
      className={`card items-start ${active ? "active-card" : "bg-transparent"}`}
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
