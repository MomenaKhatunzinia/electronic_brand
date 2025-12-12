import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignOut = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSignout = () => {
    logout()
      .then(() => {
        // optional: console.log("Logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mb-6">
      {user ? (
        <div className="flex justify-end items-center gap-3">
          {/* Profile Image */}
          <img
            src={user?.photoURL || "https://i.ibb.co/2kR2z5B/user.png"}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://i.ibb.co/2kR2z5B/user.png";
            }}
          />

          {/* Name + Signout */}
          <div className="flex flex-col text-right">
            <p className="font-medium max-w-[160px] whitespace-nowrap overflow-hidden text-ellipsis">
              {user?.displayName || "User"}
            </p>

            <button
              onClick={handleSignout}
              className="text-pink-600 hover:underline text-sm"
            >
              Signout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-end">
          <Link to="/signIn">
            <button className="btn bg-sky-200">Sign In</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SignOut;
