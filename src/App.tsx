import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favourite from "./pages/Favourite";
import Navbar from "./components/NavBar";
import LogInPage from "./pages/logInPage";
import "./css/App.css";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/favourites" element={<Favourite />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
