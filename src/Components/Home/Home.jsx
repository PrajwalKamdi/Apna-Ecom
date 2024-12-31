import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { PiSpinner } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { setInitialState } from "../../Store/HomeItemSlice";
import Topbtn from "../Top-Btn/Topbtn";
import SubHome from "./SubHome";

function Home() {
  const id ="/";
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return axios.get("https://fakestoreapi.in/api/products?limit=15");
    },
    enabled:true
  });
  if (isError) {
    <div>
      <p>{error.message}</p>
      <p>Please try again later!</p>
    </div>;
  }

  return (
    <>
      <div className="mt-[80px] md:px-16 px-3" id="/">
        <SubHome />
        <h1 className="py-5 text-xl md:text-2xl lg:text-3xl text-center font-semibold font-sans uppercase ">
          ---Latest Collection---
        </h1>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <p className="text-2xl">Loading</p>
            <PiSpinner size={50} className="animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:text-xl md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5 pb-10">
            {data?.data.products.map((item) => (
              <NavLink
                to={`${item.id}`}
                onClick={() => {
                  dispatch(setInitialState(item.id));
                }}
                key={item.id}
              >
                <div
                  className="p-2 border text-[11px] md:text-[15px]  shadow-md"
                  key={item.id}
                >
                  <img src={item.image} alt="" className="bg-cover" />
                  <p className="bg-red-600 text-sm rounded-sm text-slate-100 w-fit px-3 py-[2px]">
                    {item.discount}% off
                  </p>

                  <p className="font-semibold">
                    {item.price}
                    <span className="text-green-500">$</span>
                  </p>
                  <p className="capitalize font-semibold line-clamp-1">
                    {item.brand} {item.model}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </div>
     <Topbtn goto={id}/>
    </>
  );
}

export default Home;
