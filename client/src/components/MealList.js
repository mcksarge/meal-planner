import React from "react";
import MealCard from "./MealCard";
import {useState, useEffect} from "react";

function Meals(){
    const [allMeals, setAllMeals] = useState([])
    const [refreshMeals, setRefreshMeals] = useState(true)
    const [showAddMeal, setShowAddMeal] = useState(false)
    const [name, setName] = useState("")
    const [recipe, setRecipe] = useState("")
    const [image, setImage] = useState("")
    const [cooking_time, setCooking_time] = useState("")

    useEffect(() => {
        setRefreshMeals(false)
        fetch("http://localhost:3000/meals")
            .then((res) => res.json())
            .then((meals) => setAllMeals(meals))
    }, [refreshMeals])

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

    function handleNewMeal() {
        setShowAddMeal(true)
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/meals', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                cooking_time,
                recipe,
                image
            })
        })
        .then((res) => res.json())
        .then((newMeal) => setRefreshMeals(true))
    }
    

    if(!showAddMeal){
        return (
            <>
                <button id="new-recipe-btn" onClick={handleNewMeal}>Add Recipe</button>
                <div id="meal-list">
                    {meals}
                </div>
            </>
        )
    }else{
        return (
            <>
                <button id="new-recipe-btn" onClick={handleNewMeal}>Add Recipe</button>
                <div id="new-recipe-div">
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Meal name" onChange={(e) => setName(e.target.value)}></input>
                        <input placeholder="Cooking Time" onChange={(e) => setCooking_time(e.target.value)}></input>
                        <input placeholder="Recipe" onChange={(e) => setRecipe(e.target.value)}></input>
                        <input placeholder="Image" onChange={(e) => setImage(e.target.value)}></input>
                        <button id="add-recipe-btn">Submit</button>
                    </form>
                </div>
                <div id="meal-list">
                    {meals}
                </div>
            </>
        )
    }
    
}

export default Meals