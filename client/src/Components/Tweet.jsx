import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tweet() {
  let navigate = useNavigate();

  const [listOfPost, setListOfPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/post").then((response) => {
      console.log(response.data);
      setListOfPost(response.data);
    });
  }, []);

  return (
    <div>
      {listOfPost.map((listOfPost) => {
        return (
          <div key={listOfPost.id}>
            <div className="px-2 py-2">
              <div className="flex">
                <div>
                  <img className="mt-3 mr-3 bg-green-200 rounded-full w-10 h-10" />
                </div>
                <div
                  onClick={() => {
                    navigate(`/comment/${listOfPost.id}`);
                  }}
                  className="ml-2 mt-2 cursor-pointer"
                >
                  <div className="flex">
                    <p className="font-bold text-black mr-2">Ronaldinho</p>
                    <p>@{listOfPost.username}</p>
                  </div>
                  <p>{listOfPost.caption}</p>
                  <div>
                    <img
                      src={`http://localhost:3001/${listOfPost.image}`}
                      className="mt-3 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tweet;
