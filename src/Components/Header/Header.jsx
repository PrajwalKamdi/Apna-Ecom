import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BiCollection } from "react-icons/bi";
function Header() {
  const [menu, setMenu] = useState(false);
  const count = useSelector((store) => store.cartSlice.length);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="shadow-md  bg-white fixed top-0 right-0 left-0 ">
      <nav className="flex justify-between items-center lg:px-16 lg:py-5 md:px-12 px-3 py-3">
        <div>
          <NavLink to={"/"}><h1 className="text-xl md:text-2xl">𝔸ℙℕ𝔸_𝔼ℂ𝕆𝕄 </h1></NavLink>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-10">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ?"text-orange-500"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/collection"}
                className={({ isActive }) =>
                  isActive
                    ?  "text-orange-500"
                    : ""
                }
              >
                <span className="flex items-center space-x-2">
                  Collection{" "}
                  <span>
                    <BiCollection size={20} />
                  </span>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/cart"}
                className={({ isActive }) => {
                  isActive
                    ? "text-orange-500"
                    : "";
                }}
              >
                <span className="flex items-center ">
                  <BsCart4 size={20} />
                  <span className="rounded-full text-[10px] font-semibold text-white bg-black px-[4px]">
                    {count}
                  </span>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : ""
                }
              >
                <span className="flex items-center">
                  Profile
                  <span>
                    <IoPersonCircleSharp size={20}/>
                  </span>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-2 lg:hidden">
          <li className="flex ">
            <NavLink
              to={"/cart"}
              className={({ isActive }) => {
                isActive
                  ? "underline  underline-offset-8 font-bold"
                  : "font-semibold";
              }}
            >
              <span className="flex items-center ">
                <BsCart4 />
                <span className="rounded-full text-[10px] font-semibold text-white bg-black px-[4px]">
                  {count}
                </span>
              </span>
            </NavLink>
          </li>
          <BiMenu
            onClick={handleMenu}
            className={`${menu ? "hidden" : "block"}`}
            size={20}
          />
          <IoMdClose
            className={`${menu ? "block" : "hidden"}`}
            onClick={handleMenu}
            size={20}
          />
        </div>
      </nav>

      <nav
        className={`inset-0 h-screen ${menu ? "block" : "hidden"}`}
        onClick={handleMenu}
      >
        <ul className="mt-[100px] flex flex-col gap-10 text-center">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/collection"}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
            >
              Collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
            >
              Cart <span>{count}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
