

function MealReview({key, rating, review, userId, users}) {
    console.log(userId)
    console.log(users)
    
    let reviewUser = users.find((user) => {
        return user.id == userId
    })

    return (
        <div className="review-div">
            <h3>"{review}"</h3>
            <p>{reviewUser.name}</p>
        </div>
    )
}

export default MealReview