import {useParams} from 'react-router-dom'

function RecipePage({meals}) {
    let params = useParams()

    let currentId = params.id
    
    const currentMeal = meals.find((meal) => {
        return meal.id == currentId
    })


    return (
        <div>
            <p>Hello Recipes!  Get your recipes here!</p>
            <p>{currentMeal.recipe}</p>
        </div>
    )
}

export default RecipePage;