import React from "react";
export default function SocreBoardTbody(props) {


const position=props.Position
  return (
    <>
      <tbody>
       <tr class={ position % 2 === 0 ? "bg-white  text-black":"bg-gray-200  text-black"}>
          <td class="py-4 px-6 flex items-center  text-base text-center font-medium">
 
           <div className="text-[24px]">{position}</div>
            <img
              class="w-10 h-10 rounded-full mx-4"
              src={require("./profile/img" + props.pimg + ".png")}
              alt="player"
            />

            {props.playerName}
          </td>
          <td class="py-4 px-6"><label class="bg-red-800 rounded-full p-1.5 text-white">{props.SPL}</label></td>
          <td class="py-4 px-6">{props.SPP}</td>
          <td class="py-4 px-6">{props.SPF}</td>
        </tr>
      </tbody>
    </>
  );
}
