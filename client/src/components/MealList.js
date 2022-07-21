import React from "react";
import MealCard from "./MealCard";
import {useState, useEffect} from "react";
import RecipePage from "./RecipePage";

function Meals({}){
    const [meals, setMeals] = useState([])
    const [refreshMeals, setRefreshMeals] = useState(true)
    const [showAddMeal, setShowAddMeal] = useState(false)
    const [name, setName] = useState("")
    const [recipe, setRecipe] = useState("")
    const [image, setImage] = useState("")
    const [cooking_time, setCooking_time] = useState("")

    //Gets meals
    useEffect(() => {
          setRefreshMeals(false)
          fetch("http://localhost:3000/meals")
            .then((res) => res.json())
            .then((data) => setMeals(data))
    }, [refreshMeals])
    /************************* */

    let allMeals = meals.map((meal, i) => {
        return (
            <>
                <MealCard 
                key={i}
                id={meal.id}
                name={meal.name}
                cooking_time={meal.cooking_time}
                recipe={meal.recipe}
                image={meal.image}
                onDeleteMeal={onDelete}
                />
            </>
        )
    })

    function onDelete(){
        refreshMeals()
    }

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
        .then((newMeal) => refreshMeals(newMeal))
    }
    

    if(!showAddMeal){
        return (
            <>
                <button id="new-recipe-btn" onClick={handleNewMeal}>Add Recipe</button>
                <div id="meal-list">
                    {allMeals}
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
                    {allMeals}
                </div>
            </>
        )
    }
    
}

export default Meals