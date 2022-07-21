import { NavLink } from 'react-router-dom'

function MealCard({name, id, cooking_time, recipe, image, onDeleteMeal}) {

    function handleDelete() {
        fetch(`/meals/${id}`, {
            method: "DELETE"
        })
        .then((res) => {
            if(res.ok){
                onDeleteMeal(id)
            }
        })
    }


    return (
        <div className="meal-card">
            <button className="delete-meal-btn" onClick={handleDelete}>X</button>
            <h3>{name}</h3>
            <h4>Cooking Time: {cooking_time} minutes</h4>
            <img src={image} alt={name} className="meal-image-card"></img>
            <br></br>
            <NavLink 
            to={`/meals/${id}`}
            state={{test: 'test'}} 
            className="recipe-btn"
            >
                Recipe
            </NavLink>
        </div>
    )
}

export default MealCard