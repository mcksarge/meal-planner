import React from "react";
import MealCard from "./MealCard";
import {useState, useEffect} from "react";


function Meals({user}){
    const [meals, setMeals] = useState([])
    const [showAddMeal, setShowAddMeal] = useState(false)
    const [name, setName] = useState("")
    const [recipe, setRecipe] = useState("")
    const [image, setImage] = useState("")
    const [cooking_time, setCooking_time] = useState("")


    //Gets meals
  useEffect(() => {
    fetch("/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data))
  }, [])
  /************************* */
 
  //Iterate and send meals to Meal Card
    let allMeals = meals.map((meal, i) => {
        return (
            <>
                <MealCard 
                key={i}
                meal={meal}
                onDeleteMeal={onDelete}
                user={user}
                />
            </>
        )
    })
    /************************** */

    //Handles deletion of meal
    function onDelete(deletedMeal){
        const updatedMeals = meals.filter((meal) => meal.id !== deletedMeal)
        setMeals(updatedMeals)
    }
    /****************** */

    //Refreshes list on creation of new meal
    function handleNewMeal() {
        setShowAddMeal(true)
    }
    /****************** */

    //Add meal
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
                image,
                likes: 0
            })
        })
        .then((res) => res.json())
        .then((newMeal) => setMeals([newMeal, ...meals]))
    }
    /********************* */

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
                        <br></br>
                        <input placeholder="Cooking Time in minutes" onChange={(e) => setCooking_time(e.target.value)}></input>
                        <br></br>
                        <textarea id="meal-recipe-textbox" rows = "5" cols = "60" name = "recipe" onChange={(e) => setRecipe(e.target.value)}></textarea>
                        <br></br>
                        <input placeholder="Image URL" onChange={(e) => setImage(e.target.value)}></input>
                        <br></br>
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