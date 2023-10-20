import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCart from './Pages/AddCart/AddCart.jsx';
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home';
import ProductShow from './Pages/ProductShow/ProductShow';


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
      element: <AddCart></AddCart>,
    },
    {
      path:"/brands/:name",
      element:<ProductShow></ProductShow>,
      loader:( ) =>fetch('http://localhost:5000/products')

    }
  ]
  },
  
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
