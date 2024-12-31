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
import Cart from "./Components/Cart/Cart.jsx";
import AllCollection from "./Components/Collection/AllCollection.jsx";
import Home from "./Components/Home/Home.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Sign_Up from "./Components/Profile/Sign_Up.jsx";
import SingleProduct from "./Components/Single_Product/SingleProduct.jsx";
import "./index.css";
import store from "./Store/Store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<SingleProduct />} />
      <Route path="/collection" element={<AllCollection />} />
      <Route path="/collection/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/profile/sign up" element={<Sign_Up />} />
    </Route>
  )
);
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </StrictMode>
);
