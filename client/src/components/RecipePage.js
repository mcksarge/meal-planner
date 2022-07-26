import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import MealReview from './MealReview';

function RecipePage({user}) {
    let params = useParams()
    const [currentMeal, setCurrentMeal] = useState([])
    const [loading, setLoading] = useState(false)
    const [showReview, setShowReview] = useState(false)
    const [review, setReview] = useState("")
    const [rating, setRating] = useState("")


    //Fetch current meal using params
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:3000/meals/${params.id}`)
            .then((res) => res.json())
            .then((data) => setCurrentMeal(data))
            .finally(() => {
                setLoading(false)
            })
    }, [])
     /*************** */
    
    function handleAddReview() {
        setShowReview(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let user_id = user.id
        let meal_id = currentMeal.id

        
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

    //Assign reviews to variable
    const mealReviews = currentMeal.reviews

    if(loading){
        return <p>Data is loading...</p>
    }else{
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
                            {mealReviews?.map((review, i) => {
                                 return (
                                    <MealReview key={i} review={review} />
                                )
                            })}
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
                        <h4>Create Review:</h4>
                        <br></br>
                        <label>Select Rating: </label>
                        <select onChange={(e) => setRating(e.target.value)}>
                            
                            <option value=""></option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                        <br></br>
                        <textarea rows = "5" cols = "60" name = "review" placeholder='Enter review here...' onChange={(e) => setReview(e.target.value)}></textarea>
                        <br></br>
                        <button type="submit">Submit Review</button>
                    </form>
                    <div className="meal-review">
                        <div>
                            <h2>Reviews:</h2>
                            {mealReviews?.map((review, i) => {
                                 return (
                                    <MealReview key={i} review={review} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        }
        
    }
    }
    

export default RecipePage;