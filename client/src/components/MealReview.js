import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

function MealReview(props) {
    const [user, setUser] = useState(null)

    let review = props.review
    

    useEffect(() => {
        fetch(`/reviews/${review.id}/user`)
        .then(res => res.json())
        .then(data => setUser(data.name))
    }, [])

    
    

    return (
        <div className="review-div">
            <h4>Rating: {review.rating}/5</h4>
            <h4>{review.review}</h4>
            {user}
        </div>
    )
}

export default MealReview