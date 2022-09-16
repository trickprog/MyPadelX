import React, { useState,useEffect } from "react";
import {Api} from '../Api'
import Activityfeed from "./Activityfeed";
import axios from "axios";
export default function Dashboard() {

  const [ActivityfeedData, setActivityfeedData] = useState([]);

const Activity = () => {

  axios.get( `${Api}/GetActivity`)
  .then((res)=>{
    setActivityfeedData(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

useEffect(() => {
  Activity();
}, []);
  
  return (
    <>
      <div className="font-Poppins w-full">
        <div className=" text-black m-5 text-3xl  mt-10">
          <h1 style={{ marginBottom: 50 }}>Dashboard</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 m-5 justify-items-center">
          {ActivityfeedData.map((val, ind) => {
            return (
              <Activityfeed
                key={ind}
                AID={val.activityID}
                Title={val.title}
                desc={val.describe}
                img={val.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
