// import { useState } from 'react';
// import logo from '../assets/logo.svg';
// import closeBtn from '../assets/close.svg';
// import menuBtn from '../assets/menu.svg';
// import { navLinks } from '../constants';

const Header = () => {
  // const [toggle, setToggle] = useState(false);

  return (
    <div>headeer</div>
   
    // <header className=" py-5 ">
    //   <div className="container w-full flex justify-between items-center">
    //     <img src={logo} alt="logo" className="w-[280px]" />

    //     <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-9">
    //       {navLinks.map((nav) => (
    //         <li
    //           key={nav.id}
    //           className={
    //             "font-inter font-normal cursor-pointer taxt-[16px] text-accent"
    //           }
    //         >
    //           <a href={`#${nav.id}`}>{nav.title}</a>
    //         </li>
    //       ))}
    //     </ul>

    //     <div className="sm:hidden flex flex-1 justify-end items-center">
    //       <img
    //         src={toggle ? closeBtn : menuBtn}
    //         alt="menu"
    //         className="w-[28px] h-[28px] cursor-pointer object-contain"
    //         onClick={() => setToggle((prev) => !prev)}
    //       />
    //       <div
    //         className={`${
    //           toggle ? "flex" : "hidden"
    //         } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
    //       >
    //         <ul className="list-none flex flex-col justify-end items-center flex-1 gap-9">
    //           {navLinks.map((nav) => (
    //             <li
    //               key={nav.id}
    //               className={
    //                 "font-inter font-normal cursor-pointer taxt-[16px] text-accent"
    //               }
    //             >
    //               <a href={`#${nav.id}`}>{nav.title}</a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}

export default Header