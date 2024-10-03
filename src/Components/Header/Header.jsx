import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);
  const count = useSelector((store)=>store.cartSlice.length)
  console.log(count)
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="shadow-md  bg-white fixed top-0 right-0 left-0 ">
      <nav className="flex justify-between items-center lg:px-16 lg:py-5 md:px-12 px-3 py-3">
        <div>
          <h1 className="font-semibold text-xl text-orange-600">Apna-Ecom</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-10">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "underline  underline-offset-8 font-bold" : "font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/collection"}
                className={({ isActive }) =>
                  isActive ? "underline  underline-offset-8 font-bold" : "font-semibold"
                }
              >
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/cart"}
                className={({ isActive }) =>
                  isActive ? "underline  underline-offset-8 font-bold" : "font-semibold"
                }
              >
                Cart <span className=" rounded-[100%] px-2 py-0  bg-red-500 text-sm">{count}</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  isActive ? "underline  underline-offset-8 font-bold" : "font-semibold"
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
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
    </div>
  );
}

export default Header;
