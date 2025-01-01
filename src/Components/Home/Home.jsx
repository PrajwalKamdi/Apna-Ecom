import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiSpinner } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { setInitialState } from "../../Store/HomeItemSlice";
import Topbtn from "../Top-Btn/Topbtn";
import SubHome from "./SubHome";
import PageError from "../Error/PageError";

function Home() {
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
  const id = "/";
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => {
      return axios.get(
        `https://fakestoreapi.in/api/products?limit=15&page=${page}`
      );
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    return <PageError message={error} />;
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
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-2 md:gap-5  pb-10">
            {data?.data.products.map((item) => (
              <Link to={`${item.id}`} key={item.id}>
                <div
                  className="p-2 border shadow-md text-sm"
                  onClick={() => {
                    dispatch(setInitialState(item.id));
                  }}
                >
                  <img src={item.image} alt={item.brand} className="" />
                  <p className="bg-red-600 text-sm rounded-sm text-slate-100 w-fit px-3 py-[2px]">
                    {item.discount}% off
                  </p>
                  <p className="font-semibold">
                    {item.price} <span className="text-green-500">$</span>
                  </p>
                  <p className="capitalize font-semibold line-clamp-1">
                    {item.brand} {item.model}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <hr className="px-20" />
      <div className="flex justify-center my-5">
        <div className="space-x-5">
          <button
            className="p-2 border shadow-md rounded-md hover:bg-gray-200 hover:border-gray-300 duration-500"
            disabled={page == 1 ? true : false}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <button
            className="p-2 border shadow-md rounded-md hover:bg-gray-200 hover:border-gray-300 duration-500"
            disabled={page == 10 ? true : false}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <Topbtn goto={id} />
    </>
  );
}
export default Home;
