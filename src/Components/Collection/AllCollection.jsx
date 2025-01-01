import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { PiSpinner } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setInitialState } from "../../Store/HomeItemSlice";
import Topbtn from "../Top-Btn/Topbtn";
import PageError from "../Error/PageError";
function AllCollection() {
  const [value, setValue] = useState("");
  const [para, setPara] = useState("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", value, para],
    queryFn: () => {
      return axios.get(`https://fakestoreapi.in/api/products${value}${para}`);
    },
    placeholderData: keepPreviousData,
  });
  const dispatch = useDispatch();
  if (isError) {
    return <PageError message={error} />;
  }
  return (
    <>
      <div className="mt-[80px] md:flex px-5 md:px-16" id="all">
        <div className="w-full lg:max-w-fit ">
          <div className="text-2xl  ">Filters</div>
          <div className="px-5 py-3 border">
            <div className="text-xl pb-2">Categories</div>
            <div className="space-x-2">
              <input
                type="radio"
                id="all"
                name="cat"
                onClick={() => setValue(`?limit=150`)}
              />
              <label htmlFor="all">All</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="tv"
                name="cat"
                onClick={() => setValue("/category?type=tv")}
              />
              <label htmlFor="tv">TV</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="aud"
                name="cat"
                onClick={() => setValue("/category?type=audio")}
              />
              <label htmlFor="aud">Audio</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="lap"
                name="cat"
                onClick={() => setValue("/category?type=laptop")}
              />
              <label htmlFor="lap">Laptop</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="mob"
                name="cat"
                onClick={() => setValue("/category?type=mobile")}
              />
              <label htmlFor="mob">Mobile</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="gaming"
                name="cat"
                onClick={() => setValue("/category?type=gaming")}
              />
              <label htmlFor="gaming">Gaming</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="app"
                name="cat"
                onClick={() => setValue("/category?type=appliances")}
              />
              <label htmlFor="app">Appliances</label>
            </div>
          </div>

          <div className="border px-5 py-2 my-3">
            <h3 className="text-2xl pb-2">Sort By</h3>
            <div className="flex flex-col">
              <div className="space-x-2">
                <input
                  type="radio"
                  className="p-2 border shadow-md rounded-md hover:bg-gray-200 hover:border-gray-300 duration-500"
                  id="asc"
                  name="sort"
                  onClick={() => setPara("&sort=asc")}
                />
                <label htmlFor="asc">Asc</label>
              </div>
              <div className="space-x-2">
                <input
                  type="radio"
                  className="p-2 border shadow-md rounded-md hover:bg-gray-200 hover:border-gray-300 duration-500"
                  id="desc"
                  name="sort"
                  onClick={() => setPara("&sort=desc")}
                />
                <label htmlFor="desc">Desc</label>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pl-5">
          <h1 className="text-2xl  ">All Collection</h1>

          {isLoading ? (
            <div className="flex items-center justify-center h-[20vh]">
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
      </div>

      <Topbtn />
    </>
  );
}

export default AllCollection;
