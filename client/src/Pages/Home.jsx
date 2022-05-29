import React from "react";
import Bar from "../Components/Bar";
import Navbar from "../Components/Navbar";
import Post from "../Components/Post";
import Tweet from "../Components/Tweet";

function Home() {
  return (
    <div className="bg-gray-100 h-full">
      <div className=" grid grid-rows-2 grid-cols-12">
        <section className="col-span-3 border-r-4 border-gray-200 ">
          <Navbar />
        </section>
        <div className="col-span-5 border-r-4 border-gray-200">
          <div className="border-b-2 border-gray-200 px-2 py-2">
            <p className="text-xl font-bold text-black">Home</p>
          </div>
          <div className="border-b-8 border-gray-200">
            <Post />
          </div>
          <section className="">
            <Tweet />
          </section>
        </div>
        <section className="col-span-4">
          <Bar />
        </section>
      </div>
    </div>
  );
}

export default Home;
