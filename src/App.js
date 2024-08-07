
import './App.css';
import Home from './components/Home';
// import Nav from  './components/Navigation/Nav'
import Login from './components/login/Login';
import Regester from './components/Regester/Regester';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    
    <Router>
      <Routes>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Regester" element={<Regester/>}/>
          <Route path="/News"/>
          <Route path="/Contact"/>
          <Route path="/About"/>
        </Routes>
    </Router>
  );
}

export default App;
