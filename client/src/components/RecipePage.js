import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import MealReview from './MealReview';

function RecipePage({meals, user}) {
    let params = useParams()
    const [showReview, setShowReview] = useState(false)
    const [review, setReview] = useState("")
    const [rating, setRating] = useState("")

   



    let currentId = params.id
    
    const currentMeal = meals.find((meal) => {
        return meal.id == currentId
    })


    
    
    let mealReviews = currentMeal.reviews.map((review, i) => {
        
        return (
            <MealReview key={i} review={review} />
        )
    })

    function handleAddReview() {
        setShowReview(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let user_id = user.id
        let meal_id = currentId

        
        fetch(`/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rating,
                review,
                user_id,
                meal_id
            })
        })
        .then(res => res.json())
        .then(data => (data))

    }


    if(!showReview){
        return (
            <div>
                <p>Hello Recipes!  Get your recipes here!</p>
                <h1>{currentMeal.name}</h1>
                <h3>Cooking Time: {currentMeal.cooking_time} minutes</h3>
                <img src={currentMeal.image} className="meal-image"></img>
                <h2>Recipe:</h2>
                <p>{currentMeal.recipe}</p>
                <button onClick={handleAddReview}>Add a review</button>
                <div className="meal-review">
                    <div>
                        <h2>Reviews:</h2>
                        {mealReviews}
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div>
                <p>Hello Recipes!  Get your recipes here!</p>
                <h1>{currentMeal.name}</h1>
                <h3>Cooking Time: {currentMeal.cooking_time} minutes</h3>
                <img src={currentMeal.image} className="meal-image"></img>
                <h2>Recipe:</h2>
                <p>{currentMeal.recipe}</p>
                <form id="add-review-form" onSubmit={handleSubmit}>
                    <label>Choose Rating:</label>
                    <br></br>
                    <select onChange={(e) => setRating(e.target.value)}>
                        <option value=""></option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                    <br></br>
                    <textarea rows = "5" cols = "60" name = "review" onChange={(e) => setReview(e.target.value)}>
                        Enter review here...
                    </textarea>
                    <br></br>
                    <button type="submit">Submit Review</button>
                </form>
                <div className="meal-review">
                    <div>
                        <h2>Reviews:</h2>
                        {mealReviews}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default RecipePage;