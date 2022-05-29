import React from "react";
import { Image, EmojiSmile, FiletypeGif, Upload } from "react-bootstrap-icons";
import axios from "axios";
import { useState, useEffect } from "react";

function Post() {
  const [listOfPost, setListOfPost] = useState([]);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    caption: "",
    username: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const onSubmit = (e) => {
    try {
      e.preventDefault();

      const data = new FormData();
      data.set("caption", form.caption);
      data.set("username", form.username);
      data.set("image", form.image[0], form.image[0].name);

      axios
        .post("http://localhost:3001/post", data, {
          // headers: {
          //   accessToken: localStorage.getItem("accessToken"),
          // },
        })
        .then((response) => {
          //   const postToAdd = { caption: caption, image: image };
          //   set([...account, accountToAdd]);
          // });
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mt-5 ml-5">
        <div className="flex">
          <div className="w-16 h-16 bg-green-200 rounded-full">
            <img />
          </div>
          <div className=" w-80 h-20 ml-5">
            <input
              placeholder="What is happening ?"
              className="placeholder:text-gray-700  border-none outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-2 text-blue-500">
            <div>
              <label
                for="my-modal-4"
                className="btn modal-button bg-gray-100 outline-none border-none hover:bg-blue-100"
              >
                <Image className="h-4 w-4" />
              </label>
            </div>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
              <label className="modal-box relative bg-gray-200" for="">
                <form onSubmit={onSubmit}>
                  <div className=" grid grid-cols-12">
                    <div className="col-span-4">
                      <div>
                        <div className="bg-green-200 w-20 h-20">
                          {preview && (
                            <img
                              className="h-20 w-20 object-cover"
                              src={preview}
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <Upload className="h-8 w-8 mt-3 ml-5 " />
                        <input
                          onChange={handleChange}
                          multiple="multiple"
                          name="image"
                          type="file"
                          className="cursor-pointer absolute -mt-5 w-28 -ml-16 opacity-0"
                        ></input>
                      </div>
                    </div>
                    <div className="col-span-8">
                      <div>
                        <input
                          onChange={handleChange}
                          autoComplete="off"
                          type="text"
                          name="caption"
                          placeholder="What is happening ?"
                          className=" text-gray-700 px-4 placeholder:text-gray-700  border-none outline-none bg-transparent"
                        ></input>
                        <input
                          onChange={handleChange}
                          autocomplete="off"
                          type="text"
                          name="username"
                          placeholder="Username"
                          className="placeholder:text-gray-700 text-gray-700 px-4  mt-5 border-none outline-none bg-gray-200"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      for="my-modal-4"
                      className=" bg-blue-400 hover:bg-blue-500 rounded-lg h-10 w-16"
                    >
                      <p className="text-gray-100 font-bold">Tweet</p>
                    </button>
                  </div>
                </form>
              </label>
            </label>
            <div className="btn bg-gray-100 border-none hover:bg-blue-100">
              <FiletypeGif />
            </div>
            <div className="btn bg-gray-100 border-none hover:bg-blue-100">
              <EmojiSmile />
            </div>
          </div>
          <div className="ml-60">
            <button className="bg-blue-400 hover:bg-blue-500 rounded-2xl px-4 py-2">
              <p className="text-gray-100">Tweet</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
