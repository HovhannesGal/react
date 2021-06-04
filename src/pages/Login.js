import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
const Login = () => {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (email === "") {
      setError("Email must not be empty");
      return;
    }
    if (/\S+@\S+\.\S+/.test(email) === false) {
      setError("Invalid email");
      return;
    }
    if (password === "") {
      setError("Password must not be empty");
      return;
    }
    setError("");
  }, [email, password]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowError(true);
    console.log({ password, email });
  };
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Instagram app"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          <form onSubmit={handleSubmit}>
            {/* 1. validate email field */}
            {/* 2. if in-valid show error message */}
            <input
              aria-label="Enter your email address"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {/* show error message if email in-valid */}
            <input
              aria-label="Enter your password"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {showError && error !== "" && (
              <p className="text-red-500 text-center my-3">{error}</p>
            )}
            <button
              disabled={showError && error}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to={ROUTES.SIGN_UP} className="font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;