import React, { useState,useEffect } from "react";
import axios from "axios";
import {Api} from '../Api'
export default function Setting() {
const [open, setopen] = useState(false);
const [AdminData,setAdminData] =useState([])


 let config = {
  headers: {
    Authorization: `Bearer ${localStorage.FbIdToken}`,
  }
}



const GetRequest =() =>{
  axios.get( `${Api}/Admin`)
  .then((res)=>{

    setAdminData(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

useEffect(() => {
  GetRequest();
}, []);


  return (
    <>
      <div className="font-Poppins w-full">
        <div className=" flex justify-between text-black m-10 text-3xl">
          <h1>Admin Settings</h1>
          <div className="flex justify-around">

          </div>
        </div>

        {
            AdminData.map((val,ind)=>
        <div  key={ind} class="flex justify-center rounded-lg p-3 shadow-md   m-20   bg-white">
          <img
            class="object-cover w-[250px] h-[250px] rounded-t-lg  rounded-none rounded-l-lg"
            src={val.imageUrl}
            alt=""
          />
          
          <div class="flex flex-col justify-evenly p-2 leading-normal ml-10">
            <h5 class="mb-2 text-xl font-bold tracking-tight  text-gray-900">
              Name: <span className="pl-2">{val.Name}</span>
            </h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Email: <span className="pl-2">{val.Email}</span>
            </h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Password: <span className="pl-2">{val.Password}</span>
            </h5>
          </div>

          {/* <table class=" text-sm text-left  text-white">

                        <tbody>
                            <tr class=" border-b">
                                <th scope="row" class="py-4 px-6 font-medium text-whtie whitespace-nowrap">
                                    First Name:
                                </th>
                                <td class="py-4 px-6">
                                    {AdminData.firstName}
                                </td>
                            </tr>
                            <tr class=" border-b">
                                <th scope="row" class="py-4 px-6 font-medium text-whtie whitespace-nowrap">
                                    Last Name:
                                </th>
                                <td class="py-4 px-6">
                                    {AdminData.lastName}
                                </td>
                            </tr>
                            <tr class=" border-b">
                                <th scope="row" class="py-4 px-6 font-medium text-whtie whitespace-nowrap">
                                    Email:
                                </th>
                                <td class="py-4 px-6">
                                    {AdminData.email}
                                </td>
                            </tr>
                            <tr class=" ">
                                <th scope="row" class="py-4 px-6 font-medium text-whtie whitespace-nowrap">
                                    Password:
                                </th>
                                <td class="py-4 px-6">
                                    {AdminData.password}
                                </td>
                            </tr>

                        </tbody>
                    </table> */}
        </div>
)}
      </div>
    </>
  );
}
