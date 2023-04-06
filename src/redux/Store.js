import {combineReducers,createStore,applyMiddleware} from "redux"
import  {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { productReducer } from "./reducers/products"
import { productDetailReducer } from "./reducers/productdetails"
import { cardReducer } from "./reducers/card"
import  {drawerReducer}from "./reducers/Draver"
import { searchReducer } from "./reducers/search"

 
const cardItems= JSON.parse(localStorage.getItem("cardItems")) ||  []

let initialState={
        card:{cardItems}

}

const reducers=combineReducers({
        drawer:drawerReducer,
       products:productReducer,          
       product:productDetailReducer,
        card:cardReducer,
      search:searchReducer

})

const Store=createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default Store