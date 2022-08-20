import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import BookingTBody from "./BookingTBody";
import BookingAddForm from "./BookingAddForm";
export default function Bookings() {
  const BookingData = [
    {
      id: 1,
      BookedBy: "Phineas",
      email: "pfranciottoi0@hostgator.com",
      CourtName: "Court Jing’an Shanghai",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 2,
      BookedBy: "Phineas",
      email: "pfranciottoi0@hostgator.com",
      CourtName: "Court Jing’an Shanghai",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 3,
      BookedBy: "Phineas",
      email: "pfranciottoi0@hostgator.com",
      CourtName: "Court Jing’an Shanghai",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 4,
      BookedBy: "Phineas",
      email: "pfranciottoi0@hostgator.com",
      CourtName: "Court Jing’an Shanghai",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 5,
      BookedBy: "Phineas",
      email: "pfranciottoi0@hostgator.com",
      CourtName: "Court Jing’an Shanghai",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 6,
      BookedBy: "Phineas",
      email: "pfranciottoi0@hostgator.com",
      CourtName: "Court Jing’an Shanghai",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 7,
      BookedBy: "Phineas",
      email: "pfranciottoi0@hostgator.com",
      CourtName: "Court Jing’an Shanghai",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 8,
      BookedBy: "Phineas",
      email: "pfranciottoi0@hostgator.com",
      CourtName: "Court Jing’an Shanghai",
      Time: "July 10 2022 10:30 PM",
    },
  ];

  const [users, setUsers] = useState(BookingData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [open, setopen] = useState(false);
  return (
    <>
      <div class="m-10 font-Poppins">
        <div className=" text-black m-5 text-3xl  mt-10 flex justify-between items-center">
          <h1 style={{ marginBottom: 50 }}>Bookings</h1>
          <div>
            <button
              type="button"
              class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 "
              onClick={() => setopen(true)}
            >
              Add +
            </button>
            {open && <BookingAddForm close={setopen} />}
          </div>
        </div>
        <table
          class="w-full text-sm text-left bg-blue-700"
          style={{ marginBottom: 50 }}
        >
          <thead class="text-base text-white uppercase  ">
            <tr>
              <th scope="col" class="py-3 px-6">
                Booked By
              </th>
              <th scope="col" class="py-3 px-6">
                Email
              </th>
              <th scope="col" class="py-3 px-6">
                Court Name
              </th>
              <th scope="col" class="py-3 px-6">
                Timing
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {users
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((val, id) => {
              return (
                <BookingTBody
                  key={id}
                  BookedBy={val.BookedBy}
                  CourtName={val.CourtName}
                  time={val.Time}
                  email={val.email}
                />
              );
            })}
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
