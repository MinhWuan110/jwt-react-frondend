import "./App.css";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Regester from "./components/Regester/Regester";
import User from "./components/Users/user";
import News from "./components/News/News";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

  // const [account, setAccount] = useState({});

  // useEffect(()=>{
  //   let session = sessionStorage.getItem('account');
  //   if(session){
  //     setAccount(JSON.parse(session));
  //   }
  // },[])
  


  return (
    <>
      <Router>
                  {/* <div className="app-container">
            {
              account && _.isEmpty(account) && account.isAuthenticated && <Nav/>
            }
          </div> */}
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
          <Route path="/Regester" element={<Regester />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" />
          <Route path="/about" />
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
