import React from "react";
import { Form, Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
function Sign_Up() {
  return (
    <>
      <div className="mt-[80px] md:px-16 my-10  px-3 md:w-[70%] mx-auto text-[12px] md:text-[15px] " id="sign-up">
        <Form
          action={"/profile"}
          className="border p-5 space-y-3  rounded-md bg-neon-100 my-auto"
        >
          <h1 className="text-center text-xl">Log In</h1>
          <hr />
          <div className="grid grid-cols-2 justify-between gap-5">
            <div className="">
              <input
                type="text"
                id="name"
                className="border   p-2 rounded-md bg-slate-100 outline-none w-full"
                required
                placeholder="First Name"
              />
            </div>
            <div className="">
              <input
                type="text"
                id="Lastname"
                className="border w-full p-2 rounded-md bg-slate-100 outline-none"
                required
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                type="text"
                id="phone"
                className="border w-full  p-2 rounded-md bg-slate-100 outline-none "
                required
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="border w-full  p-2 rounded-md bg-slate-100 outline-none"
                required
                placeholder="Your Email"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                className="border w-full p-2 rounded-md bg-slate-100 outline-none"
                required
                placeholder="Create Password"
              />
            </div>
            <div>
              <input
                type="password"
                id="pass2"
                className="border w-full  p-2 rounded-md bg-slate-100 outline-none"
                required
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="p-2 mt-2 border bg-slate-300 rounded-md w-full outline-none"
          >
            Sign Up
          </button>
          <p className="">
            Already Have Account?{" "}
            <Link to={"/profile"} className=" font-semibold">
              Log In
            </Link>
          </p>
        </Form>
      </div>
      <div className="bg-slate-700 text-center py-3 shadow-md text-gray-200 font-semibold hover:bg-slate-600  cursor-pointer">
        <LinkRoll
          to="sign-up"
          duration={500}
          smooth={true}
          offset={-80}
          activeClass="active"
        >
          Back To Top
        </LinkRoll>
      </div>
    </>
  );
}

export default Sign_Up;
