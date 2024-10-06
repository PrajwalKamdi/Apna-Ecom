import React from "react";
import { BiCopyright } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
     
      <div className=" bg-slate-800  text-gray-200 ">
        <div className="px-5 grid grid-cols-2  lg:grid-cols-4 gap-10 py-10 text-[14px] lg:text-[16px] ">
          <div className="mx-auto">
            <h3 className="text-lg font-semibold  capitalize py-1">get to know us </h3>
            <ul>
              <li>
                <Link> About ApnaEcom</Link>
              </li>
              <li>
                <Link> Careers</Link>
              </li>{" "}
              <li>
                <Link> Press Releases</Link>
              </li>{" "}
              <li>
                <Link> ApnaEcom Science</Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <h3 className="text-lg font-semibold capitalize py-1 ">connect with us </h3>
            <ul>
              <li className="flex space-x-1 items-center">
                <Link> Facebook </Link>
                <FaFacebook />
              </li>
              <li className="flex space-x-1 items-center">
                <Link> Instagam</Link>
                <FaInstagram />
              </li>{" "}
              <li className="flex space-x-1 items-center">
                <Link> Twitter</Link>
                <BsTwitterX />
              </li>{" "}
            </ul>
          </div>
          <div className="mx-auto">
            <h3 className="text-lg capitalize py-1 font-semibold  ">get to know us </h3>
            <ul>
              <li>
                <Link> About ApnaEcom</Link>
              </li>
              <li>
                <Link> Careers</Link>
              </li>{" "}
              <li>
                <Link> Press Releases</Link>
              </li>{" "}
              <li>
                <Link> ApnaEcom Science</Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <h3 className="text-lg capitalize py-1 font-semibold ">Let Us Help You</h3>
            <ul>
              <li>
                <Link>Your Account</Link>
              </li>
              <li>
                <Link>Returns Centre</Link>
              </li>{" "}
              <li>
                <Link> Recalls and Product Safety Alerts</Link>
              </li>{" "}
              <li>
                <Link>100% Purchase Protection</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="py-5 text-[14px] lg:text-[16px]">
          <div className="flex space-x-1 items-center justify-center ">
            <BiCopyright size={18} />
            <p>2024 All Rights Reserved @APNA-ECOM </p>
          </div>
          <div className="flex  space-x-1 items-center justify-center ">
            <p>Developed By Prajwal </p>
            <FaHeart size={15} color="red" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
