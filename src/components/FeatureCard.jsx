
const FeatureCard = ({icon, title, content, id}) => {
  return (
    <li key={id} className="text-primary flex flex-1 gap-[10px] p-5 feature-card rounded-[20px]">
      <img src={icon} alt="icon" className="size-16 object-contain" />
      <div>
        <h3 className="text-lg font-medium max-w-[640px]">{title}</h3>
        <p>{content}</p>
      </div>
    </li>
  );
}

export default FeatureCard