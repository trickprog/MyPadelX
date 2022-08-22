import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import MatchAddForm from "./MatchAddForm";
export default function ApprovedMatchs() {
  const Playersdata = [
    {
      id: 1,
      Match: 1,
      player1Name: "Phineas",
      player2Name: "Franciottoi",
      player3Name: "Mikel",
      player4Name: "Gregoli",
      p1img: 1,
      p2img: 2,
      p3img: 3,
      p4img: 4,
      Time: "July 10 2022 10:30 PM",
      courtName: "Court Jing’an Shanghai",
    },
    {
      id: 2,
      Match: 2,
      player1Name: "Phineas",
      player2Name: "Mikel",
      player3Name: "Franciottoi",
      player4Name: "Gregoli",
      p1img: 1,
      p2img: 3,
      p3img: 2,
      p4img: 4,
      Time: "July 20 2022 4:30 PM",
      courtName: "Court Jing’an Shanghai",
    },
    {
      id: 2,
      Match: 3,
      player1Name: "Gregoli",
      player2Name: "Mikel",
      player3Name: "Franciottoi",
      player4Name: "Phineas",
      p1img: 4,
      p2img: 3,
      p3img: 2,
      p4img: 1,
      Time: "July 21 2022 11:30 AM",
      courtName: "Court Jing’an Shanghai",
    },
  ];

  const [users, setUsers] = useState(Playersdata.slice(0, 3));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [open, setopen] = useState(false);
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
          {Playersdata.slice(pagesVisited, pagesVisited + usersPerPage).map(
            (val, id) => (
              <tbody key={id} >
                <tr class="bg-white border-b text-black ">
                  <td >
                    {/* player1 info */}
                    <div className="m-2">
                      <div className="flex justify-center">
                        <img
                          class="w-10 h-10 rounded-full "
                          src={require("./profile/img" + val.p1img + ".png")}
                          alt="Jese image"
                        />
                      </div>
                      <div class="text-base text-center font-semibold">
                        {val.player1Name}
                      </div>
                    </div>
                    {/* player2 info */}
                    <div className="mt-2">
                      <div className="flex justify-center">
                        <img
                          class="w-10 h-10 rounded-full "
                          src={require("./profile/img" + val.p2img + ".png")}
                          alt="Jese image"
                        />
                      </div>
                      <div class="text-base text-center font-semibold">
                        {val.player2Name}
                      </div>
                    </div>
                  </td>
                  <td className="mt-10 flex flex-col items-center">
                    <div class="text-base font-semibold  ">
                      Match {val.Match}
                    </div>
                    <div class="text-base font-semibold my-auto">VS</div>
                  </td>
                  <td>
                    {/* player3 info */}
                    <div className="">
                      <div className="flex justify-center">
                        <img
                          class="w-10 h-10 rounded-full "
                          src={require("./profile/img" + val.p3img + ".png")}
                          alt="Jese image"
                        />
                      </div>
                      <div class="text-base text-center font-semibold">
                        {val.player3Name}
                      </div>
                    </div>
                    {/* player4 info */}
                    <div className="mt-2">
                      <div className="flex justify-center">
                        <img
                          class="w-10 h-10 rounded-full "
                          src={require("./profile/img" + val.p4img + ".png")}
                          alt="Jese image"
                        />
                      </div>
                      <div class="text-base text-center font-semibold">
                        {val.player4Name}
                      </div>
                    </div>
                  </td>
                  <td class="py-4 px-6">{val.Time}</td>
                  <td class="  py-4 px-6">
                    <div class="text-base font-semibold">{val.courtName}</div>
                  </td>
                </tr>
              </tbody>
            )
          )}
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
