import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    if (isSignInForm) {
      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;

      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // console.log("user", userCredential.user);
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          // console.log(error);
          setErrorMessage(error.message);
        });
    } else {
      const message = checkValidData(
        email.current.value,
        password.current.value,
        userName.current.value
      );
      setErrorMessage(message);
      if (message) return;

      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // console.log("user", userCredential.user);
          const user = userCredential.user;  // it doesn't have displayName & photoURL yet

          // update user profile (displayName, photoURL)
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/67498592?v=4",
          })
            .then(() => {
              // update the store also again, since we are updating the profile after creating user, but by the time onAuthStateChanged() is called (in Body.jsx), the profile is not updated yet, so we have to update the store also again here
              const {uid, email, displayName, photoURL} = auth.currentUser;   // getting the details from updated currentUser
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });


        })
        .catch((error) => {
          setErrorMessage( error.code + "-" + error.message);
        });
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="logo"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Login Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-50 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 bg-black/70 p-8 md:p-12 text-white rounded-lg mx-auto left-0 right-0 top-1/2 transform -translate-y-1/2"
      >
        <h1 className="text-2xl md:text-3xl font-bold py-4 text-center">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Enter your name"
            className="p-3 my-2 bg-gray-700 rounded-md text-white w-full text-sm md:text-base"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your Email"
          className="p-3 my-2 bg-gray-700 rounded-md text-white w-full text-sm md:text-base"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 bg-gray-700 rounded-md text-white w-full text-sm md:text-base"
        />

        <p className="text-red-500 font-medium py-2">
          {errorMessage && errorMessage}
        </p>

        <button
          className="p-3 my-6 bg-red-600 hover:bg-red-700 rounded-md w-full text-sm md:text-base"
          onClick={handleButtonClick}
        >
          Sign {isSignInForm ? "In" : "Up"}
        </button>

        <p
          className="py-3 text-center text-sm md:text-base cursor-pointer flex justify-center"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? (
            <>
              New to Netflix?
              <span className="font-bold ml-1">Sign up now.</span>
            </>
          ) : (
            <>
              Already registered?
              <span className="font-bold ml-1">Sign in now.</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
