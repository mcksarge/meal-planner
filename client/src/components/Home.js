import { useEffect, useState } from 'react';

function Home({currentUser}) {

    const [userMeals, setUserMeals] = useState([])
    const [createdMeals, setCreatedMeals] = useState([])

    useEffect(() => {
        fetch(`/users/${currentUser.id}/summary`)
        .then(res => res.json())
        .then(data => setUserMeals(data))
    }, [])

    const myMeals = userMeals
    console.log([myMeals])

    return (
        <div>
            <h3>Welcome, {currentUser.name}, to the <strong>Meal Planner!</strong></h3>
            <p>Here you can:</p>
            <ul>
                <li>- Look through user created meals</li>
                <li>- Like your favorite meals</li>
                <li>- Create your own meals for other uses to enjoy</li>
                <li>- Leave reviews for meals you've tried</li>
            </ul>
            <img src="https://th.bing.com/th/id/OIP.m-8OgZGFo1xuXhIFmdwyYwHaE8?pid=ImgDet&rs=1" alt="A large table of food"></img>
            <div>
                {myMeals?.map((meal, i) => {
                    return (
                        <p>{meal.name}</p>  
                    )
                })}
            </div>

        </div>
    )


}

export default Home;