import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import Comment from "./Pages/Comment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comment/:id" element={<Comment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
