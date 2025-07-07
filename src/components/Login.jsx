import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

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
      <form className="w-3/12 absolute z-50 bg-black/75 p-12 text-white my-36 rounded-lg mx-auto right-0 left-0 ">
        <h1 className="text-3xl font-bold py-4">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 my-2 bg-gray-700 rounded-md text-white w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-2 my-3 bg-gray-700 rounded-md text-white w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-gray-700 rounded-md text-white w-full"
        />

        <button className="p-3 my-8 bg-red-600 rounded-md w-full">
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
