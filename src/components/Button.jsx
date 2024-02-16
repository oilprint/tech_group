const Button = ({onClick, href, label, secondary}) => {
 let buttonStyle = !secondary ? 'primaryBtn' : 'secondaryBtn';  
  if (href) {
    return (
      <a className={buttonStyle} href={href}>
        {label}
      </a>
    );
  }
  return (
    <button className={buttonStyle} type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
