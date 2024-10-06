import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/CartSlice";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { Link as LinkRoll } from "react-scroll";
function Cart() {
  const value = useSelector((store) => store.cartSlice);
  const [price, setPrice] = useState([]);
  const dispatch = useDispatch();
  let ok = 0;
  return (
    <>
      <div className="mt-[80px] gap-5 lg:px-16 px-5" id="cart">
        <h1 className="uppercase py-2 text-xl font-semibold">
          Your <span className="text-slate-500">Cart___</span>
        </h1>
        <div className="">
          {value.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 border text-[8px] md:text-[15px] items-center p-2 md:gap-5 md:p-5 mb-10"
              onLoad={() => {
                setPrice(item.price);
              }}
            >
              <img
                src={item.image}
                alt=""
                className="h-[80px] md:h-[150px] mx-auto"
              />
              <div>
                <p>
                  <span className="font-semibold">Price : </span>
                  {item.price}
                  <span className="text-green-500     ">$</span>
                </p>
                <p className="capitalize">
                  <span className="font-semibold ">Brand : </span>
                  {item.brand}
                </p>
                <p>
                  <span className="font-semibold">Model : </span>
                  {item.title}
                </p>
              </div>
              <div className="mx-auto">
                <button
                  className="p-[2px] md:p-2 border bg-slate-200 font-semibold rounded-sm flex items-center space-x-3"
                  onClick={() => {
                    dispatch(cartAction.removeFromCart(item));
                    setPrice(price - item.price);
                  }}
                >
                  Delete <MdDelete />
                </button>
              </div>
            </div>
          ))}

          <div className="border text-[10px] md:text-[15px] my-10 p-5">
            <p className="">
              Total : {price}
              <span className="text-green-600">$</span>
            </p>
            <p>Delivery Fee : 10$</p>
            <p>
              Total : {price + 10}
              <span className="text-green-600">$</span>
            </p>
            <button
              className="bg-yellow-400  p-1 md:p-2 rounded-sm"
              onClick={() => {
                alert("Order Placed Successfully!");
              }}
            >
              Place Order{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 text-center py-3 shadow-md text-gray-200 font-semibold hover:bg-slate-600  cursor-pointer">
        <LinkRoll
          to="cart"
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

export default Cart;
