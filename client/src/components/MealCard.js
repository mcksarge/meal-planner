

function MealCard({name, cooking_time, image}) {


    return (
        <div class="meal-card">
            <h3>{name}</h3>
            <h4>Cooking Time: {cooking_time}</h4>
            <img src={image} class="meal-image-card"></img>
            <button>Recipe</button>
        </div>
    )
}

export default MealCard