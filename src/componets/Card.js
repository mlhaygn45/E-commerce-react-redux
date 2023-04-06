import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { removecard } from "../redux/actions/card";


const Card = () => {
    const dispatch = useDispatch()
  const {cardItems}=useSelector(state=>state.card)
  
  const deletecard=(id)=>{
     
    dispatch(removecard(id))

  }
   
    return (

        <div className="w-1/3 h-full border fixed top-0 z-50 right-0 bg-white p-3 border-b gb-4">

            <div className=" flex items-center h-10 justify-between">

                <h1 className="text-2xl">sepetim</h1>
                <AiOutlineCloseCircle onClick={() => dispatch({ type: "DRAWER", payload: false })} size={25} className="cursor-pointer" />
            </div>

         {
             cardItems?.map((card,index)=>(
            <div key={index} className="h-28 flex items-center justify-between py-4 mt-5">
                <img className="h-24" src={card?.image} />
               <div className="w-44">

              <div className="font-bold text-sm">{card?.title} ({card?.qty}) </div>
              <div className="text-xs">{(card?.description).slice(0,45)}</div>
               
               </div>

               <div className="font-bold text-lg">{card?.price}</div>
                    <div onClick={()=>deletecard(card.id)}  className="bg-red-500 w-20 p-2 text-white rounded-lg cursor-pointer">sil</div>

            </div>
            
                ) )
             
             
         }
      
            
        </div>
    )
}

export default Card