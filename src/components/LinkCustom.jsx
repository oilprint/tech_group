import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const LinkCustom = (label, href) => {
  return (
    <Link
      to={href}
      className="flex gap-2 uppercase sm:mr-0 mx-auto w-fit text-accent  transition ease-in-out duration-300  focus:outline focus:outline-1 focus:outline-offset-4 focus:outline-accent rounded hover:text-white active:text-accent">
      All Courses
      <img src={arrow} alt="arrow" width={36} height={16} />
    </Link>
  );
};

export default LinkCustom;
