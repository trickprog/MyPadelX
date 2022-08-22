import React, { useState } from "react";

export default function MatchTbody(props) {
  const [open, setopen] = useState(false);
  return (
    <>
      <tbody>
        <tr class="bg-white border-b text-black ">
          <th
            scope="row"
            class="flex  py-4 px-4 text-black cursor-pointer"
            onClick={() => setopen(true)}
          >
            <tr>
            <td>
              <div className="flex">
                <img
                  class="w-10 h-10 rounded-full"
                  src={require("./profile/img" + props.img + ".png")}
                  alt="Jese image"
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">{props.player1}</div>
                </div>
              </div>
            </td>
            </tr>
            <td className="mx-auto">
              <div class="text-base font-semibold mx-5">VS</div>
            </td>
            <td className="items-start">
              <div className="flex ">
                <img
                  class="w-10 h-10 rounded-full "
                  src={require("./profile/img" + props.img + ".png")}
                  alt="Jese image"
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">{props.player2}</div>
                </div>
              </div>
            </td>
          </th>

          <td class="py-4 px-4">{props.Time}</td>
          <td class="  py-4 px-4">
            <div class="text-base font-semibold">{props.id}</div>
          </td>
          <td class="  py-4 px-4">
            <button
              type="button"
              class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Approve
            </button>

            <button
              type="button"
              class="text-white bg-[#FB3131]  font-medium rounded-lg text-sm px-5 py-2.5 ml-10 "
            >
              Decline
            </button>
          </td>
        </tr>
      </tbody>

      {/* <!-- Main modal --> */}
      {open && (
        <div
          id="crypto-modal"
          tabindex="-1"
          class="overflow-y-auto bg-gray-400 bg-opacity-50 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
          aria-modal="true"
          role="dialog"
        >
          <div class="relative p-4 w-full max-w-md h-full md:h-auto opacity-100 ">
            <div class="relative bg-blue-500 rounded-lg shadow ">
              <button
                onClick={() => setopen(false)}
                type="button"
                class="absolute top-3 right-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="crypto-modal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
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
                <span class="sr-only">Close modal</span>
              </button>

              <div class="py-4 px-4 rounded-t border-b border-gray-600">
                <h3 class=" font-semibold text-black text-xl ">
                  Match {props.id}
                </h3>
              </div>

              <div class="p-6 ">
                <table class="w-full text-sm text-left text-black">
                  <thead class="text-xs text-black uppercase bg-blue-200">
                    <tr>
                      <th>
                        <div className="flex justify-start ml-1 items-center p-2">
                          <img
                            class="w-10 h-10 rounded-full"
                            src={require("./profile/img" + props.img + ".png")}
                            alt="Jese image"
                          />
                          <div class="pl-3">
                            <div class="text-base font-semibold">
                              {props.player1}
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>
                        <div className="flex justify-end mr-1 items-center">
                          <img
                            class="w-10 h-10 rounded-full"
                            src={require("./profile/img" + props.img + ".png")}
                            alt="Jese image"
                          />
                          <div class="pl-3">
                            <div class="text-base font-semibold">
                              {props.player2}
                            </div>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class=" bg-blue-200 border-b text-black">
                      <td className="py-4 px-4 ">
                        Nationality: {props.Nationality}
                      </td>
                      <td className="py-4 px-4">
                        Nationality: {props.Nationality}
                      </td>
                    </tr>
                    <tr class=" bg-blue-200 border-b text-black">
                      <td className="py-4 px-4">Ranking: {props.Rank}</td>
                      <td className="py-4 px-4">Ranking: {props.Rank}</td>
                    </tr>
                    <tr class=" bg-blue-200 border-b text-black">
                      <td className="py-4 px-4">
                        Matches Played: {props.Matchs}
                      </td>
                      <td className="py-4 px-4">
                        Matches Played: {props.Matchs}
                      </td>
                    </tr>
                    <tr class=" bg-blue-200 border-b text-black">
                      <td className="py-4 px-4">Wins: {props.wins}</td>
                      <td className="py-4 px-4">Wins: {props.wins}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
