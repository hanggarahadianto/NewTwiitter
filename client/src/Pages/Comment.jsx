import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Trash2Fill } from "react-bootstrap-icons";
import { AuthContext } from "../Helpers/AuthContext";

function Comment() {
  let { id } = useParams();
  const [tweet, setTweet] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const { authState } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:3001/post/${id}`).then((response) => {
      console.log(response.data);
      setTweet(response.data);
    });
    axios.get(`http://localhost:3001/comment/${id}`).then((response) => {
      console.log(response.data);
      setComments(response.data);
    });
  }, []);

  const addNewComment = (e) => {
    try {
      e.preventDefault();
      axios
        .post(
          "http://localhost:3001/comment",
          {
            commentBody: newComment,
            postId: id,
          },
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((response) => {
          console.log(response);
          const commentToAdd = {
            commentBody: newComment,
          };
          setComments([...comments, commentToAdd]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:3001/comment/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then(() => {
        setComments(
          comments.filter((value) => {
            return value.id != id;
          })
        );
      });
  };

  return (
    <div className="bg-gray-100">
      <div className=" grid grid-rows-2 grid-cols-12">
        <div className="col-span-6 px-8 py-4">
          <div className="flex ">
            <img className="bg-green-200 h-12 w-12 rounded-full" />
            <p className="font-bold text-black ml-3 mt-1 text-xl">Ronaldinho</p>
            <p className=" mt-1 ml-2">@{tweet.username}</p>
          </div>
          <p className="ml-16">{tweet.caption}</p>
          <img
            src={`http://localhost:3001/${tweet.image}`}
            className="mt-3 rounded-lg"
          />
        </div>
        <div className="col-span-6">
          <div>
            <div className="flex px-8 py-4 mt-20">
              <input
                value={newComment}
                onChange={(event) => {
                  setNewComment(event.target.value);
                }}
                className=" px-4 py-2 outline-0 border-none placeholder:text-gray-400  w-11/12"
                placeholder="Add Comment"
              />
              <button
                onClick={addNewComment}
                className="bg-blue-400 hover:bg-blue-500 ml-5 text-gray-200 shadow-md px-4 py-2 rounded-xl "
              >
                <span className=" cursor-pointer">Comment</span>
              </button>
            </div>
          </div>

          <div className="gap-y-5">
            {comments.map((comment, key) => {
              return (
                <div
                  className="bg-slate-100 hover:bg-slate-200 ml-7 rounded-md shadow-lg w-3/4 px-8 py-2 mt-5"
                  key={key}
                >
                  <div className=" grid grid-cols-12">
                    <div className="flex col-span-11">
                      <span className="font-bold text-lg text-black">
                        @{comment.name}
                      </span>
                      <span className="ml-3 mt-1">3 hours ago</span>
                    </div>
                    <Trash2Fill
                      onClick={() => {
                        deleteComment(comment.id);
                      }}
                      className="w-5 h-5 cursor-pointer"
                    />
                    <div className="col-span-1 mt-4 cursor-pointer"></div>
                  </div>

                  <p className="mt-3 ml-4">{comment.commentBody}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
