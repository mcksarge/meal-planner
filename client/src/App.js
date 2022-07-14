import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import MealList from './components/MealList';
import Links from './components/Links';
import SignUpPage from './components/SignUpPage';
import {Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";

function App() {
  const [user, setUser] = useState(null)

  function handleLogin(user) {
    setUser(user)
  }


  return (
    <div className="App">
        <h1>The Meal Planner</h1>
        <Links />
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/meals' element={<MealList />} />
          <Route path='/signuppage' element={<SignUpPage onLogin={handleLogin} />} />
        </Routes>
    </div>
  );
}

export default App;
