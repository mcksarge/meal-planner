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

    function handleDelete(e) {
        e.preventDefault()
        
        fetch(`/reviews/${review.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    

    return (
        <div className="review-div">
            <h4>Rating: {review.rating}/5</h4>
            <h4>{review.review}</h4>
            {user}
            <button onClick={handleDelete}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default MealReview