
import {useEffect, useState} from 'react';

function MealReview(props) {
    const [user, setUser] = useState(null)

    let review = props.review
    
    //Fetches User associated with Review
    useEffect(() => {
        fetch(`/reviews/${review.id}/user`)
        .then(res => res.json())
        .then(data => setUser(data.name))
    }, [])
    /********************* */

    //Handles deletion of Review
    function handleDelete(e) {
        fetch(`/reviews/${review.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => props.handleDelete(data))
    }
    /******************* */
    
    
    return (
        <div className="review-div">
            <h4>Rating: {review.rating}/5</h4>
            <h4>"{review.review}"</h4>
            <i>{user}</i>
            <br></br>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default MealReview