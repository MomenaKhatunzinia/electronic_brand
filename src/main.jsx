import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Update from "./Pages/Update/Update";
import AddCart from "./Pages/AddCart/AddCart.jsx";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import BrandProducts from "./Pages/BrandProducts/BrandProducts.jsx";
import Cart from "./Pages/Cart/Cart";
import Register from "./Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Route/PrivateRoute";
import ErrorPage from "./ErrorPage/ErrorPage";

// ✅ Backend base URL from .env
const API = import.meta.env.VITE_API_URL;

if (!API) {
  console.error("❌ VITE_API_URL is missing! Add it to your frontend .env file.");
}

const loaderFetch = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Response(`Failed to fetch: ${url}`, { status: res.status });
  }
  return res.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddCart />
          </PrivateRoute>
        ),
      },

      { path: "/signUp", element: <Register /> },
      { path: "/signIn", element: <Login /> },

      // ✅ Brand
      { path: "/brand/:brandName", element: <BrandProducts /> },

      // ✅ Product details
      { path: "/products/:id", element: <ProductDetails /> },

      // ✅ Cart (loader uses /products because backend has no /productsAddCart)
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: () => loaderFetch(`${API}/products`),
      },

      // ✅ Update
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) => loaderFetch(`${API}/products/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
