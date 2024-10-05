import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/CartSlice";
import { MdDelete } from "react-icons/md";
function Cart() {
  const value = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();
  return (
    <div className="mt-[80px] gap-5 lg:px-16 px-5">
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
                }}
              >
                Delete <MdDelete />
              </button>
            </div>
          </div>
        ))}
        <div className="border text-[10px] md:text-[15px] my-10 p-5">
          <p>Total : 1000$</p>
          <p>Discount : 10$</p>
          <p>Total : 990$</p>
          <button className="bg-yellow-400  p-1 md:p-2 rounded-sm">
            Place Order{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
