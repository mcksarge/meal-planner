import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import MealList from './components/MealList';
import Links from './components/Links';
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
        <Links onLogin={handleLogin} />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/meals' element={<MealList />} />
        </Routes>
    </div>
  );
}

export default App;
