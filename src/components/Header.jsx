import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  
  const user = useSelector(store => store.user);

  const handleSignOut = () => { 
    // sign out user
     signOut(auth)
      .then(() => {
        // Sign-out successful.     
        navigate("/");       // dispath-action will happen automatically because we have used "onAuthStateChanged" API (in App.jsx) which listens to auth-state change
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  
  return (
    <div className="absolute z-10 flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }
          />
          <img
            className="w-6 h-6 cursor-pointer"
            alt="signOut-icon"
            src={"https://cdn-icons-png.flaticon.com/512/1828/1828479.png"}
            onClick={handleSignOut}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
