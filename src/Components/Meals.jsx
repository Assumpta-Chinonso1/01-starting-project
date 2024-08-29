import { useState, useEffect } from "react"
import MealItem from "./MealItem"

 export default function Meals() {

    const [loadedMeals, setLoadedMeals] = useState([])
          
    useEffect(() => {
        async function fetchMeal() {
            //fetching data
    
            const response = await fetch('http://localhost:3000/meals')
    
               if (!response.ok) {
                //handling error
                
               }
            const meal = await response.json()
            setLoadedMeals(meal)
        }
        fetchMeal()
    }, [])
         
     return <ul id="meals">
          {loadedMeals.map((meals) => (
            <MealItem key={meals.id} meals={meals}/>
          )) }
        
     </ul>
 }