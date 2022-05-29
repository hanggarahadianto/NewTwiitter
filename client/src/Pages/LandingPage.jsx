import React from "react";
import { Envelope, KeyFill } from "react-bootstrap-icons";

import Login from "../Components/Login";
import Register from "../Components/Register";
function LandingPage() {
  return (
    <div className=" grid grid-cols-12">
      <div className="col-span-8">
        <img className="" src="images/twitter.jpg" alt="" />
      </div>
      <div className="col-span-4 bg-white">
        <div className="px-4 py-8">
          <p className="text-gray-800 font-bold text-2xl">Welcome to</p>
          <p className="text-blue-600 font-bold text-5xl">Twitter</p>
        </div>
        <div className="border-b-2 border-gray-300 px-4 py-4">
          <div className="flex justify-center cursor-pointer">
            <div className="bg-white hover:bg-gray-100 shadow-lg rounded-md px-4 py-2 w-80">
              <div className="flex justify-center">
                <p className="text-black">Login with Google</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center cursor-pointer">
            <div className="bg-white hover:bg-gray-100 shadow-lg mt-5 rounded-md px-4 py-2 w-80 ">
              <div className="flex justify-center">
                <p className="text-black">Login with Facebook</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Login />
        </div>
        <div className="flex justify-center mt-5">
          <Register />
        </div>

        <div className="flex justify-center px-2 py-2 mt-10">
          <div className="">
            <div className="bg-gray-200 flex rounded-lg w-80">
              <Envelope className="h-8 w-8 ml-5 mt-3" />
              <div className="px-4 py-2 w-80 ">
                <input
                  type="text"
                  placeholder="Email"
                  className="px-4 py-2 text-gray-700 bg-transparent border-none outline-none"
                />
              </div>
            </div>
            <div className="bg-gray-200 flex rounded-lg mt-3 w-80">
              <KeyFill className="h-8 w-8 ml-5 mt-3" />
              <div className="px-4 py-2 w-80 ">
                <input
                  type="text"
                  placeholder="Email"
                  className="px-4 py-2 text-gray-700 bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className="bg-blue-400 hover:bg-blue-500 rounded-lg w-80 px-4 py-2">
            <p className="text-gray-100 font-bold text-xl ">Login</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
