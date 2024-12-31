import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/CartSlice";
import Topbtn from "../Top-Btn/Topbtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import shopping from "/src/assets/shopping.png";
export function Cart() {
  const cart = "cart";
  const value = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();
  const priceArray = [];
  const no = value.length;
  value.forEach((item) => priceArray.push(item.price));
  const sum = priceArray.reduce((pre, cur) => pre + cur, 0);
  const notify = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 3000,
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
  if (no == 0) {
    return (
      <div className="text-center py-10 mt-10">
        <img src={shopping} alt="Empty Cart" className="mx-auto mb-4" />
        <h2 className="text-xl font-semibold">Your Cart is Empty</h2>
        <p className="text-gray-500">
          Add items to your cart to see them here.
        </p>
      </div>
    );
  }
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
            >
              <img
                src={item.image}
                alt="itemImage"
                className="h-[80px] md:h-[150px] mx-auto"
              />
              <div>
                <p className="font-semibold">Price : {item.price}</p>
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
                  }}
                >
                  Delete <MdDelete />
                </button>
              </div>
            </div>
          ))}

          <div className="border text-[10px] md:text-[15px] my-10 p-5">
            <p className="">
              Total : {sum}
              <span className="text-green-600">$</span>
            </p>
            <p>Delivery Fee : 1$</p>
            <p>
              Total : {sum + 1}
              <span className="text-green-600">$</span>
            </p>
            <button
              className="bg-yellow-400  p-1 md:p-2 rounded-sm"
              onClick={() => {
                notify(
                  `Order Placed Successfully! for ${no} ${
                    no == 1 ? "item" : "items"
                  }`
                );
              }}
            >
              Place Order{" "}
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Topbtn goto={cart} />
    </>
  );
}

export default Cart;
