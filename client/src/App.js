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
  const [currentUser, setCurrentUser] = useState(null)
  const [allMeals, setAllMeals] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [refreshMeals, setRefreshMeals] = useState(true)

  //Get Meals
  useEffect(() => {
    setRefreshMeals(false)
    fetch("http://localhost:3000/meals")
      .then((res) => res.json())
      .then((meals) => setAllMeals(meals))

    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((users) => setAllUsers(users))

  }, [refreshMeals])


  function handleLogin(user) {
    setCurrentUser(user)
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok){
        setCurrentUser(null)
      }
    })
  }

  function handleRefreshMeals() {
    setRefreshMeals(true)
  }

  //Auto login
  useEffect(() => {
    fetch('/me').then((res) => {
      if(res.ok){
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  if(!currentUser) return <LoginPage onLogin={setCurrentUser} />
  return (
    <div className="App">
        <h1>The Meal Planner</h1>
        <button id="logout-btn" onClick={handleLogout}>Logout</button>
        <Links />
        <Routes>
          <Route path='/' element={<Home currentUser={currentUser} />} />
          <Route path='/meals' element={<MealList meals={allMeals} refreshMeals={handleRefreshMeals} />} />
          <Route path='/signuppage' element={<SignUpPage onLogin={handleLogin} />} />
          <Route path='/meals/:id' element={<RecipePage meals={allMeals} allUsers={allUsers} />} />
        </Routes>
    </div>
  );
}

export default App;
