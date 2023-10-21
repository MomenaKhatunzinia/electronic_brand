import React from 'react'
import ReactDOM from 'react-dom/client'
import Update from './Pages/Update/Update'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCart from './Pages/AddCart/AddCart.jsx';
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home';
import ProductShow from './Pages/ProductShow/ProductShow';
import Details from './Pages/Details/Details';
import Cart from './Pages/Cart/Cart';
import Register from './Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './Route/PrivateRoute';
import SignOut from './Pages/SignOUt/SignOut';


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App></App>,
  //   // loader:( ) =>fetch('http://localhost:5000/products')
  // },
  {
    path: "/",
    element: <Root></Root>,
   
    // loader:( ) =>fetch('http://localhost:5000/products')
  children:[{
    path: "/",
    element: <Home></Home>,
  },
    {
      path: "/addProduct",
      element: <PrivateRoute>
        <AddCart></AddCart>
      </PrivateRoute>,
    },
    {
      path:"/signUp",
      element:<Register></Register>

    },
    {
      path:"/signOut",
      element:<SignOut></SignOut>

    },
    {
      path:"/signIn",
      element:<Login></Login>

    },
    {
      path:"/brands/:name",
      element:<ProductShow></ProductShow>,
      loader:( ) =>fetch('http://localhost:5000/products')

    },
    {
      path:"/detail/:_id",
      element:<Details></Details>,
      loader:( ) =>fetch('http://localhost:5000/products')

    },
    {
      path:"/Cart",
      element:<Cart></Cart>,
      loader:( ) =>fetch('http://localhost:5000/productsAddCart')

    },
    {
      path:"/update/:_id",
      element:<Update></Update>,
      loader:({params} ) =>fetch(`http://localhost:5000/products/${params._id}`)

    }
  ]
  },
  
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
