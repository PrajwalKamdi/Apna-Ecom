import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/CartSlice";

function Cart() {
  const value = useSelector((store) => store.cartSlice);
  const dispatch =useDispatch();
  return (
    <div className="mt-[80px] gap-5 lg:px-16 px-5">
      <div className="">
        {value.map((item) => (
          <>
            <div className="md:flex border items-center gap-5 p-5 mb-10">
              <img src={item.image} alt="" className="h-[200px]" />
              <div>
                <p>
                  <span className="font-semibold">Price : </span>
                  {item.price}
                  <span className="text-green-500     ">$</span>
                </p>
                <p>
                  <span className="font-semibold">Model : </span>
                  {item.title}
                </p>
                <p>
                  <span className="font-semibold">Description : </span>
                  {item.description}
                </p>
                <div>
                  <button className="p-2 bg-red-600 font-semibold rounded-sm" onClick={()=>{
                    dispatch(cartAction.removeFromCart(item))
                  }}>Remove From Cart</button>
                </div>
              </div>
            </div>
          </>
        ))}
        <div className="border my-10 p-5">
        <p>Total : 1000$</p>
        <p>Discount : 10$</p>
        <p>Total : 990$</p>
        <button className="bg-yellow-400 p-2 rounded-md">Place Order </button>
      </div>
      </div>
    </div>
  );
}

export default Cart;
