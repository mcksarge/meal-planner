import React from "react";
import MealCard from "./MealCard";
import {useState, useEffect} from "react";

function Meals(){
    const [allMeals, setAllMeals] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/meals")
            .then((res) => res.json())
            .then((meals) => setAllMeals(meals))
    }, [])

    let meals = allMeals.map((meal, i) => {
        return (
            <MealCard 
                key={i}
                name={meal.name}
                cooking_time={meal.cooking_time}
                image={meal.image}
            />
        )
    })
    


    return (
        <div>
            {meals}
        </div>
    )
}

export default Meals