import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import MealList from './components/MealList';
import Links from './components/Links';
import SignUpPage from './components/SignUpPage';
import RecipePage from './components/RecipePage';
import {Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";

function App() {
  const [user, setUser] = useState(null)
  const [refreshMeals, setRefreshMeals] = useState(true)

  //Get Meals
  // 
    useEffect(() => {
      
      fetch('/me').then((res) => {
        if(res.ok){
          res.json().then((data) => setUser(data));
        }
      });

    }, [])




  function handleLogin(user) {
    setUser(user)
  }

  function handleRefreshMeals() {
    setRefreshMeals(true)
  }

  //Auto login
  
  console.log("from app")
  if(!user) return <LoginPage onLogin={setUser} />
  return (
    <div className="App">
        <h1>The Meal Planner</h1>
        <Links user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home currentUser={user} />} />
          <Route path='/meals' element={<MealList refreshMeals={handleRefreshMeals} />} />
          <Route path='/signuppage' element={<SignUpPage onLogin={handleLogin} />} />
          <Route path='/meals/:id' element={<RecipePage />} />
        </Routes>
    </div>
  );
}

export default App;
