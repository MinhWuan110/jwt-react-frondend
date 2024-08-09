import "./App.css";
import Home from "./components/Home";
// import Nav from  './components/Navigation/Nav'
import Login from "./components/login/Login";
import Regester from "./components/Regester/Regester";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Regester" element={<Regester />} />
          <Route path="/News" />
          <Route path="/Contact" />
          <Route path="/About" />
        </Routes>
      </Router>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
    </>
  );
}

export default App;
