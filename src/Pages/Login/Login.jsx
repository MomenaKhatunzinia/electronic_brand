import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { SignIn, googleSignIn } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setBtnLoading(true);

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      await SignIn(email, password);
      swal("Success", "Login successful", "success");
      navigate(from, { replace: true });
    } catch (err) {
      const msg =
        err?.code === "auth/invalid-credential"
          ? "Invalid email or password"
          : err?.message || "Login failed";
      setError(msg);
      swal("Error", msg, "error");
    } finally {
      setBtnLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    setBtnLoading(true);

    try {
      // AuthProvider should call popup first then redirect fallback
      await googleSignIn();
      // If popup works, you'll reach here and navigate.
      // If redirect fallback triggers, the page will redirect and onAuthStateChanged will set user.
      swal("Success", "Google sign-in started", "success");
      navigate(from, { replace: true });
    } catch (err) {
      const msg =
        err?.code === "auth/unauthorized-domain"
          ? "This domain is not authorized in Firebase. Add your Vercel domain in Firebase Auth → Settings → Authorized domains."
          : err?.code === "auth/popup-closed-by-user"
          ? "Popup closed. Please try again."
          : err?.message || "Google sign-in failed";
      setError(msg);
      swal("Error", msg, "error");
    } finally {
      setBtnLoading(false);
    }
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
                disabled={btnLoading}
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
                disabled={btnLoading}
              />
            </div>

            <div className="form-control mt-6">
              <button
                className="btn btn-primary bg-sky-200 text-black"
                disabled={btnLoading}
              >
                {btnLoading ? "Signing in..." : "Sign In"}
              </button>
            </div>

            <button
              type="button"
              onClick={handleGoogle}
              className="btn btn-outline mt-2 flex items-center justify-center gap-2"
              disabled={btnLoading}
            >
              <FcGoogle />
              Continue with Google
            </button>

            <p className="text-center mt-4">
              New here?{" "}
              <Link to="/signUp" className="text-blue-500">
                Sign Up
              </Link>
            </p>

            {error && (
              <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
