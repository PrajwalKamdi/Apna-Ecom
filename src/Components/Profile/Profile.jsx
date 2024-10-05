import React from "react";
import { Form } from "react-router-dom";

function Profile() {
  return (
    <div className="mt-[80px] md:px-16 md:line-clamp-none line-clamp-6 px-3 mb-5">
      <Form action={"/"} className=" my-10 p-5 border mx-auto lg:w-1/2 space-y-2 bg-blue-200">
       
          <label htmlFor="name">Name / Email </label>
          <input type="text" id="name" className="border border-blue-300 rounded-md p-2 w-full capitalize" placeholder="your name or email"/>
          <label htmlFor="name">Number </label>
          <input type="text" id="name" className="border border-blue-300 rounded-md p-2 w-full" placeholder="Mobile Number"/>
          <label htmlFor="name">Password </label>
          <input type="password" id="name" className="border border-blue-300 rounded-md p-2 w-full" placeholder="Create Password"/>
          <button type="submit" className="border border-black p-2 rounded-md">Submit</button>
       
      </Form>
    </div>
  );
}

export default Profile;
