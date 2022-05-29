import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const register = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      name: name,
      username: username,
    };
    axios.post("http://localhost:3001/auth/register", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.data.token);
        if (response.data.status == "Success") {
          navigate("/home");
        }
        console.log(response.data);
      }
    });
  };
  return (
    <div>
      <div className="">
        <button className="flex justify-center">
          <label
            for="my-modal-3"
            className="bg-white hover:bg-gray-100 shadow-lg mt-5 rounded-md px-4 py-2 w-80 "
          >
            <div className="flex justify-center cursor-pointer">
              <p className="text-black">Register with Email</p>
            </div>
          </label>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <label for="my-modal-3" className="modal">
            <label className="modal-box relative" for="">
              <h3 class="text-4xl font-bold ml-10">Register</h3>
              <div className="flex justify-center">
                <form className="text-center">
                  <div className="mt-12">
                    <input
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      name="email"
                      autoComplete="off"
                      type="text"
                      placeholder="Email"
                      className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                    ></input>
                    <input
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      type="password"
                      name="password"
                      autoComplete="off"
                      placeholder="Password"
                      className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 mt-5 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                    ></input>
                    <input
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      type="text"
                      name="name"
                      autoComplete="off"
                      placeholder="Full Name"
                      className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 mt-5 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                    ></input>
                    <input
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      type="text"
                      name="username"
                      autoComplete="off"
                      placeholder="Username"
                      className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 mt-5 rounded-lg bg-gray-400 border-4 border-gray-300 w-10/12"
                    ></input>
                    <div className="flex justify-center mt-12">
                      <button
                        onClick={register}
                        className="background px-8 py-2 rounded-md w-96"
                      >
                        <p className="text-xl text-gray-200 font-bold">
                          Register
                        </p>
                      </button>
                    </div>
                    <div className="mt-8">
                      <p className="font-bold text-xl cursor-pointer">
                        Don't have and account? Click Here
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </label>
          </label>
        </button>
      </div>
    </div>
  );
};

export default Register;
