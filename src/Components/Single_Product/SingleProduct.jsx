import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/CartSlice";

function SingleProduct() {
  const value = useSelector((store)=>store.HomeItemSlice);
  const [singleProduct, setSingleProduct] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const cartItem = useSelector((store)=>store.cartSlice)
  const dispatch = useDispatch()
  async function getSingleProduct() {
    const f1 = await fetch(`https://fakestoreapi.in/api/products/${value}`);
    const f2 = await f1.json();
    setSingleProduct(f2.product);
  }
  const addToCart = ()=>{
    dispatch(cartAction.addItemToCart(singleProduct))
    setIsSuccess("Product Added Successfully !")
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  }
  useEffect(() => {
    getSingleProduct();
  }, []); 
  return (
    <div className="mt-[90px] px-2 md:px-16 pb-10 grid grid-cols-1 md:grid-cols-2 md:gap-10">
      <div className="flex p-2  shadow-md">
        <div>
          <img src={singleProduct.image} alt="" className="" />
        </div>
      </div>
      <div className="border shadow-md p-5">
        <p className="bg-red-600 text-sm rounded-sm text-slate-100 w-fit px-3 py-[2px]">
          {singleProduct.discount}% off
        </p>
        <p className="font-semibold">
          {singleProduct.price}{" "}
          <span className="text-green-500">$</span>
        </p>
        <p className="font-semibold">{singleProduct.title}</p>
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
          {isSuccess? <div className="border bg-green-500 py-2 w-full rounded-md px-2 my-2">{isSuccess}</div> : null}
        </div>
        <div className="my-2">
          <button className="py-2 md:py-3 px-5 lg:text-lg font-semibold rounded-3xl w-full  bg-yellow-400 hover:bg-yellow-500"
          onClick={addToCart}>Add To Cart</button>
        </div>
        <div className="my-2">
          <button className="py-2 md:py-3 px-5 lg:text-lg font-semibold rounded-3xl w-full  bg-orange-400 hover:bg-orange-500"
           onClick={addToCart}>Buy Now</button>
        </div>
       
        <p>
          <span className="font-semibold">Description : </span>
          {singleProduct.description}
        </p>
        <p className="capitalize">
          {" "}
          <span className="font-semibold">Brand : </span>
          {singleProduct.brand}
        </p>
        <p className="capitalize">
          {" "}
          <span className="font-semibold ">Model : </span>
          {singleProduct.model}
        </p>
        <p className="capitalize">
          {" "}
          <span className="font-semibold ">Color : </span>
          {singleProduct.color}
        </p>
        <p className="capitalize">
          {" "}
          <span className="font-semibold">Category : </span>
          {singleProduct.category}
        </p>
       
      </div>
    </div>
  );
}

export default SingleProduct;
