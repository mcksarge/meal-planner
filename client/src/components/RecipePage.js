import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import MealReview from './MealReview';

function RecipePage({meals}) {
    let params = useParams()
    console.log(params)
    
    useEffect(() => {
        fetch(`/reviews`)
        .then((res) => res.json())
        .then((data) => console.log("my data: " + data))
    }, [])

    let currentId = params.id
    
    const currentMeal = meals.find((meal) => {
        return meal.id == currentId
    })

    let review = currentMeal.reviews
    

    let mealReviews = review.map((review, i) => {
        return (
            <MealReview review={review} />
        )
    })



    return (
        <div>
            <p>Hello Recipes!  Get your recipes here!</p>
            <h1>{currentMeal.name}</h1>
            <h3>Cooking Time: {currentMeal.cooking_time} minutes</h3>
            <img src={currentMeal.image} className="meal-image"></img>
            <h2>Recipe:</h2>
            <p>{currentMeal.recipe}</p>
            <button>Add a review</button>
            <div className="meal-review">
                <div>
                    <h2>Reviews:</h2>
                    {mealReviews}
                </div>
            </div>
        </div>
    )
}

export default RecipePage;