import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handelSignUp = (event) => {
    event.preventDefault();
    setError("");

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain a capital letter");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return setError("Password must contain a special character");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    createUser(email, password)
      .then((result) => {
        return updateProfile(result.user, { displayName: name });
      })
      .then(() => {
        swal("Success", "Account created", "success");
        navigate("/");
      })
      .catch(() => {
        setError("Registration failed");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

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
                Sign Up
              </button>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link to="/signIn" className="text-blue-500">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
