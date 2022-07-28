import { useEffect, useState } from 'react';

function Home({currentUser}) {



    return (
        <div>
            <h3>Welcome, {currentUser.name}, to the <strong>Meal Planner!</strong></h3>
            <h4>Here you can:</h4>
            <p>- Look through user created meals</p>
            <p>- Like your favorite meals</p>
            <p>- Create your own meals for other uses to enjoy</p>
            <p>- Leave reviews for meals you've tried</p>
            <br></br>
            <img src="https://th.bing.com/th/id/OIP.m-8OgZGFo1xuXhIFmdwyYwHaE8?pid=ImgDet&rs=1" alt="A large table of food"></img>
            <div>
               
            </div>

        </div>
    )


}

export default Home;