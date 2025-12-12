import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Update from "./Pages/Update/Update";
import AddCart from "./Pages/AddCart/AddCart.jsx";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home/Home";
import ProductShow from "./Pages/ProductShow/ProductShow";
import Details from "./Pages/Details/Details";
import Cart from "./Pages/Cart/Cart";
import Register from "./Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Route/PrivateRoute";
import SignOut from "./Pages/SignOUt/SignOut";
import ErrorPage from "./ErrorPage/ErrorPage";

// ✅ Backend base URL from .env
const API = import.meta.env.VITE_API_URL;

// ✅ helper: throws error if API not set
if (!API) {
  console.error("❌ VITE_API_URL is missing! Add it to your frontend .env file.");
}

// ✅ helper: loader fetch with basic error handling
const loaderFetch = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Response(`Failed to fetch: ${url}`, { status: res.status });
  }
  return res;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddCart />
          </PrivateRoute>
        ),
      },

      {
        path: "/signUp",
        element: <Register />,
      },

      {
        path: "/signOut",
        element: <SignOut />,
      },

      {
        path: "/signIn",
        element: <Login />,
      },

      // ✅ Brand page loads all products (filter inside ProductShow)
      {
        path: "/brands/:name",
        element: <ProductShow />,
        loader: () => loaderFetch(`${API}/products`),
      },

      // ✅ Details page: better to fetch single product by id (requires backend route)
      // If your backend doesn't have /products/:id yet, tell me and I'll give that code.
      {
        path: "/detail/:_id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) => loaderFetch(`${API}/products/${params._id}`),
      },

      // ✅ Cart page
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: () => loaderFetch(`${API}/productsAddCart`),
      },

      // ✅ Update page
      {
        path: "/update/:_id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) => loaderFetch(`${API}/products/${params._id}`),
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
