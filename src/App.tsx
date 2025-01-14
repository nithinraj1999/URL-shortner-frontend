import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UrlShortner from "./pages/UrlShortner";
import RedirectPage from "./pages/RedirectPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<UrlShortner />} />
        <Route path="/:shortened" element={<RedirectPage />} />
        
      
      </Routes>
    </Router>
  );
}

export default App;
