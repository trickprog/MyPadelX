import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import {Api} from '../Api'
import MatchAddForm from "./MatchAddForm";
export default function ApprovedMatchs() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [open, setopen] = useState(false);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const booking = () => {
    axios
      .get(`${Api}/MatchBooking`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    booking();
  }, []);

  return (
    <>
      <div>
        <div className=" text-black m-5 text-3xl  mt-10 flex justify-between items-center">
          <h1 style={{ marginBottom: 50 }}>Matchs</h1>
          <div>
            <button
              type="button"
              class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 "
              onClick={() => setopen(true)}
            >
              Add +
            </button>
            {open && <MatchAddForm close={setopen} />}
          </div>
        </div>

        <table
          class="w-full text-sm text-left bg-blue-700"
          style={{ marginBottom: 50 }}
        >
          <thead class="text-base text-white uppercase  ">
            <tr>
              <th scope="col" colspan="3" class="text-center py-3 px-6">
                Match
              </th>
              <th scope="col" class="py-3 px-6">
                Time
              </th>
              <th scope="col" class="py-3 px-6">
                Court Name
              </th>
            </tr>
          </thead>
          {users
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((val, id) => (
              <tbody key={id}>
                <tr class="bg-white border-b text-black ">
                  <td>
                    {/* player1 info */}
                    <div className="m-2">
                      <div className="flex justify-center">
                        <img class="w-10 h-10 rounded-full " src={val.Poneimg} alt="Jese image" />
                      </div>
                      <div class="text-base text-center font-semibold">
                        {val.player1}
                      </div>
                    </div>
                    {/* player2 info */}
                    <div className="mt-2">
                      <div className="flex justify-center">
                        <img class="w-10 h-10 rounded-full " src={val.Ptwoimg} alt="Jese image" />
                      </div>
                      <div class="text-base text-center font-semibold">
                        {val.player2}
                      </div>
                    </div>
                  </td>
                  <td className="mt-10 flex flex-col items-center">
                    <div class="text-base font-semibold  ">
                      Match {val.match}
                    </div>
                    <div class="text-base font-semibold my-auto">VS</div>
                  </td>
                  <td>
                    {/* player3 info */}
                    <div className="">
                      <div className="flex justify-center">
                        <img class="w-10 h-10 rounded-full " src={val.Pthreeimg} alt="Jese image" />
                      </div>
                      <div class="text-base text-center font-semibold">
                        {val.player3}
                      </div>
                    </div>
                    {/* player4 info */}
                    <div className="mt-2">
                      <div className="flex justify-center">
                        <img class="w-10 h-10 rounded-full " src={val.Pfourimg}  alt="Jese image" />
                      </div>
                      <div class="text-base text-center font-semibold">
                        {val.player4}
                      </div>
                    </div>
                  </td>
                  <td class="py-4 px-6">{val.timing}</td>
                  <td class="  py-4 px-6">
                    <div class="text-base font-semibold">{val.courtName}</div>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
        <ReactPaginate
          breakLabel="..."
          previousLabel={"previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}
