import React, { useState } from "react";
export default function Setting() {
  const [open, setopen] = useState(false);
  const AdminData = {
    id: 1,
    firstName: "Phineas",
    lastName: "Franciottoi",
    email: "pfranciottoi0@hostgator.com",
    password: "y0pWrGzmDz",
  };

  return (
    <>
      <div className="font-Poppins">
        <div className=" flex justify-between text-black m-10 text-3xl">
          <h1>Admin Settings</h1>
          <div className="flex justify-around">
            <button
              onClick={() => setopen(true)}
              type="button"
              class="text-white bg-blue-700  border  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Edit
            </button>
          </div>
        </div>

        <div class="flex justify-center rounded-lg p-3 shadow-md   m-20 p-10 m-auto bg-white">
          <img
            class="object-cover w-[250px] h-[250px] rounded-t-lg  rounded-none rounded-l-lg"
            src="http://source.unsplash.com/250x250/?profile"
            alt=""
          />
          <div class="flex flex-col justify-evenly p-2 leading-normal ml-10">
            <h5 class="mb-2 text-xl font-bold tracking-tight  text-gray-900">
              FirstName: <span className="pl-2">{AdminData.firstName}</span>{" "}
            </h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
              LastName: <span className="pl-2">{AdminData.lastName}</span>
            </h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Email: <span className="pl-2">{AdminData.email}</span>
            </h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Password: <span className="pl-2">{AdminData.password}</span>
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

        {open && (
          <div
            id="authentication-modal"
            tabindex="-1"
            className="fixed top-0 right-0 left-0  z-50  items-center justify-center flex h-screen bg-gray-500 bg-opacity-50"
            aria-modal="true"
            role="dialog"
          >
            <div className="relative p-4 w-full max-w-md ">
              <div className="relative bg-white rounded-lg shadow-lg ">
                <button
                  onClick={() => setopen(false)}
                  type="button"
                  className="absolute top-3 right-2.5 text-black bg-transparent hover:bg-gray-200 hover: placeholder: rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  data-modal-toggle="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>

                <div className="py-6 px-6 lg:px-8 text-colortxt">
                  <h3 className="mb-4 text-xl font-medium mb-5 ">
                    Users Information
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <input
                        type="text"
                        className="bg-white outline-none border border-black focus:ring-1 focus:ring-black placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                        placeholder="First Name"
                        value={AdminData.firstName}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="bg-white outline-none border border-black focus:ring-1 focus:ring-black placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                        placeholder="Last Name"
                        value={AdminData.lastName}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="bg-white  outline-none border border-black focus:ring-1 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                        placeholder="Email "
                        value={AdminData.email}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="bg-white  outline-none border border-black focus:ring-1 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                        placeholder="Code Name "
                        value={AdminData.password}
                      />
                    </div>
                    <div>
                      <input
                        type="file"
                        className="bg-white  outline-none border border-black focus:ring-1 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                        placeholder="Profile Picture "
                      />
                    </div>

                    <div className="flex justify-around">
                      <button
                        type="button"
                        class="text-white mt-5 w-full bg-blue-700 border  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                      >
                        Save
                      </button>
                      {/* <button
                        type="button"
                        class="text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                      >
                        Discard
                      </button> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
