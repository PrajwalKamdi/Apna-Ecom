import React from "react";
import { Form, Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
function Profile() {
  return (
    <>
    <div className="mt-[80px] md:px-16  px-3 md:w-[50%] mx-auto " id="profile">
      <Form action={"/"} className="my-10  border p-5 space-y-3  rounded-md bg-neon-100 ">
      <h1 className="text-center text-xl">Log In</h1>
      <hr />
        <label htmlFor="name" className="mt-2">Username</label>
        <input type="text" id="name" className="border w-full p-2 rounded-md bg-slate-100 outline-none " required/>
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" className="border w-full p-2 rounded-md bg-slate-100 outline-none" required/>
        <button type="submit" className="p-2 mt-2 border bg-slate-300 rounded-md w-full outline-none">Login </button>
        <p className="">Dont have Account? <Link to={"/profile/sign up"} className=" font-semibold">Sign Up</Link></p>
      </Form>
    
    </div>
    <div className="bg-slate-700 text-center py-3 shadow-md text-gray-200 font-semibold hover:bg-slate-600  cursor-pointer">
        <LinkRoll
          to="profile"
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

export default Profile;
