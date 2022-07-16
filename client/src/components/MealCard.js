

function MealCard({name, cooking_time, image}) {


    return (
        <div className="meal-card">
            <h3>{name}</h3>
            <h4>Cooking Time: {cooking_time} minutes</h4>
            <img src={image} alt={name} className="meal-image-card"></img>
            <br></br>
            <button className="recipe-btn">Recipe</button>
        </div>
    )
}

export default MealCard