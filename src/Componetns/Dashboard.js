import React from "react";
import Activityfeed from "./Activityfeed";

const ActivityfeedData = [
  {
    id: 1,
    Title: "Tennis Game",
    describtion:
      "Desciption Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 2,
    Title: "Tennis Game",
    describtion:
      "Desciption Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 3,
    Title: "Tennis Game",
    describtion:
      "Desciption Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 4,
    Title: "Tennis Game",
    describtion:
      "Desciption Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 5,
    Title: "Tennis Game",
    describtion:
      "Desciption Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 6,
    Title: "Tennis Game",
    describtion:
      "Desciption Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="font-Poppins">
        <div className=" text-black m-5 text-3xl  mt-10">
          <h1 style={{ marginBottom: 50 }}>Dashboard</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 m-5 justify-items-center">
          {ActivityfeedData.map((val, ind) => {
            return (
              <Activityfeed
                key={ind}
                Title={val.Title}
                desc={val.describtion}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
