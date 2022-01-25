import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "./components/pokemon/Pokemon";
import "./App.bootstrap.min.css";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import backgroundImage from "./pattern.png";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ background: `url(${backgroundImage})` }}>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />

            <Route exact path="/pokemon/:pokemonIndex" element={<Pokemon />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
