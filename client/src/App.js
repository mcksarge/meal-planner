import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Meals from './components/Meals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <h1>The Meal Planner</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/meals' element={<Meals />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
