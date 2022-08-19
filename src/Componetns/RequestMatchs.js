import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import MatchTbody from "./MatchTbody";
export default function RequestMatchs() {
  const Playersdata = [
    {
      id: 1,
      player1: "Phineas",
      player2: "Franciottoi",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 1,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 2,
      player1: "Mikel",
      player2: "Gregoli",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 2,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 3,
      player1: "Moira",
      player2: "Mazzilli",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 3,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 4,
      player1: "Kaja",
      player2: "True",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 2,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 5,
      player1: "Robbie",
      player2: "Mc Harg",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 1,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 6,
      player1: "Niki",
      player2: "Daber",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 3,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 7,
      player1: "Rana",
      player2: "Gyrgorwicx",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 4,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 8,
      player1: "Johnette",
      player2: "Torricella",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 2,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 9,
      player1: "Kristoforo",
      player2: "Slinn",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 5,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 10,
      player1: "Wye",
      player2: "Bushrod",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 4,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 11,
      player1: "Aline",
      player2: "Boydle",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 2,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 12,
      player1: "Dall",
      player2: "Ettritch",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 5,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 13,
      player1: "Wynn",
      player2: "Vautier",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 4,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 14,
      player1: "Cami",
      player2: "Pfaffe",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 1,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 15,
      player1: "Althea",
      player2: "Wenzel",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 5,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 16,
      player1: "Charlotte",
      player2: "McAvey",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 4,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 17,
      player1: "Nickolas",
      player2: "Swift",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 2,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 18,
      player1: "Cybill",
      player2: "Coward",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 5,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 19,
      player1: "Chauncey",
      player2: "Patey",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 4,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
    {
      id: 20,
      player1: "Gregorius",
      player2: "Petch",
      Matchs: 10,
      Ranking: 10,
      Wins: 5,
      img: 1,
      Nationality: "Pakistan",
      Time: "July 10 2022 10:30 PM",
    },
  ];

  const [users, setUsers] = useState(Playersdata.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div>
        <div className=" text-black m-5 text-3xl  mt-10">
          <h1 style={{ marginBottom: 50 }}>Match Requests</h1>
        </div>

        <table
          class="w-full text-sm text-left bg-blue-700"
          style={{ marginBottom: 50 }}
        >
          <thead class="text-base text-white uppercase">
            <tr>
              <th scope="col" class="text-center py-3 px-6">
                Team
              </th>
              <th scope="col" class="py-3 px-6">
                Time
              </th>
              <th scope="col" class="py-3 px-6">
                Code Name
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {Playersdata.slice(pagesVisited, pagesVisited + usersPerPage).map(
            (val, ind) => {
              return (
                <MatchTbody
                  key={ind}
                  Matchs={val.Matchs}
                  id={val.id}
                  Nationality={val.Nationality}
                  Rank={val.Ranking}
                  img={val.img}
                  player1={val.player1}
                  player2={val.player2}
                  wins={val.img}
                />
              );
            }
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
