import React from "react";

const Productcard=({prd})=>{
    return(
         <div className=" hover:border-indigo-600 w-1/5 h-80 border  rounded-lg m-2 flex flex-col items-center p-1  ">
            <img onClick={()=>window.location=`details/${prd.id}`} className="h-32" src={prd?.image} />
            <div className="font-bold text-center text-sm  mt-2">{(prd?.title).substring(0,45)}</div>
            <div className="text-center opaticy-70 text-sm">{prd?.description.substring(0,45)} </div>
            <div className="font-bold text-lg">{prd?.price}TL </div>
            <button className="bg-indigo-600 w-full p-2 rounded-lg text-white ">sepete ekle</button>
        </div>
    )

}

export default Productcard