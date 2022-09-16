import React, { useState, useEffect } from "react";
import axios from "axios";
import {Api} from '../Api'
export default function MatchAddForm({ close }) {
  const [users, setUsers] = useState([]);
  const [p1, setp1] = useState("");
  const [p2, setp2] = useState("");
  const [p3, setp3] = useState("");
  const [p4, setp4] = useState("");
  const [match, setmatch] = useState("");
  const [time, settime] = useState("");
  const [courtName, setcourtName] = useState("");
  const MatchBooking = (e) => {
    e.preventDefault();
    let p1img = users.find((doc) => doc.UserId === p1).imageUrl;
    let p1name = users.find((doc) => doc.UserId === p1).fullname;
    let p2img = users.find((doc) => doc.UserId === p2).imageUrl;
    let p2name = users.find((doc) => doc.UserId === p2).fullname;
    let p3img = users.find((doc) => doc.UserId === p3).imageUrl;
    let p3name = users.find((doc) => doc.UserId === p3).fullname;
    let p4img = users.find((doc) => doc.UserId === p4).imageUrl;
    let p4name = users.find((doc) => doc.UserId === p4).fullname;
    const Setbookingdata = {
      player1: p1name,
      player2: p2name,
      player3: p3name,
      player4: p4name,
      Poneimg:p1img,
      Ptwoimg:p2img,
      Pthreeimg:p3img,
      Pfourimg:p4img,
      courtName: courtName,
      timing: time,
      match:match,
    };
    axios
      .post(`${Api}/MatchBooking`, Setbookingdata, {
        headers: { Authorization: `Bearer ${localStorage.FbIdToken}` },
      })
      .then((res) => {
        alert("Match is Booked");
        window.location.reload(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const userData = () => {
    axios
      .get(`${Api}/Users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        className="fixed top-0 right-0 left-0  z-50  items-center justify-center flex h-screen bg-gray-500 bg-opacity-50"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow-lg ">
            <button
              onClick={() => close(false)}
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
              <h3
                className="mb-4 text-xl font-medium  "
                style={{ marginBottom: 30 }}
              >
                Add Match
              </h3>
              <form className="space-y-6" action="#">
                <div className="flex">
                  <select
                    value={p1}
                    onChange={(e) => setp1(e.target.value)}
                    class="bg-white  outline-none border border-black focus:ring-4 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                  >
                    <option selected>Choose Player 1</option>
                    {users.map((val, ind) => (
                      <option  value={val.UserId} key={ind}>{val.fullname}</option>
                    ))}
                  </select>
                  <select
                    value={p2}
                    onChange={(e) => setp2(e.target.value)}
                    class="bg-white  outline-none border border-black focus:ring-4 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                  >
                    <option selected>Choose Player 2</option>
                    {users.map((val, ind) => (
                      <option key={ind} value={val.UserId}>{val.fullname}</option>
                    ))}
                  </select>
                </div>
                <div className="flex">
                  <select
                    value={p3}
                    onChange={(e) => setp3(e.target.value)}
                    class="bg-white  outline-none border border-black focus:ring-4 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                  >
                    <option selected>Choose Player 3</option>
                    {users.map((val, ind) => (
                      <option key={ind} value={val.UserId}>{val.fullname}</option>
                    ))}
                  </select>
                  <select
                    value={p4}
                    onChange={(e) => setp4(e.target.value)}
                    class="bg-white  outline-none border border-black focus:ring-4 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                  >
                    <option selected>Choose Player 4</option>
                    {users.map((val, ind) => (
                      <option key={ind} value={val.UserId}>{val.fullname}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    value={match}
                    onChange={(e) => setmatch(e.target.value)}
                    class="bg-white  outline-none border border-black focus:ring-4 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                  >
                    <option selected>Match To be Played </option>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                  </select>
                </div>

                <div>
                  <input
                    value={courtName}
                    onChange={(e) => setcourtName(e.target.value)}
                    type="text"
                    className="bg-white outline-none border border-black focus:ring-4 focus:ring-black placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                    placeholder="Court Name"
                  />
                </div>
                <div>
                  <input
                    value={time}
                    onChange={(e) => settime(e.target.value)}
                    type="datetime-local"
                    className="bg-white  outline-none border border-black focus:ring-4 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                    placeholder="Time "
                  />
                </div>
                <div></div>

                <div className="flex justify-around">
                  <button
                    onClick={(e) => MatchBooking(e)}
                    type="button"
                    class="text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    class="text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                  >
                    Discard
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
