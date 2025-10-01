import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PHOTO_URL, SIGN_OUT_ICON } from "../utils/constants";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const handleSignOut = () => { 
    // sign out user
     signOut(auth)
      .then(() => {
        // Sign-out successful.    
        // onAuthStateChanged() will be called, so no need to do anything here, ( everything is handled in onAuthStateChanged() )
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  }

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
    return () =>  unsubscribe();
    
    
   }, []);
  
  return (
    <div className="absolute z-10 flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black">
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />
      { user && (
        <div className="p-2 flex m-2 gap-4 items-center justify-between text-white text-sm md:text-base">
          {/* <img alt="netflix-userIcon" src="https://i.imgur.com/dk4Wyhp.png" /> */}
          <img
            className="w-12 h-12 cursor-pointer rounded-xl"
            alt="netflix-userIcon"
            src={
              user.photoURL ||
              PHOTO_URL
            }
          />
          <img
            className="w-6 h-6 cursor-pointer hover:"
            alt="signOut-icon"
            src={SIGN_OUT_ICON}
            onClick={handleSignOut}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
