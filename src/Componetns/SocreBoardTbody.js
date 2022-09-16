import React from "react";
export default function SocreBoardTbody(props) {

  
  return (
    
    <>
  
      <tbody>
        <tr class={props.index % 2 === 0 ? "bg-white  text-black":"bg-gray-200  text-black"}> 
       {/* <tr> */}
          <td class="py-4 px-6 flex items-center  text-base text-center font-medium">
 
           <div className="text-[24px]">{props.index+1}</div>
            <img
              class="w-10 h-10 rounded-full mx-4"
              src={props.pimg}
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
