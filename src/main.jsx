import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import AllCollection from "./Components/Collection/AllCollection.jsx";
import Home from "./Components/Home/Home.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Profile from "./Components/Profile/Profile.jsx";

import "./index.css";
import store from "./Store/Store.js";
import SubHome from "./Components/Home/SubHome.jsx";
import SingleProduct from "./Components/Single_Product/SingleProduct.jsx";
import Sign_Up from "./Components/Profile/Sign_Up.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<AllCollection />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/profile/sign up" element={<Sign_Up />} />

      <Route path="/collection/:id" element={<SingleProduct />} />
      <Route path="/:id" element={<SingleProduct />} />
      


    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
