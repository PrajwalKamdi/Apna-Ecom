import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartAction } from "../../Store/CartSlice";
import Topbtn from "../Top-Btn/Topbtn";

function SingleProduct() {
  const { id } = useParams();
  const [btn, setBtn] = useState(false);
  const cartItem = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();
  const url = `https://fakestoreapi.in/api/products/${id}`;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["single", id],
    queryFn: () => {
      return axios.get(url);
    },
  });
  const notify = (message) => {
    toast(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: "success",
      className: "bg-white text-black  p-3 rounded-md",
    });
  };
  const addToCart = () => {
    dispatch(cartAction.addItemToCart(data?.data.product));
    notify("Product added successfully");
  };
  if (isError) {
    return <PageError message={error} />;
  }
   useEffect(() => {
     window.scrollTo({top:0, behavior:"auto"});
   }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen text-6xl animate-pulse">
          Loading...
        </div>
      ) : (
        <div
          className="mt-[80px] px-2 md:px-16 pb-10 grid grid-cols-1 md:grid-cols-2 md:gap-10"
          id="single"
        >
          <div className="flex p-2  shadow-md">
            <div>
              <img
                src={data?.data.product.image}
                alt="img"
                className="md:px-10"
              />
            </div>
          </div>
          <div className="border shadow-md p-5">
            <p className="bg-red-600 text-sm rounded-sm text-slate-100 w-fit px-3 py-[2px]">
              {data?.data.product.discount}% off
            </p>
            <p className="font-semibold">
              {data?.data.product.price}{" "}
              <span className="text-green-500">$</span>
            </p>
            <p className="font-semibold">{data?.data.product.title}</p>
            <div className="w-full border p-2 rounded-md">
              <label htmlFor="quantity">Quantity : </label>
              <select name="quantity" id="quantity" className="outline-none">
                <option value="quantity">1</option>
                <option value="quantity">2</option>
                <option value="quantity">3</option>
                <option value="quantity">4</option>
                <option value="quantity">5</option>
              </select>
            </div>
            <div>
              <ToastContainer />
            </div>
            <div className="my-2">
              <button
                className={`py-2 md:py-3 px-5 lg:text-lg font-semibold rounded-3xl w-full  bg-yellow-400 hover:bg-yellow-500 
              }`}
                onClick={() => {
                  addToCart();
                  setBtn(true);
                }}
                disabled={btn ? true : false}
              >
                Add To Cart
              </button>
            </div>
            <div className="my-2">
              <button
                className="py-2 md:py-3 px-5 lg:text-lg font-semibold rounded-3xl w-full  bg-orange-400 hover:bg-orange-500"
                onClick={() => {
                  addToCart();
                  setBtn(true);
                }}
                disabled={btn ? true : false}
              >
                Buy Now
              </button>
            </div>

            <p>
              <span className="font-semibold">Description : </span>
              {data?.data.product.description}
            </p>
            <p className="capitalize">
              {" "}
              <span className="font-semibold">Brand : </span>
              {data?.data.product.brand}
            </p>
            <p className="capitalize">
              {" "}
              <span className="font-semibold ">Model : </span>
              {data?.data.product.model}
            </p>
            <p className="capitalize">
              {" "}
              <span className="font-semibold ">Color : </span>
              {data?.data.product.color}
            </p>
            <p className="capitalize">
              {" "}
              <span className="font-semibold">Category : </span>
              {data?.data.product.category}
            </p>
          </div>
        </div>
      )}

      <Topbtn />
    </>
  );
}

export default SingleProduct;
