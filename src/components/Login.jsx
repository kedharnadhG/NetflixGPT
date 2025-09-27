import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form Data

    if (isSignInForm) {
      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;

      // proceed for signIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;

      // proceed for signUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        userName.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user", user);
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="logo"
          className="min-h-screen w-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute z-50 bg-black/75 p-12 text-white my-36 rounded-lg mx-auto right-0 left-0 "
      >
        <h1 className="text-3xl font-bold py-4">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Enter your name"
            className="p-2 my-2 bg-gray-700 rounded-md text-white w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your Email"
          className="p-2 my-3 bg-gray-700 rounded-md text-white w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-gray-700 rounded-md text-white w-full"
        />

        <p className="text-red-500 font-bold py-2">
          {" "}
          {errorMessage !== null && errorMessage}
        </p>

        <button
          className="p-3 my-8 bg-red-700 rounded-md w-full cursor-pointer"
          onClick={handleButtonClick}
        >
          Sign {isSignInForm ? "In" : "Up"}
        </button>
        <p className="py-3 text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
