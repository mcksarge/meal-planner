

function MealCard({name, cooking_time, image}) {


    return (
        <div className="meal-card">
            <h3>{name}</h3>
            <h4>Cooking Time: {cooking_time}</h4>
            <img src={image} className="meal-image-card"></img>
            <button>Recipe</button>
        </div>
    )
}

export default MealCard