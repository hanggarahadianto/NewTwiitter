import React from "react";
import {
  HouseFill,
  Hash,
  BellFill,
  BookmarksFill,
  EnvelopeFill,
  PersonFill,
  ThreeDots,
  BoxArrowDownLeft,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./Helpers/AuthContext";
import { useState } from "react";
function Navbar() {
  let navigate = useNavigate();

  const [authState, setAuthState] = useState(false);

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/landingPage");
  };
  return (
    <div className="flex justify-center mt-10">
      <div>
        <div className="flex">
          <HouseFill className="w-8 h-8 text-blue-400 mr-5" />
          <p className="text-blue-400 font-bold text-md mt-1">Home</p>
        </div>
        <div className="flex mt-8">
          <Hash className="w-8 h-8 text-gray-800 mr-5" />
          <p className="text-gray-800 font-bold text-md mt-1">Explore</p>
        </div>
        <div className="flex mt-8">
          <BellFill className="w-8 h-8 text-gray-800 mr-5" />
          <p className="text-gray-800 font-bold text-md mt-1">Notification</p>
        </div>
        <div className="flex mt-8">
          <BookmarksFill className="w-8 h-8 text-gray-800 mr-5" />
          <p className="text-gray-800 font-bold text-md mt-1">Bookmarks</p>
        </div>
        <div className="flex mt-8">
          <EnvelopeFill className="w-8 h-8 text-gray-800 mr-5" />
          <p className="text-gray-800 font-bold text-md mt-1">Messages</p>
        </div>
        <div className="flex mt-8">
          <PersonFill className="w-8 h-8 text-gray-800 mr-5" />
          <p className="text-gray-800 font-bold text-md mt-1">Profile</p>
        </div>
        <div className="flex mt-8">
          <ThreeDots className="w-8 h-8 text-gray-800 mr-5" />
          <p className="text-gray-800 font-bold text-md mt-1">More</p>
        </div>
        <div onClick={logout} className="flex mt-16 cursor-pointer">
          <BoxArrowDownLeft className="w-8 h-8 text-gray-800 mr-5" />
          <p className="text-gray-800 font-bold text-md mt-1">Logout</p>
        </div>
        {/* <AuthContext.Provider value={{ authState, setAuthState }}>
          <div></div>
        </AuthContext.Provider> */}
      </div>
    </div>
  );
}

export default Navbar;
