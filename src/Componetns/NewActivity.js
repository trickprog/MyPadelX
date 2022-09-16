import React, { useState,useEffect } from "react";
import axios from "axios";
import {Api} from '../Api'
export default function NewActivity() {
  const [title, setitle] = useState("");
  const [describe, setdesceibe] = useState("");
  const [img, setimg] = useState('');
  let imgupload = false

  const handleSubmitImage = (files) => {
    imgupload=true
    const formData = new FormData();

    formData.append('files',files);
    console.log(formData)
    // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.FbIdToken}`;
    axios
      .post(`${Api}/UploadingImage`, formData,{headers:{'Authorization':`Bearer ${localStorage.FbIdToken}`}})
      .then((res) => {
        console.log("uploaded");
        console.log(res.data);
        alert('Image Uploaded')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitForm = (e) => {
   if(imgupload===true)
   {
    const Activitydata={
      title:title,
      describe:describe,
    };
    // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.FbIdToken}`;
    axios
      .post(`${Api}/ActivityDetails`, Activitydata,{headers:{'Authorization':`Bearer ${localStorage.FbIdToken}`}})
      .then((res) => {
        alert("Doc Created");
        window.location.reload(true)
      })
      .catch((err) => {
        console.error(err);
      });
    }
   else
   {
    alert('Please Upload An image')
  }
  };

  return (
    <>
      <div className="items-center justify-center flex  font-Poppins w-full ">
        <div className=" p-10 w-full  mt-0">
          <div className="  rounded-lg shadow-lg p-10 ">
            <h1 className="text-black m-5 text-3xl">New Activity</h1>
            <div className="py-6 px-6 lg:px-8 text-colortxt">
              <form className="space-y-6" action="#">
                <div>
                  <input
                    value={title}
                    onChange={(e) => setitle(e.target.value)}
                    type="text"
                    className="bg-white outline-none border border-black focus:ring-1 focus:ring-black placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                    placeholder="Title"
                  />
                </div>
                <div>
                  <textarea
                    value={describe}
                    onChange={(e) => setdesceibe(e.target.value)}
                    placeholder="Description"
                    rows="7"
                    cols="45"
                    className="w-full placeholder:p-2 outline-none border border-black rounded-lg  focus:ring-1 focus:ring-black"
                  ></textarea>
                </div>

                <div>
                  <input
                    onChange={(e) => handleSubmitImage(e.target.files[0])}
                    type="file"
                    className="bg-white  outline-none border border-black focus:ring-1 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                    placeholder="file "
                  />
                </div>
                <div></div>

                <div className="flex justify-around">
                  <button
          onClick={(e)=>handleSubmitForm()}
                    type="button"
                    class="text-white bg-blue-700 border  font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-5 mt-5 w-full"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
