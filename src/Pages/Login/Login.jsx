import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { SignIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelSignIn = (e) => {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    SignIn(email, password)
      .then(() => {
        swal("Success", "Login successful", "success");
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError("Invalid email or password");
        swal("Error", "Login failed", "error");
      });
  };

  const handelGoogle = () => {
    googleSignIn()
      .then(() => {
        swal("Success", "Google login successful", "success");
        navigate(from, { replace: true });
      })
      .catch(() => {
        swal("Error", "Google login failed", "error");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-sky-200 text-black">
                Sign In
              </button>
            </div>

            <button
              type="button"
              onClick={handelGoogle}
              className="btn btn-outline flex items-center gap-2 mt-2"
            >
              <FcGoogle /> Google
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <p className="text-center mt-4">
              New here?{" "}
              <Link to="/signUp" className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
