import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Api} from '../Api'
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data,setdata]=useState([]);

  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    const userData = {
      Email: email,
      Password: password,
    };

      console.log(userData)
      axios
      .post(`${Api}/Login`,userData)
      .then((res) => {
        let token=res.data.token
        console.log('sign in')
      console.log(token)
        localStorage.setItem('FbIdToken',`Bearer ${token}`)
        console.log(res.data)
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <div className="flex justify-center mt-[150px]">
      <div class="w-3/4 p-4 max-w-sm bg-[#98b8eb] mr-0 rounded-lg  shadow-lg shadow-gray-700 sm:p-6 lg:p-8 font-Poppins">
        <form class="space-y-6">
          <h5 class="text-xl font-medium text-gray-900">
            Welcome To Admin Panel
          </h5>
          <div>
            <TextField
              value={email}
              onChange={(e) => setemail(e.target.value)}
              color="info"
              className=" bg-gray-50  text-gray-900 text-sm rounded-lg block w-full p-2.5"
              label="Email"
              
              variant="outlined"
              type="email"
            />
          </div>
          <div>
            <TextField
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              color="info"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              label="Password"
              variant="outlined"
              type="password"
            />
          </div>
          <div class="flex items-start">
            <a
              href="/Forgetpassword"
              class=" text-md text-black hover:underline"
            >
              Forget Password
            </a>
          </div>
          <button
            onClick={(e)=>handleSubmit(e)}
            type="submit"
            class="w-full text-white bg-black hover:bg-[FEF5F9] focus:ring-4 focus:outline-none focus:ring-[#F27AAC] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
