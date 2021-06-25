import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import FirebaseContext from "../context/firebase";
import { useSiteTitle } from "../hooks/useSiteTitle";
import { doesUserNameExist } from "../services/firebase";

const SignUp = () => {
  useSiteTitle("Sign Up");
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [error, setError] = useState("");

  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const invalid =
    email === "" || password === "" || userName === "" || fullName === "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const doesExistUser = await doesUserNameExist(userName);

    if (doesExistUser) {
      setError("User name allredy exist");
      return;
    }

    try {
      const createdUserResult = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await createdUserResult.user.updateProfile({
        displayName: userName,
      });

      // stexcum enq user data users collectioni hamar
      await firebase.firestore().collection("users").add({
        userId: createdUserResult.user.uid,
        username: userName,
        fullName,
        emailAddress: email.toLowerCase(),
        following: [],
        followers: [],
        dateCreated: Date.now(),
      });

      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      setError(err.message);
    }
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
            <input
              aria-label="Enter your user name"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              placeholder="User name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <input
              aria-label="Enter your full name"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
            <input
              aria-label="Enter your email address"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              aria-label="Enter your password"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {error && <p className="text-red-500 text-center my-3">{error}</p>}
            <button
              disabled={invalid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
                invalid ? " opacity-50" : ""
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">
            Have an account?{" "}
            <Link to={ROUTES.LOGIN} className="font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
