import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SignOut = () => {

    const {user,logout} = useContext(AuthContext);
    const handleSignout = ()=>
    {
      logout()
      .then()
      .catch()
    }
    return (
        <div className="">
            <div >
 {
      user? 
     <div className="flex justify-end 
     gap-2 mb-6" >
 
 <img
 className="w-[24px] rounded-lg"
 src={user.photoURL} alt={user.displayName}></img>
 <h1>{user.displayName}</h1>
 <button className="brn underline text-pink-700" onClick={handleSignout}>Signout</button>

      </div>

      : 
  <div className="flex justify-end mb-6">
        <Link to={'/login'}>
     <button className="btn bg-sky-200 "> Login</button>
      </Link>
    </div>
    }

 </div>
        </div>
    );
};

export default SignOut;