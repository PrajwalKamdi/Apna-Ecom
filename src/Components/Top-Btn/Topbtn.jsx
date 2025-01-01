import React from "react";
function Topbtn() {
  return (
    <button
      className="bg-slate-700 w-full text-center py-3 shadow-md text-gray-200 font-semibold hover:bg-slate-600  cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Back To Top
    </button>
  );
}

export default Topbtn;
