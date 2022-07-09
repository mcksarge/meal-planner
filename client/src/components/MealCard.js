

function MealCard({name, recipe, cooking_time, image}) {


    return (
        <div>
            <h3>{name}</h3>
            <h4>Cooking Time: {cooking_time}</h4>
            <img src={image} classname="meal-image-card"></img>
            <p>{recipe}</p>
        </div>
    )
}

export default MealCard