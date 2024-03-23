import React, { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-poppins text-white text-[16px] cursor-pointer font-normal ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } hover:text-secondary transition-colors ease-linear duration-300`}
          >
            <a href={`#${link.id}`} key={link.id}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-7 h-7 object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins text-white text-[16px] cursor-pointer font-normal ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${link.id}`} key={link.id}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
