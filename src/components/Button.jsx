const Button = ({href, label, secondary}) => {
 let buttonStyle = !secondary ? 'primaryBtn' : 'secondaryBtn';  
  if (href) {
    return (
      <a className={buttonStyle} href={href}>
        {label}
      </a>
    );
  }
  return (
    <button className={buttonStyle} type="button">
      {label}
    </button>
  );
};

export default Button;
