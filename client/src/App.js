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

  

  // Auto Login
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

  
  console.log("from app")
  if(!user) return <LoginPage onLogin={setUser} />
  return (
    <div className="App">
        <h1>The Meal Planner</h1>
        <Links user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home currentUser={user} />} />
          <Route path='/meals' element={<MealList />} />
          <Route path='/signuppage' element={<SignUpPage onLogin={handleLogin} />} />
          <Route path='/meals/:id' element={<RecipePage user={user} />} />
        </Routes>
    </div>
  );
}

export default App;
