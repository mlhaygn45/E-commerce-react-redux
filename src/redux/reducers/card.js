


export const cardReducer=(state={cardItems:[]},action)=>{
    switch (action.type) {
        case "ADD_CARD":
            const item=action.payload
            const existitem=state.cardItems.find(x=>x.id===item.payload)
            if(existitem){
                          
                return{  
                    ...state,
                    cardItems:state.cardItems.map(x=>x.id===existitem.id ? item :x )
                
                }
            }else{
                return{
                    ...state,
                    cardItems: [...state.cardItems,item]
                }

            }

               case "REMOVE_CARD":

               return{
            cardItems:state.cardItems.filter(x=>x.id!==action.payload)
               }
            
               default:
               return state
    
    }
}