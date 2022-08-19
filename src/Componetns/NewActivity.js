import React, { useState } from "react";

export default function NewActivity() {
  return (
    <>
      <div className="   font-Poppins"></div>
      <div className="items-center justify-center flex  font-Poppins ">
        <div className=" p-10 w-full  mt-0">
          <div className="  rounded-lg shadow-lg p-10 ">
            <h1 className="text-black m-5 text-3xl">New Activity</h1>
            <div className="py-6 px-6 lg:px-8 text-colortxt">
              <form className="space-y-6" action="#">
                <div>
                  <input
                    type="text"
                    className="bg-white outline-none border border-black focus:ring-1 focus:ring-black placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                    placeholder="Title"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Description"
                    rows="7"
                    cols="45"
                    className="w-full placeholder:p-2 outline-none border border-black rounded-lg  focus:ring-1 focus:ring-black"
                  ></textarea>
                </div>

                <div>
                  <input
                    type="file"
                    className="bg-white  outline-none border border-black focus:ring-1 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                    placeholder="Code Name "
                  />
                </div>
                <div></div>

                <div className="flex justify-around">
                  <button
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
