import React, { useEffect, useState } from "react";
import SubHome from "./SubHome";
import { PiSpinner } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInitialState } from "../../Store/HomeItemSlice";
import { Link as LinkRoll } from "react-scroll";

function Home() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  async function fetchingProduct() {
    const f1 = await fetch("https://fakestoreapi.in/api/products?limit=20");
    setLoading(true);
    const f2 = await f1.json();
    setProduct(f2.products);
  }
  useEffect(() => {
    fetchingProduct();
  }, []);

  return (
    <>
      <div className="mt-[80px] md:px-16 px-3" id="/">
        <SubHome />
        <h1 className="py-5 text-xl md:text-2xl lg:text-3xl text-center font-semibold font-sans uppercase ">
          ---Latest Collection---
        </h1>
        {loading ? (
          <div className="grid grid-cols-2 md:text-xl md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5 pb-10">
            {product.map((item) => (
              <Link
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
                  {/* <p>{item.category}</p> */}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-2xl">Loading</p>
            <PiSpinner size={50} className="animate-spin" />
          </div>
        )}
      </div>
      <div className="bg-slate-700 text-center py-3 shadow-md text-gray-200 font-semibold hover:bg-slate-600  cursor-pointer">
        <LinkRoll to="/" duration={500} smooth={true} offset={-80} activeClass="active">
          Back To Top
        </LinkRoll>
      </div>
    </>
  );
}

export default Home;
