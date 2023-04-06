

 export const productAction=()=>async(dispatch)=>{

    const data= await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    dispatch({type:"GET_PRODUCTS",payload:data})
}


export const productActionDetail=(id)=>async(dispatch)=>{

    const data= await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    dispatch({type:"GET_DETAIL",payload:data})
}