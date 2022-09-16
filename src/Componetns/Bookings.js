import React, { useState,useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import BookingTBody from "./BookingTBody";
import axios from "axios";
import {Api} from '../Api'
import BookingAddForm from "./BookingAddForm";
export default function Bookings() {

  const [users, setUsers] = useState([])
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  

  const booking = () => {
    axios
      .get(`${Api}/MatchBooking`)
      .then((res) => {
        console.log("Getting Matchs ");
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    booking();
  }, []);

  return (
    <>
      <div class="m-10 font-Poppins w-full">
        <div className=" text-black m-5 text-3xl  mt-10 flex justify-between items-center">
          <h1 style={{ marginBottom: 50 }}>Bookings</h1>
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
                  bookID={val.bookingid}
                  BookedBy={val.bookedBy}
                  CourtName={val.courtName}
                  time={val.timing}
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
