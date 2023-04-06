import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction, productActionDetail } from "../redux/actions/Products";
import Productcard from "../componets/productCard";
import { searchAction } from "../redux/actions/search";


const Home=()=>{
    const dispatch=useDispatch()
const {products}=useSelector(state=>state.products)
const {search}=useSelector((state)=>state.search)
console.log("products",products);
useEffect(()=>{

    dispatch(productAction())
    dispatch(searchAction())
},[dispatch])

    return(
        <div className="flex flex-wrap justify-center">
     {
        search.length > 0 ?
         search.map((prd,index)=>(
            <Productcard key={index} prd={prd} />
        )):
         

        products &&products.map((prd,index)=>(
            <Productcard key={index} prd={prd} />
        ))
     }
         
        </div>
    )
}
export default Home