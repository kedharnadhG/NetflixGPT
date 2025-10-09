import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PHOTO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { LogOut, SearchIcon } from "lucide-react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    // sign out user
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // onAuthStateChanged() will be called, so no need to do anything here, ( everything is handled in onAuthStateChanged() )
        dispatch({ type: "USER_SIGNOUT" });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        //TODO: create error page
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search functionality
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    // i have to unsubscribe this listener, when this component is unmounted (because it's a good practice to avoid memory-leak)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //if user is signed-In / signUp

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse"); // since the header-page is under RouterProvider component, so we can use navigate() here it will work fine
      } else {
        // if user is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black flex-col md:flex-row">
      <img src={LOGO} alt="logo" className="w-44 mx-auto md:mx-0" />
      {user && (
        <div className="p-2 flex m-2 gap-4 items-center justify-between text-white text-sm md:text-base">
          {showGptSearch && (
            <select
              name="language"
              id="language"
              className="bg-black text-white border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:border-purple-500 transition duration-200"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option
                  className="bg-black text-white"
                  key={language.identifier}
                  value={language.identifier}
                >
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="flex items-center p-2 px-4 mx-2 bg-purple-700 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch && <SearchIcon className="mr-2" size={20} />}
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          <img
            className="w-12 h-12 hidden md:block cursor-pointer rounded-xl"
            alt="netflix-userIcon"
            src={user.photoURL || PHOTO_URL}
          />
          <div className="relative group">
            <LogOut
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
              size={30}
              onClick={handleSignOut}
            />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Logout
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
