import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favourite from "./pages/Favourite";
import Navbar from "./components/NavBar";
import "./css/App.css";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<Favourite />} />
          </Routes>
        </main>
        <HomePage />
      </div>
    </>
  );
}

export default App;
