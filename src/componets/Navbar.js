import React, { useEffect, useState, } from "react";
import { useDispatch,useSelector } from "react-redux";
import {BsFillBasket2Fill,BsFillMoonStarsFill} from "react-icons/bs"
import { searchAction } from "../redux/actions/search";
const Navbar=()=>{
const[color,setcolor]=useState(false)
const[search,setsearch]=useState("")
const dispatch=useDispatch()
const {cardItems}=useSelector(state=>state.card)


useEffect(()=>{
 
    const root =document.getElementById("root")
    if(color===true){
        root.style.backgroundColor="black"
        root.style.color="gray"
    }else{
        root.style.backgroundColor="white"
        root.style.color="black"
       
    }

},[color])
const searchPost=(e)=>{

    if(e.key==="Enter"){
        dispatch(searchAction(search))

    }
}
    return(
        <div className="flex items-center justify-between px-3 h-24">
     <div className="text-2xl font-bold tracking-wider">LOGO</div>
     <div className="flex  items-center space-x-4">
     <input onKeyPress={searchPost}  value={search} onChange={(e)=>setsearch(e.target.value)} className="border p-3 outline-none-rounded-lg" placeholder="search"/>
      <div onClick={()=>setcolor(!color)}>
       
        {
             color?  <BsFillMoonStarsFill size={30} className="cursor pointer"/>: <BsFillBasket2Fill size={30} className="cursor pointer"/>
        }

      </div>
    
     <div  onClick={()=>dispatch({type:"DRAWER",payload:true})} className="relative">

     <BsFillBasket2Fill size={30} className="cursor pointer"/>
     <span  className=" absolute -top-2 right-0  -right-3 px-2 bg-red-600 text-white rounded-full text-sm">{cardItems?.length} </span>
     </div>
     </div>
        </div>
    )
}

export default Navbar