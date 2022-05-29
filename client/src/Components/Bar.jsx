import React from "react";

function Bar() {
  return (
    <div>
      <div className="px-4 py-2">
        <input
          placeholder="Search"
          className="px-4 py-2 outline-0 border-0 rounded-xl bg-gray-200"
        />
      </div>
      <div className="px-4 py-2">
        <div className="bg-gray-200 rounded-md px-4 py-4">
          <div className="border-b-gray-200">
            <p className="text-black font-bold">What is happening</p>
          </div>
          <div className="flex">
            <p className="mr-3">BBC News, Washington</p>
            <p>Last night</p>
          </div>
          <div className="grid grid-rows-2 grid-cols-12">
            <div className="col-span-9">
              <p className="text-gray-700 font-bold">
                Johnny Depp hit me on honeymoon, says Amber Heard
              </p>
            </div>
            <div className="col-span-3">
              <img className="rounded-xl bg-green-200 h-24 w-24" />
            </div>

            <img />
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="bg-gray-200 rounded-md px-4 py-4">
          <div className="border-b-gray-200">
            <p className="text-black font-bold">Who to follow</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Bar;
