import { NavLink} from 'react-router-dom';
import { useState } from 'react';


function MealCard({meal, onDeleteMeal}) {
    const [likes, setLikes] = useState(meal.likes)

    //Handles Deletion of meal
    function handleDelete() {
        fetch(`/meals/${meal.id}`, {
            method: "DELETE"
        })
        .then((res) => {
            if(res.ok){
                onDeleteMeal(meal.id)
            }
        })
    };
    //************************ */

    //Handles Like of meal
    function handleLike() {
        let liked = likes + 1

        fetch(`/meals/${meal.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "likes": liked
            })
        })
        .then(res => res.json())
        .then(data => setLikes(data.likes))
    };
    //********************** */

    return (
        <div className="meal-card">
            <button className="delete-meal-btn" onClick={handleDelete}>X</button>
            <button className="likes-btn" onClick={handleLike}>{likes} Likes</button>
            <h3>{meal.name}</h3>
            <h4>Cooking Time: {meal.cooking_time} minutes</h4>
            <img src={meal.image} alt={meal.name} className="meal-image-card"></img>
            <br></br>
            <NavLink to={`/meal/${meal.id}`} className="recipe-btn">Recipe</NavLink>
        </div>
    )
};

export default MealCard