import React from "react";
import { Link } from "react-scroll";

function Topbtn({goto}) {
  return (
    <Link
      to={goto}
      duration={500}
      smooth={true}
      offset={-80}
      activeClass="active"
    >
      <div className="bg-slate-700 text-center py-3 shadow-md text-gray-200 font-semibold hover:bg-slate-600  cursor-pointer">
        Back To Top
      </div>
    </Link>
  );
}

export default Topbtn;
