
import { navLinks } from "../constants";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import {BiSolidBuildingHouse} from "react-icons/bi"

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full py-3 flex items-center justify-around mx-auto fixed bg-none z-0">
      <BiSolidBuildingHouse className="text-slate-200 text-3xl" />
      <ul className="list-none sm:flex hidden items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-slate-200"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="justify-between sm:flex hidden items-center place-items-center text-slate-200 ">
        <div className="flex font-poppins font-normal cursor-pointer text-[16px]">
          <h2 className="pr-1">EN</h2>|<h2 className="pl-1">SW</h2>
        </div>
        <div className="ml-20">
          <BsFillPersonFill className="text-2xl" />
        </div>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <AiOutlineClose className="text-2xl text-slate-200" /> : <HiMenuAlt1 className="text-2xl text-slate-200" />}
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex flex-col"
          } p-6 bg-gradient-to-r from-stone-200 to-stone-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-stone-700"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col text-stone-600 bg-slate-300 rounded-sm p-1">
            <div className="flex font-poppins font-medium cursor-pointer text-[16px] mt-2">
              <h2 className="pr-1">EN</h2>|<h2 className="pl-1">SW</h2>
            </div>
            <div className="mt-2 flex">
              <BsFillPersonFill className="text-2xl" />
              <span className=" text-stone-600 font-poppins font-medium cursor-pointer text-[16px] ml-2">Doe</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
