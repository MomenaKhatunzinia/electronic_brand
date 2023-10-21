import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import SignOut from "../Pages/SignOUt/SignOut";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <SignOut></SignOut>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Root;


