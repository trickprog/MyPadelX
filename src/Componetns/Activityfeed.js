import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import {Api} from '../Api'
export default function Activityfeed(props) {

    const deletactiviy = (uid) => {
        axios
          .delete(`${Api}/GetActivity/${uid}`,{headers:{'Authorization':`Bearer ${localStorage.FbIdToken}`}})
          .then((res) => {
            console.log(res.data);
            alert(res.data)
            window.location.reload(true)
          })
          .catch((err) => {
            console.error(err);
          });
      
      };
  return (
    <>
      <div class="max-w-sm bg-blue-500 rounded-lg  shadow-md font-Poppins">
        <div className="relative">
            <div  className="absolute right-0 m-2"><CancelIcon onClick={(e) => deletactiviy(props.AID)} sx={{color:'white'}} /></div>
          
          <img class="rounded-t-lg h-[250px] w-full" src={props.img} alt="" />
        </div>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              {props.Title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-white">{props.desc}</p>
        </div>
      </div>
    </>
  );
}
