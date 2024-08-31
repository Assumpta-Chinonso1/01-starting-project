 
 import { createContext, useReducer } from "react";

 const CartContext = createContext( {
          items:  [],
          addItems: (item) => {},
          removeItem: (id) => {}
 })

 function cartReducer(state, action) {
        if (action.type === 'ADD_ITEM') {
         state.items.push(action.item)       //update the state to add a meal item
                
        }

        if (action.type === 'REMOVE_ITEM') {
          const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id)  
                //find the index of item to remove
                //remove item from the state

                const updateItems =[...state.items] // creates the copy of he current state

                if(existingCartItemIndex >  -1) {
                        const existingItem = state.items[existingCartItemIndex] //Get the existing items

                        const updateItem = {
                                ...existingItem,
                                quantity: existingItem. quantity + 1
                        } //update the quantity of the exising items

                        updateItems[existingCartItemIndex] = updateItem //Replace the old item with the update Item
                        
                } else{
                     updateItems.push({...action.item, quantity: 1}) //Add the new item with the quantity of 1
                }

                return {...state, items: updateItems}  //Return the update state
        }

        if (action.type === 'REMOVE_ITEM') {
                const existingCartItemIndex = state.items.findIndex(
                        (item) => item.id === action.item.id)
        }

        return state; // return the current state if the action type is not reconginzed
        
 }

  export function CartContextProvider({children}) {
 
        useReducer(cartReducer, {items: []})

   return <CartContext.Provider>
           {children}
   </CartContext.Provider>  
    
 };

 export default CartContext