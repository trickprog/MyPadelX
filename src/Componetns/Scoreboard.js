import React, { useState,useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import SocreBoardTbody from "./SocreBoardTbody";
import AddScore from "./AddScore";
import axios from "axios";
import {Api} from '../Api'
export default function Scoreboard() {
  const ScoreboardData = [
    {
      id: 1,
      Position:1,
      playerName: "Phineas Franciottoi",
      pimg: 1,
      SPP:1620,
      SPL:1620.5,
      SPF:0,
    },
    {
      id: 2,
      Position:2,
      playerName: "Mikel Gregoli",
      pimg: 2,
      SPP:1620,
      SPL:1620.5,
      SPF:0,
    },
    {
      id: 3,
      Position:3,
      playerName: "Moira Mazzilli",
      pimg: 3,
      SPP:1620,
      SPL:1620.5,
      SPF:0,
    },
    {
      id: 4,
      Position:4,
      playerName: "Kaja True",
      pimg: 4,
      SPP:1620,
      SPL:1620.5,
      SPF:0,
    },
    {
      id: 5,
      Position:5,
      playerName: "Phineas Franciottoi",
      pimg: 1,
      SPP:1620,
      SPL:1620.5,
      SPF:0,
    },
    {
      id: 6,
      Position:6,
      playerName: "Mikel Gregoli",
      pimg: 2,
      SPP:1620,
      SPL:1620.5,
      SPF:0,
    },
    {
      id: 7,
      Position:7,
      playerName: "Moira Mazzilli",
      pimg: 3,
      SPP:1620,
      SPL:1620.5,
      SPF:0,
    },
    {
      id: 8,
      Position:8,
      playerName: "Kaja True",
      pimg: 4,
      SPP:1620,
      SPL:1620.5,
      SPF:0,
    },
  ]


  const [users, setUsers] = useState([]);
  const [open, setopen] = useState(false);


  const PositionData = () => {
    axios
      .get(`${Api}/Positions`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    PositionData();
  }, []);


  return (
    <>
      <div class="m-10 font-Poppins w-full">
        <div className=" text-black m-5 text-3xl  mt-10 flex justify-between items-center">
          <h1 style={{ marginBottom: 50 }}>Scoreboard</h1>
          <div>
            <button
              type="button"
              class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 "
              onClick={() => setopen(true)}
            >
              Add Score 
            </button>
            {open && <AddScore close={setopen} />}
          </div>
        </div>
        <div className="overflow-y-scroll max-h-96">
        <table
          class="w-full text-sm text-left bg-blue-700"
          style={{ marginBottom: 50 }}
        >
          <thead class="text-base text-white uppercase  ">
            <tr>
              <th scope="col" class="py-3 px-6">
                Position
              </th>
              <th scope="col" class="py-3 px-6">
                SPL
              </th>
              <th scope="col" class="py-3 px-6">
                SPP
              </th>
              <th scope="col" class="py-3 px-6">
                SPF
              </th>
            </tr>
          </thead>
          {users
            .map((val, index) => {
              return (
                <SocreBoardTbody
                  key={index}
                  index={index}
                  playerName={val.fullname}
                  pimg={val.imageUrl}
                  SPF={val.spf}
                  SPP={val.spp}
                  SPL={val.spl}
                />
              );
            })}
        </table>
        </div>
      </div>
    </>
  );
}
