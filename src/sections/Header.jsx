import { NavLink, Link } from 'react-router-dom';

import { logo, hamburger } from '../assets/icons';
import { navLinks } from '../constants';




const Header = () => {
  return (
    <header className="container z-50 py-5 left-0 right-0 absolute ">
      <nav className="flex-1 flex justify-between items-center gap-10 ">
        <Link href="/" className="logo">
          <img
            className="logo__img"
            src={logo}
            alt="logo Education Center"
            width={200}
            height={40}
          />
        </Link>
        <ul className="nav__list flex-1 flex justify-end items-center gap-14 max-lg:hidden">
          {navLinks.map((item) => (
            <li className="nav__item" key={item.label}>
              <NavLink to={item.href} className="nav__link ">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="hamburger hidden max-lg:block">
          <img src={hamburger} width={32} height={32} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
