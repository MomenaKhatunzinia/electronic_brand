import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/cart">My Cart</NavLink>
      </li>

      {/* ✅ prevent flicker while loading */}
      {!loading && (
        user ? (
          <>
            <li>
              <NavLink to="/addProduct">Add Product</NavLink>
            </li>
            <li>
              <button
                type="button"
                onClick={logOut}
                className="btn btn-ghost"
              >
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/signIn">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/signUp">Register</NavLink>
            </li>
          </>
        )
      )}
    </>
  );

  return (
    <div className="mb-11 p-6">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <div className="flex">
            <img
              className="w-[100px] h-[60px] rounded-2xl hidden lg:block"
              src="https://i.ibb.co/HNvk3b0/altumcode-Ui3z-Mjp-Mrm-M-unsplash.jpg"
              alt=""
            />
            <a className="btn btn-ghost normal-case text-3xl">
              Electronics Shop
            </a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end hidden lg:flex pr-2">
          {!loading && user?.email && (
            <span className="text-sm opacity-70">{user.email}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
