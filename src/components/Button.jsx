import { Link } from 'react-router-dom';

const Button = ({ onClick, href, label, secondary }) => {
  let buttonStyle = !secondary ? 'primaryBtn' : 'secondaryBtn';
  if (href) {
    return (
      <Link to={href} className={buttonStyle}>
        {label}
      </Link>
    );
  }
  return (
    <button className={buttonStyle} type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
