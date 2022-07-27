import './App.css';
import { useState } from 'react';
import { Top } from './components/topbar/Top';
import { LightDarkContext } from "./context/LightDarkContext"
import { Home } from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SingleCityPage } from './pages/singleCityPage/SingleCityPage';




function App() {



  const [theme, setTheme] = useState(true)

  return (
    <Router>
      <LightDarkContext.Provider value={{ theme, setTheme }}>
        <div className={`app ${theme ? "light" : "dark"}`}  >
          <Top />
          <Routes>
            <Route  path="/" element={<Home />}></Route>
            <Route  path="/singlepage/:id" element={<SingleCityPage />}></Route>
          </Routes>
        </div>
      </LightDarkContext.Provider>
    </Router>
  );

}

export default App;
