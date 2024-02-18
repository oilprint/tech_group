import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logo, OpenMenu, CloseBtn } from "../assets/icons";
import { navLinks } from '../constants';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
        <ul className="flex-1 justify-end items-center gap-14 sm:flex  hidden">
          {navLinks.map((item) => (
            <li className="nav__item" key={item.label}>
              <NavLink to={item.href} className="nav__link ">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className="sm:hidden flex w-10 h-10 text-primary"
        >
          {toggleMenu ? <CloseBtn /> : <OpenMenu />}
        </button>
        <div
          className={`${toggleMenu ? "flex" : "hidden"} top-20 right-0 p-6 h-screen bg-dark-gradient absolute min-w-[300px] rounded-xl sidebar`}
        >
          <ul className="flex-1 flex-col items-center gap-4 flex   ">
            {navLinks.map((item) => (
              <li className="p-2" key={item.label}>
                <NavLink to={item.href} className="text-2xl">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
