import React, { useEffect, useState } from "react";
import { PiSpinner } from "react-icons/pi";
import { Link } from "react-router-dom";
import { setInitialState } from "../../Store/HomeItemSlice";
import { useDispatch } from "react-redux";
import { Link as LinkRoll } from "react-scroll";
function AllCollection() {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  async function Category() {
    const f1 = await fetch(`https://fakestoreapi.in/api/products${value}`);
    setLoading(true);
    const f2 = await f1.json();
    setAllProduct(f2.products);
  }
  const handleForAll = () => {
    setValue("");
  };
  const handleForTV = () => {
    setValue("/category?type=tv");
  };
  const handleForAudio = () => {
    setValue("/category?type=audio");
  };
  const handleForLaptop = () => {
    setValue("/category?type=laptop");
  };
  const handleForAppliances = () => {
    setValue("/category?type=appliances");
  };
  const handleForGaming = () => {
    setValue("/category?type=gaming");
  };
  const handleForMobile = () => {
    setValue("/category?type=mobile");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    Category();
  }, [
    handleForAll,
    handleForAppliances,
    handleForAudio,
    handleForGaming,
    handleForLaptop,
    handleForMobile,
    handleForTV,
  ]);

  return (
    <>
      <div className="mt-[80px] md:flex px-5 md:px-16" id="all">
        <div className="w-full lg:max-w-fit">
          <div className="text-2xl  ">Filters</div>
          <div className="px-5 py-3 border">
            <div className="text-xl pb-2">Categories</div>
            <div className="space-x-2">
              <input type="radio" id="all" name="cat" onClick={handleForAll} />
              <label htmlFor="all">All</label>
            </div>
            <div className="space-x-2">
              <input type="radio" id="tv" name="cat" onClick={handleForTV} />
              <label htmlFor="tv">TV</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="aud"
                name="cat"
                onClick={handleForAudio}
              />
              <label htmlFor="aud">Audio</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="lap"
                name="cat"
                onClick={handleForLaptop}
              />
              <label htmlFor="lap">Laptop</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="mob"
                name="cat"
                onClick={handleForMobile}
              />
              <label htmlFor="mob">Mobile</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="gaming"
                name="cat"
                onClick={handleForGaming}
              />
              <label htmlFor="gaming">Gaming</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="app"
                name="cat"
                onClick={handleForAppliances}
              />
              <label htmlFor="app">Appliances</label>
            </div>
          </div>
        </div>

        <div className="md:pl-5">
          <h1 className="text-2xl  ">All Collection</h1>
          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5  pb-10">
              {allProduct.map((item) => (
                <Link to={`${item.id}`} key={item.id}>
                  <div
                    className="p-2 border shadow-md text-sm"
                    onClick={() => {
                      dispatch(setInitialState(item.id));
                    }}
                  >
                    <img src={item.image} alt="" className="" />
                    <p className="bg-red-600 text-sm rounded-sm text-slate-100 w-fit px-3 py-[2px]">
                      {item.discount}% off
                    </p>
                    <p className="font-semibold">
                      {item.price} <span className="text-green-500">$</span>
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
            <div className="flex items-center justify-center h-[20vh]">
              <p className="text-2xl">Loading</p>
              <PiSpinner size={50} className="animate-spin" />
            </div>
          )}
        </div>
      </div>
      <div className="bg-slate-700 text-center py-3 shadow-md text-gray-200 font-semibold hover:bg-slate-600  cursor-pointer">
        <LinkRoll
          to="all"
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

export default AllCollection;
