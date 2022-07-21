import {useParams} from 'react-router-dom';
import {useState} from 'react';
import MealReview from './MealReview';
import {useLocation} from "react-router-dom";

function RecipePage() {
    let params = useParams()
    let location = useLocation()
    let meals = location.state
    console.log(location.state)
    


    let currentId = params.id
    
    const currentMeal = meals.find((meal) => {
        return meal.id == currentId
    })

    let review = currentMeal.reviews
    console.log(review)

    let mealReviews = review.map((review, i) => {
        return (
            <MealReview key={i} rating={review.rating} review={review.review} userId={review.user_id} />
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