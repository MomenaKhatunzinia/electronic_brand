import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
   
   const location = useLocation();
   
   const {user,loading} = useContext(AuthContext)
   if(loading)
   {
    return;
   }
    if(user)
    {
        return children;
    }
    return (
       <Navigate state={location.pathname} to={'/signIn'}></Navigate>
    );
};

export default PrivateRoute;