import { NavLink, Routes, Route } from 'react-router-dom'
import RecipePage from "./RecipePage";

function MealCard({meal, onDeleteMeal, user}) {


    function handleDelete() {
        fetch(`/meals/${meal.id}`, {
            method: "DELETE"
        })
        .then((res) => {
            if(res.ok){
                onDeleteMeal(meal.id)
            }
        })
    }


    return (
        <div className="meal-card">
            <button className="delete-meal-btn" onClick={handleDelete}>X</button>
            <h3>{meal.name}</h3>
            <h4>Cooking Time: {meal.cooking_time} minutes</h4>
            <img src={meal.image} alt={meal.name} className="meal-image-card"></img>
            <br></br>
            <NavLink to={`/meals/${meal.id}`} className="recipe-btn">Recipe</NavLink>
            {/* <Routes>
                <Route path=':id' element={<RecipePage meal={meal} user={user} />} />
            </Routes>  */}
        </div>
    )
}

export default MealCard