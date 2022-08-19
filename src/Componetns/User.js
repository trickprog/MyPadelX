import React, { useState } from "react";
import JsonData from "../MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import UserTbody from "./UserTbody";

export default function User() {
  const [users, setUsers] = useState(JsonData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div class="m-10 font-Poppins">
        <div className=" text-black m-5 text-3xl  mt-10">
          <h1 style={{ marginBottom: 50 }}>Users</h1>
        </div>
        <table
          class="w-full text-sm text-left bg-blue-700"
          style={{ marginBottom: 50 }}
        >
          <thead class="text-base text-white uppercase  ">
            <tr>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Email
              </th>
              <th scope="col" class="py-3 px-6">
                Code Name
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
                <UserTbody
                  key={id}
                  firstName={val.firstName}
                  lastName={val.lastName}
                  email={val.email}
                  password={val.password}
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

<></>;
