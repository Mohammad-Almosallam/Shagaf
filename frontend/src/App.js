import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hero from "./components/Hero";
import LeftBar from "./components/LeftBar";
import "@ionic/react/css/core.css";

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <div className="divider">
            <LeftBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
