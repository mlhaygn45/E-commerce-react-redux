import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productActionDetail } from "../redux/actions/Products";
import {CgMathPlus,CgMathMinus} from "react-icons/cg"
import { productCard } from "../redux/actions/card";


const Details=()=>{
const[count,setcount]=useState(0)
const{id}=useParams()
const dispatch=useDispatch()
const {product}=useSelector(state=>state.product)

useEffect(()=>{
 
    dispatch(productActionDetail(id) )
   
},[dispatch])
console.log(product,"product");

const increment=(stock)=>{
 if(count <=stock){
    setcount(count+1)
 }    

}

const decrement=()=>{
    if(count >0){
        setcount(count-1)
     }    


}
const addCard=()=>{
    dispatch( productCard(id,count))
    dispatch({type:"DRAWER",payload:true})
    
 }

    
   
    return(
        <div className="w-full flex items-center justify-center space-x-5">
      <img className="w-1/3 " src={product?.image} />
       <div className="2/3">
       <div className= " font-bold text-xl">{product?.title} </div>
        <div className="opaticy-70 "> {product?.description} </div>
        <div className="opaticy-70">category:{product?.category} </div>
        <div>rate:{product?.rating?.rate} - stock:{product?.rating?.count} </div>
        <div className=" font-bold opaticy-70 text-xl"> {product?.price } tl</div>
        
        <div className="flex items-center space-x-4 m-5">
        <CgMathMinus onClick={decrement} className="cursor-pointer border rounded-full p-1" size={30}/>
        <span className="text-xl">{count} </span>
       <CgMathPlus onClick={()=>increment(product?.rating?.count)} className="ursor-pointer border rounded-full p-1" size={30}/>
        </div>
        <button onClick={addCard} className="p-3 w-full text-center  bg-indigo-600 rounded-lg text-white ">sepete ekle</button>
        </div>
        </div>
    )
}

export default Details